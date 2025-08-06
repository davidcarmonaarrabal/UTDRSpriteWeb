import Link from "next/link";
import Image from "next/image";
import { characters } from "@/data/characters";

export default function FansPage() {
  const fanChars = characters.filter(
    (c) => c.zone?.toLowerCase() === "fans"
  );

  return (
    <main className="p-6">
      <Link href="/" className="btn">Volver al Home</Link>
      <h2 className="text-2xl my-4">Personajes de Fans</h2>

      <div className="grid grid-cols-2 gap-4">
        {fanChars.map((char) => (
          <Link
            key={char.id}
            href={`/character/${char.id}`}
            className="text-center"
          >
            <Image
              src={char.sprites[0]}
              width={200}
              height={200}
              alt={char.name}
            />
            <p>{char.name}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
