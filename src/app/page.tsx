'use client';

import { Suspense } from "react";
import LogoLinks from "@/components/visuals/LogoLinks";
import { useEffect, useState } from "react";
import { characters } from "@/data/characters"; 
import SearchBox from "@/components/navbar/SearchBox";

export default function Home() {
  const [randomId, setRandomId] = useState<string | null>(null);

  useEffect(() => {
    if (characters.length > 0) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      setRandomId(characters[randomIndex].id);
    }
  }, []);

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6">
      <h1 className="text-3xl sm:text-4xl font-bold text-center">Undertale / Deltarune Sprites Repository</h1>

      <div className="mt-4 flex w-full justify-center">
        <Suspense
          fallback={
            <input
              placeholder="Cargando búsqueda…"
              className="w-full max-w-md rounded-md border border-zinc-800 bg-zinc-900 px-3 py-2 text-zinc-100 placeholder-zinc-500"
            />
          }
        >
          <SearchBox
            autoNavigateToSearch
            className="w-full max-w-md rounded-md border border-zinc-800 bg-zinc-900 px-3 py-2 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-600"
          />
        </Suspense>
      </div>

      <div className="mt-6">
        <LogoLinks randomId={randomId} />
      </div>
    </main>
  );
}
