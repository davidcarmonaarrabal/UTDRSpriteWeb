'use client';

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [randomId, setRandomId] = useState<string | null>(null);

  useEffect(() => {
    // Aquí generamos el valor aleatorio solo en cliente
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

      <div className="flex gap-4 mt-4">
        <Link href="/undertale" className="btn">Galería Undertale</Link>
        <Link href="/deltarune" className="btn">Galería Deltarune</Link>
        <Link href="/fans" className="btn">Galería Fans</Link>
        {randomId && (
          <Link href={`/character/${randomId}`} className="btn">Random</Link>
        )}
      </div>
    </main>
  );
}
