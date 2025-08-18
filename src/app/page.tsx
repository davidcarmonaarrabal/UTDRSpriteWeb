'use client';

import LogoLinks from "@/components/visuals/LogoLinks";
import { useEffect, useState } from "react";


export default function Home() {
  const [randomId, setRandomId] = useState<string | null>(null);

  useEffect(() => {
    setRandomId(Math.random().toString(36).substring(2, 8));
  }, []);

  return (
    <main className="flex flex-col items-center justify-center gap-4 p-8">
      <h1 className="text-4xl font-bold">Galería de Sprites</h1>

      <input
        type="text"
        placeholder="Buscar personaje..."
        className="border p-2 w-64"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            const query = (e.target as HTMLInputElement).value;
            window.location.href = `/search?name=${encodeURIComponent(query)}`;
          }
        }}
      />

      <LogoLinks randomId={randomId} />
    </main>
  );
}
