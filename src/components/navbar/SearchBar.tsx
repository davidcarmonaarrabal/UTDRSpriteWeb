"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { characters } from "@/data/characters";

function normalize(str: string) {
    return str
        .toLowerCase()
        .normalize("NFD")
        .replace(/\p{Diacritic}/gu, "");
}

export default function SearchResults() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const initial = (searchParams.get("name") ?? "").trim();
    const [query, setQuery] = useState<string>(initial);
    const [debounced, setDebounced] = useState<string>(initial);

    useEffect(() => {
        const t = setTimeout(() => setDebounced(query), 250);
        return () => clearTimeout(t);
    }, [query]);

    useEffect(() => {
        const q = debounced.trim();
        const url = q ? `/search?name=${encodeURIComponent(q)}` : "/search";
        router.replace(url);
    }, [debounced, router]);

    const results = useMemo(() => {
        const q = normalize(query);
        if (!q) return [];
        return characters.filter((c) => {
            const name = normalize(c.name ?? "");
            const id = normalize(c.id ?? "");
            return name.includes(q) || id.includes(q);
        });
    }, [query]);

    return (
        <main className="p-6 max-w-6xl mx-auto">
            <div className="flex items-center justify-between gap-4 mb-6">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-100 shadow hover:bg-zinc-800 hover:border-zinc-700 transition"
                >
                    ← Volver al Home
                </Link>

                <div className="flex items-center gap-3">
                    <input
                        autoFocus
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Buscar personaje..."
                        className="rounded-xl border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                    />
                    <span className="rounded-lg bg-zinc-900/70 border border-zinc-800 px-3 py-1 text-sm text-zinc-300">
                        {query ? `${results.length} resultado${results.length !== 1 ? "s" : ""}` : "Escribe para buscar"}
                    </span>
                </div>
            </div>

            {query && results.length === 0 && (
                <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-8 text-center text-zinc-300">
                    No hay resultados para <span className="font-semibold">&quot;{query}&quot;</span>.
                </div>
            )}

            {results.length > 0 && (
                <div className="flex flex-wrap justify-center gap-5">
                    {results.map((char) => (
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
                            <p className="mt-3 text-center text-sm font-medium text-zinc-100">
                                {char.name}
                            </p>
                        </Link>
                    ))}
                </div>
            )}
        </main>
    );
}