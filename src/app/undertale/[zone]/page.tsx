"use client";

import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { characters } from "@/data/characters";
import { useMemo } from "react";

type Params = {
    locale?: string;
    game?: string | string[];
    zone?: string | string[];
};

function normalizeGame(g: string) {
    return (g || "").toLowerCase();
}

function normalizeZoneByGame(game: string, zone: string) {
    const g = normalizeGame(game);
    const z = (zone || "").toLowerCase().trim();

    if (g === "deltarune") {
        if (/^ch\d+$/.test(z)) return z;
        // chapterN o chapter N → chN
        const m = z.match(/^chapter\s*(\d+)$/);
        if (m) return `ch${m[1]}`;
        return z; 
    }

    return z;
}

function prettyZoneLabel(game: string, rawZone: string) {
    const g = normalizeGame(game);
    const z = (rawZone || "").toLowerCase();

    if (g === "deltarune") {
        const m1 = z.match(/^ch(\d+)$/);
        const m2 = z.match(/^chapter\s*(\d+)$/);
        const n = m1?.[1] || m2?.[1];
        if (n) return `Chapter ${n}`;
    }

    return rawZone.charAt(0).toUpperCase() + rawZone.slice(1).toLowerCase();
}

export default function ZonePage() {
    const params = useParams() as Params;

    const gameRaw = Array.isArray(params?.game) ? params.game[0] : params?.game || "undertale";
    const zoneRaw = Array.isArray(params?.zone) ? params.zone[0] : params?.zone || "";

    const game = useMemo(() => normalizeGame(gameRaw), [gameRaw]);
    const zoneKey = useMemo(() => normalizeZoneByGame(game, zoneRaw), [game, zoneRaw]);

    const zoneChars = useMemo(
        () =>
            characters.filter(
                (c) =>
                    (c.games ?? []).some((g) => normalizeGame(g) === game) &&
                    (c.zones ?? []).some((z) => normalizeZoneByGame(game, z) === zoneKey)
            ),
        [game, zoneKey]
    );

    const prettyZone = useMemo(() => prettyZoneLabel(game, zoneRaw), [game, zoneRaw]);

    const randomCharId = useMemo(() => {
        if (zoneChars.length === 0) return null;
        const r = Math.floor(Math.random() * zoneChars.length);
        return zoneChars[r].id;
    }, [zoneChars]);

    return (
        <main className="p-6 max-w-6xl mx-auto">
            <div className="flex items-center justify-between gap-4 mb-6">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-100 shadow hover:bg-zinc-800 hover:border-zinc-700 transition"
                >
                    ← Back to Home
                </Link>

                <Link
                    href={`/${game}`}
                    className="inline-flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-100 shadow hover:bg-zinc-800 hover:border-zinc-700 transition"
                >
                    ← Back to Game
                </Link>

                <div className="flex items-center gap-3">
                    <span className="rounded-lg bg-zinc-900/70 border border-zinc-800 px-3 py-1 text-sm text-zinc-300">
                        {zoneChars.length} personaje{zoneChars.length !== 1 ? "s" : ""}
                    </span>

                    {randomCharId && (
                        <Link
                            href={`/character/${randomCharId}`}
                            aria-label="Personaje aleatorio de la zona"
                            className="relative block w-[120px] h-[40px] rounded-xl shadow hover:scale-105 transition overflow-hidden bg-black focus:outline-none focus:ring-2 focus:ring-indigo-600"
                        >
                            <Image
                                src="/img/button_random.webp"
                                alt="Random"
                                fill
                                sizes="120px"
                                className="object-contain"
                                priority
                            />
                        </Link>
                    )}
                </div>
            </div>

            <header className="mb-6">
                <h2 className="text-3xl font-bold tracking-tight text-white">{prettyZone}</h2>
                <p className="mt-1 text-zinc-400">Explore the principal characters sprites of this zone.</p>
            </header>

            {zoneChars.length === 0 ? (
                <div className="mt-10 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-8 text-center text-zinc-300">
                    There are no characters in <span className="font-semibold">{prettyZone}</span>.
                </div>
            ) : (
                <div className="flex flex-wrap justify-center gap-5 mb-10">
                    {zoneChars.map((char) => (
                        <Link
                            key={char.id}
                            href={`/character/${char.id}`}
                            className="group block w-[140px] rounded-2xl border border-zinc-800 bg-zinc-900/60 p-3 shadow hover:shadow-lg hover:border-zinc-700 transition"
                        >
                            <div className="relative aspect-square w-full rounded-xl bg-black overflow-hidden">
                                <Image
                                    src={char.sprites[0]}
                                    alt={char.name}
                                    fill
                                    sizes="140px"
                                    className="object-contain transition-transform duration-200 ease-out group-hover:scale-105"
                                />
                            </div>

                            <p className="mt-3 text-center text-sm font-medium text-zinc-100">{char.name}</p>
                            <div className="mx-auto mt-1 h-px w-10 bg-zinc-700 opacity-0 group-hover:opacity-100 transition"></div>
                        </Link>
                    ))}
                </div>
            )}
        </main>
    );
}
    