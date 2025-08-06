import Image from "next/image";
import Link from "next/link";
import { characters } from "@/data/characters";

export default async function CharacterPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const character = characters.find((c) => c.id === id);

    if (!character) {
        return <p>Personaje no encontrado</p>;
    }

    return (
        <main className="p-6">
            <Link href="/" className="btn">Volver al Home</Link>
            <h2 className="text-2xl my-4">{character.name}</h2>
            <div className="grid grid-cols-2 gap-4">
                {character.sprites.map((sprite, i) => (
                    <div key={i} className="text-center">
                        <Image
                            src={sprite}
                            width={200}
                            height={200}
                            alt={`${character.name} sprite`}
                        />
                        <a href={sprite} download className="btn mt-2 inline-block">
                            Descargar
                        </a>
                    </div>
                ))}
            </div>
        </main>
    );
}
