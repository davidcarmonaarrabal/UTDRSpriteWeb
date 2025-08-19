"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { characters } from "@/data/characters"; 

export default function UndertaleGallery() {
    const router = useRouter();

    const logoBox =
        "relative w-[240px] h-[120px] overflow-hidden rounded-xl shadow " +
        "transition-transform duration-200 ease-out hover:scale-105 bg-black";

    // Zonas + logos
    const zones = [
        { id: "ruinas", img: "/img/Ruinas.webp", label: "Ruins" },
        { id: "snowdin", img: "/img/Snowdin.webp", label: "Snowdin" },
        { id: "waterfall", img: "/img/Waterfall.webp", label: "Waterfall" },
        { id: "hotland", img: "/img/Hotland.webp", label: "Hotland" },
        { id: "core", img: "/img/Core.webp", label: "Core" },
        { id: "newhome", img: "/img/Newhome.webp", label: "New Home" },
        { id: "truelab", img: "/img/Truelab.webp", label: "True Lab" },
    ];

    const goToRandomUndertale = () => {
        const undertaleChars = characters.filter(c => c.game === "undertale");
        if (undertaleChars.length === 0) return;

        const randomIndex = Math.floor(Math.random() * undertaleChars.length);
        const randomId = undertaleChars[randomIndex].id;

        router.push(`/character/${randomId}`);
    };

    return (
        <main className="p-6 flex flex-col items-center">
            <Link href="/" className="btn mb-4">
                Volver al Home
            </Link>
            <h2 className="text-2xl my-4">Galería Undertale</h2>

            <button
                onClick={goToRandomUndertale}
                className="mb-6 relative w-[120px] h-[40px] rounded-lg shadow hover:scale-105 transition overflow-hidden"
            >
                <Image
                    src="/img/button_random.webp"
                    alt="Random"
                    fill
                    sizes="120px"
                    className="object-contain"
                    priority
                />
            </button>

            <div className="flex gap-6 flex-wrap justify-center">
                {zones.map((zone) => (
                    <Link key={zone.id} href={`/undertale/${zone.id}`} className="block">
                        <div className={logoBox}>
                            <Image
                                src={zone.img}
                                alt={zone.label}
                                fill
                                sizes="240px"
                                className="object-cover"
                            />
                        </div>
                        <p className="text-center mt-2 font-semibold">{zone.label}</p>
                    </Link>
                ))}
            </div>
        </main>
    );
}
