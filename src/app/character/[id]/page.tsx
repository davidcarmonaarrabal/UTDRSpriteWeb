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
                    ← Volver al Home
                </Link>
                <p className="mt-6 text-zinc-300">Personaje no encontrado</p>
            </main>
        );
    }

    const zone = character.zone ?? null;
    const zoneHref = zone ? `/undertale/${zone}` : null;

    // Navegación entre personajes de la misma zona (si aplica)
    const zoneChars = zone
        ? characters.filter((c) => c.zone?.toLowerCase() === zone.toLowerCase())
        : [];
    const currentIndex = zone ? zoneChars.findIndex((c) => c.id === character.id) : -1;
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
                    {zoneHref && (
                        <>
                            <li className="opacity-60">/</li>
                            <li>
                                <Link href={zoneHref} className="hover:underline text-zinc-200">
                                    {zone.charAt(0).toUpperCase() + zone.slice(1).toLowerCase()}
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
                    {zoneHref && (
                        <Link
                            href={zoneHref}
                            className="inline-flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-100 shadow hover:bg-zinc-800 hover:border-zinc-700 transition"
                        >
                            ↩ Volver a la zona
                        </Link>
                    )}
                </div>

                <div className="flex items-center gap-2">
                    {prevChar && (
                        <Link
                            href={`/character/${prevChar.id}`}
                            className="inline-flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm font-medium text-zinc-100 shadow hover:bg-zinc-800 hover:border-zinc-700 transition"
                            aria-label={`Anterior: ${prevChar.name}`}
                            title={`Anterior: ${prevChar.name}`}
                        >
                            ← Anterior
                        </Link>
                    )}
                    {nextChar && (
                        <Link
                            href={`/character/${nextChar.id}`}
                            className="inline-flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm font-medium text-zinc-100 shadow hover:bg-zinc-800 hover:border-zinc-700 transition"
                            aria-label={`Siguiente: ${nextChar.name}`}
                            title={`Siguiente: ${nextChar.name}`}
                        >
                            Siguiente →
                        </Link>
                    )}

                    <span className="ml-2 rounded-lg bg-zinc-900/70 border border-zinc-800 px-3 py-1 text-sm text-zinc-300">
                        {character.sprites.length} sprite{character.sprites.length !== 1 ? "s" : ""}
                    </span>
                </div>
            </div>

            {/* Encabezado */}
            <header className="mb-6">
                <h1 className="text-3xl font-bold tracking-tight text-white">{character.name}</h1>
                <p className="mt-1 text-zinc-400">
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

                            {/* Nombre de archivo */}
                            <p className="mt-3 text-center text-[12px] text-zinc-400 truncate" title={fileName}>
                                {fileName}
                            </p>

                            {/* Acciones */}
                            <div className="mt-2 grid grid-cols-2 gap-2">
                                <a
                                    href={sprite}
                                    download
                                    className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-3 py-2 text-xs font-semibold text-white shadow hover:bg-indigo-500 transition"
                                    aria-label={`Descargar ${fileName}`}
                                >
                                    ⤓ Descargar
                                </a>
                                <a
                                    href={sprite}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 text-xs font-medium text-zinc-100 hover:bg-zinc-800 transition"
                                    aria-label={`Abrir ${fileName} en nueva pestaña`}
                                >
                                    ↗ Ver
                                </a>
                            </div>
                        </div>
                    );
                })}
            </div>
        </main>
    );
}
