import fs from "fs";
import path from "path";

const SPRITES_ROOT = path.join(process.cwd(), "public", "sprites");
const OUTPUT_FILE = path.join(process.cwd(), "src", "data", "characters.ts");

const IMG_RE = /\.(png|jpg|jpeg|webp)$/i;

function prettyName(dirName) {
    return dirName
        .replace(/[-_]+/g, " ")
        .replace(/\s+/g, " ")
        .trim()
        .replace(/\b\w/g, (m) => m.toUpperCase());
}

function toId(dirName) {
    return dirName.trim().toLowerCase();
}

function gameIdFromFolder(folder) {
    const g = folder.trim().toLowerCase();
    if (g === "undertale") return "undertale";
    if (g === "deltarune") return "deltarune";
    return g;
}

// lee subdirectorios seguros 
function safeReadDirs(absPath) {
    if (!fs.existsSync(absPath)) return [];
    return fs
        .readdirSync(absPath, { withFileTypes: true })
        .filter((d) => d.isDirectory())
        .map((d) => d.name);
}

const charMap = new Map();
/*
    charMap: id -> {
        id: string
        name: string
        games: Set<string>
        zones: Set<string>
        sprites: Set<string>
    }
*/
 function collect() {
    const gameFolders = safeReadDirs(SPRITES_ROOT);

    for (const gameFolder of gameFolders) {
        const gameAbs = path.join(SPRITES_ROOT, gameFolder);
        const gameId = gameIdFromFolder(gameFolder); 

        const zones = safeReadDirs(gameAbs);
        for (const zone of zones) {
            const zoneAbs = path.join(gameAbs, zone);

            const chars = safeReadDirs(zoneAbs);
            for (const charDir of chars) {
                const charAbs = path.join(zoneAbs, charDir);

                const files = fs
                    .readdirSync(charAbs, { withFileTypes: true })
                    .filter((f) => f.isFile() && IMG_RE.test(f.name))
                    .map((f) => f.name);

                if (files.length === 0) continue;

                const sprites = files.map(
                    (file) => `/sprites/${gameFolder}/${zone}/${charDir}/${file}`
                );

                const id = toId(charDir);
                const name = prettyName(charDir);

                if (!charMap.has(id)) {
                    charMap.set(id, {
                        id,
                        name,
                        games: new Set([gameId]),
                        zones: new Set([zone]),
                        sprites: new Set(sprites),
                    });
                } else {
                    const entry = charMap.get(id);
                    entry.games.add(gameId);
                    entry.zones.add(zone);
                    sprites.forEach((s) => entry.sprites.add(s));
                    if (name.length > entry.name.length) entry.name = name;
                }
            }
        }
    }
}

collect();

const characters = Array.from(charMap.values())
    .map((c) => ({
        id: c.id,
        name: c.name,
        games: Array.from(c.games).map((g) =>
            g === "undertale" || g === "deltarune" ? g : g
        ),
        zones: Array.from(c.zones).sort((a, b) =>
            a.localeCompare(b, undefined, { sensitivity: "base" })
        ),
        sprites: Array.from(c.sprites).sort((a, b) =>
            a.localeCompare(b, undefined, { sensitivity: "base" })
        ),
    }))
    .sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: "base" }));

const tsContent = `export type Character = {
    id: string;
    name: string;
    games: ('undertale' | 'deltarune' | string)[]; // permite más juegos si añades carpetas nuevas
    zones: string[];
    sprites: string[];
};

export const characters: Character[] = ${JSON.stringify(characters, null, 2)};

export function randomCharacter(filter?: { games?: string[]; zones?: string[] }) {
    let filtered = characters;

    if (filter?.games?.length) {
        const want = new Set(filter.games.map((g) => g.toLowerCase()));
        filtered = filtered.filter((c) => c.games.some((g) => want.has(g.toLowerCase())));
    }
    if (filter?.zones?.length) {
        const want = new Set(filter.zones.map((z) => z.toLowerCase()));
        filtered = filtered.filter((c) => c.zones.some((z) => want.has(z.toLowerCase())));
    }
    if (filtered.length === 0) return undefined;
    return filtered[Math.floor(Math.random() * filtered.length)];
    }
`;

fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true });
fs.writeFileSync(OUTPUT_FILE, tsContent, "utf-8");

console.log("✅ Archivo generado en: \${OUTPUT_FILE}");