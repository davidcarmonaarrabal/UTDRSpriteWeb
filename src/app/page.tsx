'use client';

import LogoLinks from "@/components/visuals/LogoLinks";
import SearchBox from "@/components/navbar/SearchBox";
import { useEffect, useState } from "react";
import { characters } from "@/data/characters"; 

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

      {/* Búsqueda reactiva que navega a /search cuando escribes */}
      <SearchBox autoNavigateToSearch placeholder="Buscar personaje..." />

      <LogoLinks randomId={randomId} />
    </main>
  );
}
