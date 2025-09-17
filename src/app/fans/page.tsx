import Link from "next/link";
import Image from "next/image";
import { characters } from "@/data/characters";

export default function FansPage() {
  const fanChars = characters.filter((c) =>
    (c.zones ?? []).some((z) => z.toLowerCase() === "fans")
  );

  return (
    <main className="p-6">
      <Link href="/" className="btn">Volver al Home</Link>
      <h2 className="text-2xl my-4">Personajes de Fans</h2>

      {fanChars.length === 0 ? (
        <p className="text-zinc-400">No hay personajes de fans por ahora.</p>
      ) : (
        <div className="grid grid-cols-2 gap-4">
          {fanChars.map((char) => (
            <Link
              key={char.id}
              href={`/character/${char.id}`}
              className="text-center"
            >
              <div className="relative w-[200px] h-[200px] mx-auto rounded-xl bg-black overflow-hidden">
                <Image
                  src={char.sprites[0]}
                  alt={char.name}
                  fill
                  sizes="200px"
                  className="object-contain"
                />
              </div>
              <p className="mt-2">{char.name}</p>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}
