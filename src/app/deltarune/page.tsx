"use client";

import Link from "next/link";
import Image from "next/image";
import { characters } from "@/data/characters";

export default function DeltaruneGallery() {
    const logoBox =
        "relative overflow-hidden rounded-xl shadow bg-black " +
        "transition-transform duration-200 ease-out hover:scale-105 " +
        "w-[160px] h-[80px] sm:w-[200px] sm:h-[100px] md:w-[220px] md:h-[110px] lg:w-[240px] lg:h-[120px]";

    // Usa zones como en Undertale
    const zones = [
        { id: "ch1", img: "/img/Chapter1.webp", label: "Chapter 1" },
        { id: "ch2", img: "/img/Chapter2.webp", label: "Chapter 2" },
    ];

    const deltaruneChars = characters.filter(
        (c) => (c.games ?? []).some((g) => g.toLowerCase() === "deltarune")
    );

    const randomChar =
        deltaruneChars.length > 0
            ? deltaruneChars[Math.floor(Math.random() * deltaruneChars.length)]
            : null;

    return (
        <main className="mx-auto w-full max-w-6xl px-4 py-6 flex flex-col items-center">
            <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-100 shadow hover:bg-zinc-800 hover:border-zinc-700 transition mb-4"
            >
                ← Back to Home
            </Link>

            <h2 className="text-2xl sm:text-3xl font-bold my-4 text-center">
                Deltarune Sprites Repository
            </h2>

            {randomChar && (
                <Link
                    href={`/character/${randomChar.id}`}
                    aria-label="Personaje aleatorio de Deltarune"
                    className="mb-6 relative w-[180px] h-[50px] sm:w-[200px] sm:h-[56px] rounded-lg shadow hover:scale-105 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition overflow-hidden block"
                >
                    <Image
                        src="/img/button_random.webp"
                        alt="Random"
                        fill
                        sizes="(max-width: 640px) 180px, 200px"
                        className="object-contain"
                        priority
                    />
                </Link>
            )}

            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                {zones.map((zone) => (
                    <Link key={zone.id} href={`/deltarune/${zone.id}`} className="block">
                        <div className={logoBox}>
                            <Image
                                src={zone.img}
                                alt={zone.label}
                                fill
                                sizes="(max-width: 640px) 160px, (max-width: 768px) 200px, (max-width: 1024px) 220px, 240px"
                                className="object-cover"
                            />
                        </div>
                        <p className="text-center mt-2 text-sm sm:text-base font-semibold">
                            {zone.label}
                        </p>
                    </Link>
                ))}
            </div>
        </main>
    );
}
