import Link from "next/link";
import { characters } from "@/data/characters";

export default async function CharacterPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    const character = characters.find((c) => c.id === id);

    if (!character) {
        return (
            <main className="min-h-screen bg-zinc-950 text-white">
                <div className="p-6 max-w-6xl mx-auto">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-100 shadow hover:bg-zinc-800 hover:border-zinc-700 transition shadow-[0_0_18px_rgba(255,255,255,0.65)]
                                hover:shadow-[0_0_26px_rgba(255,255,255,0.9)]
                                transition mb-4"
                    >
                        ← Back to Home
                    </Link>
                    <p className="mt-6 text-zinc-300">
                        Character not found.
                    </p>
                </div>
            </main>
        );
    }

    const games = character.games ?? [];
    const zones = character.zones ?? [];

    const activeZone = zones[0] ?? null;
    const zoneHref = activeZone ? `/undertale/${activeZone}` : null;

    const zoneChars = activeZone
        ? characters.filter((c) =>
              (c.zones ?? []).some(
                  (z) => z.toLowerCase() === activeZone.toLowerCase()
              )
          )
        : [];

    const currentIndex = activeZone
        ? zoneChars.findIndex((c) => c.id === character.id)
        : -1;

    const prevChar = currentIndex > 0 ? zoneChars[currentIndex - 1] : null;

    const nextChar =
        currentIndex >= 0 && currentIndex < zoneChars.length - 1
            ? zoneChars[currentIndex + 1]
            : null;

    return (
        <main className="min-h-screen bg-black text-white">
            <div className="p-6 max-w-6xl mx-auto">
                {/* Breadcrumb */}
                <nav className="mb-4 text-sm text-zinc-400">
                    <ol className="flex items-center gap-2">
                        <li>
                            <Link
                                href="/"
                                className="hover:underline text-zinc-200 "
                            >
                                Home
                            </Link>
                        </li>

                        {activeZone && zoneHref && (
                            <>
                                <li className="opacity-60">/</li>
                                <li>
                                    <Link
                                        href={zoneHref}
                                        className="hover:underline text-zinc-200"
                                    >
                                        {activeZone.charAt(0).toUpperCase() +
                                            activeZone
                                                .slice(1)
                                                .toLowerCase()}
                                    </Link>
                                </li>
                            </>
                        )}

                        <li className="opacity-60">/</li>
                        <li className="text-white">
                            {character.name}
                        </li>
                    </ol>
                </nav>

                {/* Top Controls */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                    <div className="flex items-center gap-3">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-100 shadow hover:bg-zinc-800 hover:border-zinc-700 transition shadow-[0_0_18px_rgba(255,255,255,0.65)]
                                hover:shadow-[0_0_26px_rgba(255,255,255,0.9)]
                                transition mb-4"
                        >
                            ← Home
                        </Link>

                        {activeZone && zoneHref && (
                            <Link
                                href={zoneHref}
                                className="inline-flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-100 shadow hover:bg-zinc-800 hover:border-zinc-700 transition shadow-[0_0_18px_rgba(255,255,255,0.65)]
                                hover:shadow-[0_0_26px_rgba(255,255,255,0.9)]
                                transition mb-4"
                            >
                                ↩ Back to zone
                            </Link>
                        )}
                    </div>

                    <div className="flex items-center gap-2">
                        {prevChar && (
                            <Link
                                href={`/character/${prevChar.id}`}
                                className="inline-flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm font-medium text-zinc-100 shadow hover:bg-zinc-800 hover:border-zinc-700 transition shadow-[0_0_18px_rgba(255,255,255,0.65)]
                                hover:shadow-[0_0_26px_rgba(255,255,255,0.9)]
                                transition mb-4"
                            >
                                ← Previous
                            </Link>
                        )}

                        {nextChar && (
                            <Link
                                href={`/character/${nextChar.id}`}
                                className="inline-flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm font-medium text-zinc-100 shadow hover:bg-zinc-800 hover:border-zinc-700 transition shadow-[0_0_18px_rgba(255,255,255,0.65)]
                                hover:shadow-[0_0_26px_rgba(255,255,255,0.9)]
                                transition mb-4"
                            >
                                Next →
                            </Link>
                        )}

                        <span className="ml-2 rounded-lg bg-zinc-900 border border-zinc-800 px-3 py-1 text-sm text-zinc-300 shadow-[0_0_18px_rgba(255,255,255,0.65)]
                                hover:shadow-[0_0_26px_rgba(255,255,255,0.9)]
                                transition mb-4">
                            {character.sprites.length} sprite
                            {character.sprites.length !== 1
                                ? "s"
                                : ""}
                        </span>
                    </div>
                </div>

                {/* Header */}
                <header className="mb-6">
                    <h1 className="text-3xl font-bold tracking-tight text-white">
                        {character.name}
                    </h1>

                    <div className="mt-2 flex flex-wrap items-center gap-2">
                        {games.map((g) => (
                            <span
                                key={`g-${g}`}
                                className="rounded-md border border-indigo-800/40 bg-indigo-900/30 px-2 py-0.5 text-xs text-indigo-200"
                            >
                                {g}
                            </span>
                        ))}

                        {zones.map((z) => (
                            <span
                                key={`z-${z}`}
                                className="rounded-md border border-zinc-800 bg-zinc-900 px-2 py-0.5 text-xs text-zinc-300"
                            >
                                {z}
                            </span>
                        ))}
                    </div>

                    <p className="mt-3 text-zinc-400">
                        Descarga los sprites en tamaño 200×200
                        (o proporción contenida) y explóralos en
                        detalle.
                    </p>
                </header>

                {/* Sprite Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 mb-24">
                    {character.sprites.map((sprite, i) => {
                        const fileName =
                            sprite.split("/").pop() ??
                            `sprite-${i + 1}.png`;

                        return (
                            <div
                                key={i}
                                className="group rounded-2xl border border-zinc-800 bg-zinc-900/60 p-3 shadow hover:shadow-lg hover:border-zinc-700 transition shadow-[0_0_18px_rgba(255,255,255,0.65)]
                                hover:shadow-[0_0_26px_rgba(255,255,255,0.9)]
                                transition mb-4"
                            >
                                <div className="relative aspect-square w-full rounded-xl bg-black overflow-hidden">
                                    <img
                                        src={sprite}
                                        alt={`${character.name} sprite ${i + 1}`}
                                        className="absolute inset-0 w-full h-full object-contain transition-transform duration-200 ease-out group-hover:scale-105"
                                    />
                                </div>

                                <p className="mt-3 text-center text-[12px] text-zinc-400 truncate">
                                    {fileName}
                                </p>

                                <div className="mt-2 grid grid-cols-2 gap-2">
                                    <a
                                        href={sprite}
                                        download
                                        className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-3 py-2 text-xs font-semibold text-white shadow hover:bg-indigo-500 transition"
                                    >
                                        ⤓ Download
                                    </a>

                                    <a
                                        href={sprite}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 text-xs font-medium text-zinc-100 hover:bg-zinc-800 transition"
                                    >
                                        ↗ See
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </main>
    );
}