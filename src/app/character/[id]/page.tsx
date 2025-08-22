import Image from "next/image";
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
            <main className="p-6 max-w-6xl mx-auto">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-100 shadow hover:bg-zinc-800 hover:border-zinc-700 transition"
                >
                    ← Back to Home
                </Link>
                <p className="mt-6 text-zinc-300">Character not found.</p>
            </main>
        );
    }

    // --- NUEVO: arrays ---
    const games = character.games ?? [];
    const zones = character.zones ?? [];

    // Elegimos una zona “activa” para breadcrumbs y navegación (primera si existe)
    const activeZone = zones[0] ?? null;
    const zoneHref = activeZone ? `/undertale/${activeZone}` : null; // ajusta si quieres detectar juego en URL

    // Navegación entre personajes de la misma zona activa (si existe)
    const zoneChars = activeZone
        ? characters.filter((c) =>
            (c.zones ?? []).some((z) => z.toLowerCase() === activeZone.toLowerCase())
        )
        : [];

    const currentIndex = activeZone ? zoneChars.findIndex((c) => c.id === character.id) : -1;
    const prevChar = currentIndex > 0 ? zoneChars[currentIndex - 1] : null;
    const nextChar =
        currentIndex >= 0 && currentIndex < zoneChars.length - 1
            ? zoneChars[currentIndex + 1]
            : null;

    return (
        <main className="p-6 max-w-6xl mx-auto">
            {/* Breadcrumbs */}
            <nav className="mb-4 text-sm text-zinc-400">
                <ol className="flex items-center gap-2">
                    <li>
                        <Link href="/" className="hover:underline text-zinc-200">Home</Link>
                    </li>
                    {activeZone && zoneHref && (
                        <>
                            <li className="opacity-60">/</li>
                            <li>
                                <Link href={zoneHref} className="hover:underline text-zinc-200">
                                    {activeZone.charAt(0).toUpperCase() + activeZone.slice(1).toLowerCase()}
                                </Link>
                            </li>
                        </>
                    )}
                    <li className="opacity-60">/</li>
                    <li className="text-white">{character.name}</li>
                </ol>
            </nav>

            {/* Barra superior acciones */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-3">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-100 shadow hover:bg-zinc-800 hover:border-zinc-700 transition"
                    >
                        ← Home
                    </Link>
                    {activeZone && zoneHref && (
                        <Link
                            href={zoneHref}
                            className="inline-flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-100 shadow hover:bg-zinc-800 hover:border-zinc-700 transition"
                        >
                            ↩ Back to zone
                        </Link>
                    )}
                </div>

                <div className="flex items-center gap-2">
                    {prevChar && (
                        <Link
                            href={`/character/${prevChar.id}`}
                            className="inline-flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm font-medium text-zinc-100 shadow hover:bg-zinc-800 hover:border-zinc-700 transition"
                            aria-label={`Previous: ${prevChar.name}`}
                            title={`Previous: ${prevChar.name}`}
                        >
                            ← Previous
                        </Link>
                    )}
                    {nextChar && (
                        <Link
                            href={`/character/${nextChar.id}`}
                            className="inline-flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm font-medium text-zinc-100 shadow hover:bg-zinc-800 hover:border-zinc-700 transition"
                            aria-label={`Next: ${nextChar.name}`}
                            title={`Next: ${nextChar.name}`}
                        >
                            Next →  
                        </Link>
                    )}

                    <span className="ml-2 rounded-lg bg-zinc-900/70 border border-zinc-800 px-3 py-1 text-sm text-zinc-300">
                        {character.sprites.length} sprite{character.sprites.length !== 1 ? "s" : ""}
                    </span>
                </div>
            </div>

            {/* Header con badges de juegos y zonas */}
            <header className="mb-6">
                <h1 className="text-3xl font-bold tracking-tight text-white">{character.name}</h1>

                <div className="mt-2 flex flex-wrap items-center gap-2">
                    {games.map((g) => (
                        <span
                            key={`g-${g}`}
                            className="rounded-md border border-indigo-800/40 bg-indigo-900/30 px-2 py-0.5 text-xs text-indigo-200"
                            title="Game"
                        >
                            {g}
                        </span>
                    ))}
                    {zones.map((z) => (
                        <span
                            key={`z-${z}`}
                            className="rounded-md border border-zinc-800 bg-zinc-900 px-2 py-0.5 text-xs text-zinc-300"
                            title="Zone"
                        >
                            {z}
                        </span>
                    ))}
                </div>

                <p className="mt-3 text-zinc-400">
                    Descarga los sprites en tamaño 200×200 (o proporción contenida) y explóralos en detalle.
                </p>
            </header>

            {/* Grid de sprites */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
                {character.sprites.map((sprite, i) => {
                    const fileName = sprite.split("/").pop() ?? `sprite-${i + 1}.png`;
                    return (
                        <div
                            key={i}     
                            className="group rounded-2xl border border-zinc-800 bg-zinc-900/60 p-3 shadow hover:shadow-lg hover:border-zinc-700 transition"
                        >
                            <div className="relative aspect-square w-full rounded-xl bg-black overflow-hidden">
                                <Image
                                    src={sprite}
                                    alt={`${character.name} sprite ${i + 1}`}
                                    fill
                                    sizes="(max-width: 640px) 45vw, (max-width: 1024px) 25vw, 200px"
                                    className="object-contain transition-transform duration-200 ease-out group-hover:scale-105"
                                    priority={i < 4}
                                />
                            </div>

                            <p className="mt-3 text-center text-[12px] text-zinc-400 truncate" title={fileName}>
                                {fileName}
                            </p>

                            <div className="mt-2 grid grid-cols-2 gap-2">
                                <a
                                    href={sprite}
                                    download
                                    className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-3 py-2 text-xs font-semibold text-white shadow hover:bg-indigo-500 transition"
                                    aria-label={`Descargar ${fileName}`}
                                >
                                    ⤓ Download
                                </a>
                                <a
                                    href={sprite}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 text-xs font-medium text-zinc-100 hover:bg-zinc-800 transition"
                                    aria-label={`Abrir ${fileName} en nueva pestaña`}
                                >
                                    ↗ See
                                </a>
                            </div>
                        </div>
                    );
                })}
            </div>
        </main>
    );
}
