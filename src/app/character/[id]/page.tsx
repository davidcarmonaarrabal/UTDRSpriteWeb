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

    // Si tu objeto tiene `zone`, hacemos un link de retorno a esa zona
    const zoneHref = character.zone ? `/undertale/${character.zone}` : null;

    return (
        <main className="p-6 max-w-6xl mx-auto">
            {/* Barra superior */}
            <div className="flex items-center justify-between gap-4 mb-6">
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

                <span className="rounded-lg bg-zinc-900/70 border border-zinc-800 px-3 py-1 text-sm text-zinc-300">
                    {character.sprites.length} sprite{character.sprites.length !== 1 ? "s" : ""}
                </span>
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
                {character.sprites.map((sprite, i) => (
                    <div
                        key={i}
                        className="group rounded-2xl border border-zinc-800 bg-zinc-900/60 p-3 shadow hover:shadow-lg hover:border-zinc-700 transition"
                    >
                        {/* Marco cuadrado del sprite */}
                        <div className="relative aspect-square w-full rounded-xl bg-black overflow-hidden">
                            <Image
                                src={sprite}
                                alt={`${character.name} sprite ${i + 1}`}
                                fill
                                sizes="200px"
                                className="object-contain transition-transform duration-200 ease-out group-hover:scale-105"
                                priority={i < 4} // prioriza los primeros para mejor LCP
                            />
                        </div>

                        {/* Acción de descarga */}
                        <a
                            href={sprite}
                            download
                            className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow hover:bg-indigo-500 transition"
                            aria-label={`Descargar sprite ${i + 1} de ${character.name}`}
                        >
                            ⤓ Descargar
                        </a>
                    </div>
                ))}
            </div>
        </main>
    );
}
