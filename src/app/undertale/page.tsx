"use client";

import Link from "next/link";
import Image from "next/image";

export default function UndertaleGallery() {
    const logoBox =
        "relative w-[240px] h-[120px] overflow-hidden rounded-xl shadow " +
        "transition-transform duration-200 ease-out hover:scale-105 bg-black";

    // Zonas + logos
    const zones = [
        { id: "ruinas", img: "/img/Ruinas.jpg", label: "Ruins" },
        { id: "snowdin", img: "/img/Snowdin.jpg", label: "Snowdin" },
        { id: "waterfall", img: "/img/Waterfall.jpg", label: "Waterfall" },
        { id: "hotland", img: "/img/Hotland.jpg", label: "Hotland" },
        { id: "core", img: "/img/Core.jpg", label: "Core" },
        { id: "newhome", img: "/img/Newhome.jpg", label: "New Home" },
        { id: "truelab", img: "/img/Truelab.jpg", label: "True Lab" },
    ];

    return (
        <main className="p-6">
            <Link href="/" className="btn">
                Volver al Home
            </Link>
            <h2 className="text-2xl my-4">Galería Undertale</h2>

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
