"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { characters } from "@/data/characters";

export default function DeltaruneGallery() {
    const logoBox =
        "relative overflow-hidden rounded-xl shadow bg-black " +
        "transition-transform duration-200 ease-out hover:scale-105 " +
        "w-[160px] h-[80px] sm:w-[200px] sm:h-[100px] md:w-[220px] md:h-[110px] lg:w-[240px] lg:h-[120px] bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-100 shadow-[0_0_18px_rgba(255,255,255,0.65)] hover:shadow-[0_0_26px_rgba(255,255,255,0.9)] transition mb-4";

    const zones = [
        { id: "ch1", img: "/img/ch1.webp", label: "Chapter 1" },
        { id: "ch2", img: "/img/ch2.webp", label: "Chapter 2" },
        { id: "ch3", img: "/img/ch3.webp", label: "Chapter 3" },
        { id: "ch4", img: "/img/ch4.webp", label: "Chapter 4" },
    ];

    const deltaruneChars = useMemo(
        () => characters.filter((c) => (c.games ?? []).some((g) => g.toLowerCase() === "deltarune")),
        []
    );

    const [randomId, setRandomId] = useState<string | null>(null);
    useEffect(() => {
        if (deltaruneChars.length > 0) {
            const idx = Math.floor(Math.random() * deltaruneChars.length);
            setRandomId(deltaruneChars[idx].id);
        }
    }, [deltaruneChars]);

    return (
        <div
            className="min-h-screen w-full bg-cover bg-center"
            style={{ backgroundImage: "url('/img/fondo2.webp')" }}
        >
            <div className="w-full">
                <main className="w-full flex justify-end px-12">
                    <div className="flex flex-col items-end text-right gap-6">
                        <Image
                            src="/img/logo.webp"
                            alt="Undertale / Deltarune Logo"
                            width={320}
                            height={160}
                            className="drop-shadow-lg sm:w-[400px]"
                            priority
                        />

                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 rounded-xl border border-zinc-200
                                bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-100
                                shadow-[0_0_18px_rgba(255,255,255,0.65)]
                                hover:shadow-[0_0_26px_rgba(255,255,255,0.9)]
                                transition mb-4"
                        >
                            ← Back to Home
                        </Link>

                        <Image
                            src="/img/deltarunelogo.webp"
                            alt="Deltarune Logo"
                            width={320}
                            height={160}
                            className="drop-shadow-lg sm:w-[400px]"
                            priority
                        />
                    </div>
                </main>

                <section className="w-full mt-4 px-12 lg:max-w-[60vw]">
                    {randomId && (
                        <Link
                            href={`/character/${randomId}`}
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

                    <div className="flex flex-wrap justify-start gap-4 sm:gap-6">
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
                                <p className="text-center mt-2 text-sm sm:text-base font-semibold text-gray-300">
                                    {zone.label}
                                </p>
                            </Link>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
