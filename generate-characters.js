// generate-characters.js
import fs from "fs";
import path from "path";

const baseDir = path.join(process.cwd(), "public", "sprites", "Undertale");
const outputFile = path.join(process.cwd(), "src", "data", "characters.ts");

let characters = [];

function walkZones() {
    const zones = fs
        .readdirSync(baseDir, { withFileTypes: true })
        .filter((dirent) => dirent.isDirectory())
        .map((dirent) => dirent.name);

    zones.forEach((zone) => {
        const zonePath = path.join(baseDir, zone);
        const chars = fs
            .readdirSync(zonePath, { withFileTypes: true })
            .filter((dirent) => dirent.isDirectory())
            .map((dirent) => dirent.name);

        chars.forEach((char) => {
            const charPath = path.join(zonePath, char);
            const sprites = fs
                .readdirSync(charPath)
                .filter((file) => /\.(png|jpg|jpeg)$/i.test(file))
                .map((file) => `/sprites/Undertale/${zone}/${char}/${file}`);

            if (sprites.length > 0) {
                characters.push({
                    id: char.toLowerCase(),
                    name: char.charAt(0).toUpperCase() + char.slice(1),
                    game: "undertale",
                    zone: zone,
                    sprites: sprites,
                });
            }
        });
    });
}

walkZones();

const tsContent = `export type Character = {
    id: string;
    name: string;
    game: "undertale";
    zone: string;
    sprites: string[];
};

export const characters: Character[] = ${JSON.stringify(characters, null, 2)};

export function randomCharacter(filter?: { game?: string; zone?: string }) {
  let filtered = characters;
  if (filter?.game) filtered = filtered.filter(c => c.game === filter.game);
  if (filter?.zone) filtered = filtered.filter(c => c.zone === filter.zone);
  return filtered[Math.floor(Math.random() * filtered.length)];
}
`;

fs.mkdirSync(path.dirname(outputFile), { recursive: true });
fs.writeFileSync(outputFile, tsContent, "utf-8");

console.log(`✅ Archivo generado en: ${outputFile}`);
