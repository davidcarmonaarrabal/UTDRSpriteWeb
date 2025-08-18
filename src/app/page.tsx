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
    <main className="flex flex-col items-center justify-center gap-4 p-8">
      <h1 className="text-4xl font-bold">Galería de Sprites</h1>

      <Suspense fallback={<input placeholder="Loading search..." className="border p-2 w-64 rounded-md" />}>
        <SearchBox autoNavigateToSearch placeholder="Buscar personaje..." />
      </Suspense>

      <LogoLinks randomId={randomId} />
    </main>
  );
}