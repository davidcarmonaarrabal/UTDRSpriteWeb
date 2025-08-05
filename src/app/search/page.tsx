'use client';

import { useSearchParams } from "next/navigation";
import { characters } from "@/data/characters";
import Link from "next/link";

export default function SearchPage() {
    const searchParams = useSearchParams();
    const query = searchParams.get("name")?.toLowerCase() || "";

    const filtered = characters.filter(c =>
        c.name.toLowerCase().includes(query)
    );

    return (
        <main className="p-6">
            <Link href="/" className="btn">Volver al Home</Link>
            <h2 className="text-2xl my-4">Resultados para "{query}"</h2>
            <div className="grid grid-cols-2 gap-4">
                {filtered.map(char => (
                    <Link key={char.id} href={`/character/${char.id}`} className="text-center">
                        <img src={char.sprites[0]} width={200} height={200} alt={char.name} />
                        <p>{char.name}</p>
                    </Link>
                ))}
            </div>
        </main>
    );
}
