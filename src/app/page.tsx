'use client';

import { Suspense, useEffect, useState } from "react";
import LogoLinks from "@/components/visuals/LogoLinks";
import { characters } from "@/data/characters"; 
import SearchBox from "@/components/navbar/SearchBox";
import Image from "next/image";

export default function Home() {
  const [randomId, setRandomId] = useState<string | null>(null);

  useEffect(() => {
    if (characters.length > 0) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      setRandomId(characters[randomIndex].id);
    }
  }, []);

  return (
    <div 
      className="min-h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: "url('/img/fondo1.webp')" }}
    > 
      <main className="mx-auto w-full px-4 sm:px-8 py-6 flex flex-col ite  ms-center sm:items-end text-center sm:text-right">
        
        <Image
          src="/img/logo.webp"
          alt="Undertale / Deltarune Logo"
          width={320}
          height={160}
          className="drop-shadow-lg sm:w-[400px]"
          priority
        />

        <div className="mt-4 w-full flex justify-center sm:justify-end pb-3">
          <Suspense   
            fallback={  
              <input
                placeholder="Cargando búsqueda…"
                className="w-full max-w-md rounded-md border border-zinc-800 bg-zinc-400 px-3 py-2 text-black placeholder-zinc-500"
              />
            }
          >
            <SearchBox
              autoNavigateToSearch
              className="w-full max-w-md rounded-md border border-zinc-800 bg-zinc-400 px-3 py-2 text-black placeholder-zinc-500 focus:outline-none fo  cus:ring-2 focus:ring-indigo-600"
            />
          </Suspense>
        </div>

        <div className="mt-6 w-full flex justify-center sm:justify-end">
          <LogoLinks randomId={randomId} />
        </div>
      </main>
    </div>
  ); 
}
 