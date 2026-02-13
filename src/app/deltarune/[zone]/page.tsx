"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { characters } from "@/data/characters";
import { use, useMemo } from "react";

interface PageProps {
    params: {
        zone: string | string[];
    };
}

export default function ZonePage({
    params: paramsPromise,
}: {
    params: Promise<PageProps["params"]>;
}) {
    const pathname = usePathname();
    const params = use(paramsPromise);

    const game = useMemo(() => {
        const seg = (pathname || "/").split("/").filter(Boolean)[0] || "deltarune";
        return seg.toLowerCase();
    }, [pathname]);

    const zoneRaw = Array.isArray(params?.zone) ? params.zone[0] : params?.zone || "";
    const zoneKey = useMemo(() => zoneRaw.toLowerCase().trim(), [zoneRaw]);

    const zoneChars = useMemo(
        () =>
            characters.filter(
                (c) =>
                    c.games?.some((g) => g.toLowerCase() === game) &&
                    c.zones?.some((z) => z.toLowerCase() === zoneKey)
            ),
        [game, zoneKey]
    );

    const prettyZone = zoneRaw.charAt(0).toUpperCase() + zoneRaw.slice(1).toLowerCase();

    const randomCharId = useMemo(() => {
        if (zoneChars.length === 0) return null;
        const r = Math.floor(Math.random() * zoneChars.length);
        return zoneChars[r].id;
    }, [zoneChars]);

    // Background dinámico por zona CH1, CH2, CH3, CH4
    const backgroundStyle = (() => {
        switch (zoneKey) {
            case "ch1":
                return {
                    backgroundImage: "url('/backgrounds/ch1.webp')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                };
            case "ch2":
                return {
                    backgroundImage: "url('/backgrounds/ch2.webp')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                };
            case "ch3":
                return {
                    backgroundImage: "url('/backgrounds/ch3.webp')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                };
            case "ch4":
                return {
                    backgroundImage: "url('/backgrounds/ch4.webp')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                };
            default:
                return {};
        }
    })();

    return (
        <main className="min-h-screen relative">
            {/* Fondo según zona */}
            <div className="fixed top-0 left-0 w-full h-[100vh] -z-10" style={backgroundStyle} />

            {/* Contenido */}
            <div className="max-w-6xl mx-auto px-6 py-6 text-white flex flex-col gap-8">
                {/* PRIMER DIV: cabecera horizontal */}
                <div className="flex items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                        <Link
                            href="/"
                            className="inline-flex items-center rounded-lg bg-black/70 px-5 py-2 text-sm tracking-wide border border-zinc-700 hover:bg-black/90 transition"
                        >
                            ← Back to Home
                        </Link>

                        <Link
                            href={`/${game}`}
                            className="inline-flex items-center rounded-lg bg-black/70 px-5 py-2 text-sm tracking-wide border border-zinc-700 hover:bg-black/90 transition"
                        >
                            ← Back to Game
                        </Link>
                    </div>

                    {/* Logo que lleva al home */}
                    <Link
                        href="/"
                        className="inline-flex items-center hover:opacity-90 transition"
                        aria-label="Ir al inicio"
                    >
                        <Image
                            src="/img/logo.webp"
                            alt="UNDERTALE / DELTARUNE Sprites Repository"
                            width={260}
                            height={80}
                            className="h-auto w-[260px]"
                            priority
                        />
                    </Link>
                </div>

                {/* SEGUNDO DIV: dos columnas */}
                <div className="flex gap-10 flex-1">
                    {/* Columna izquierda: contador + random */}
                    <div className="w-[220px] flex flex-col items-start gap-6">
                        <div className="rounded-full bg-black/70 border border-zinc-500 px-4 py-1 text-sm">
                            {zoneChars.length} personaje{zoneChars.length !== 1 ? "s" : ""}
                        </div>

                        {randomCharId && (
                            <Link
                                href={`/character/${randomCharId}`}
                                aria-label="Personaje aleatorio de la zona"
                                className="relative block w-[190px] h-[64px] hover:scale-105 transition-transform overflow-hidden"
                            >
                                <Image
                                    src="/img/button_random.webp"
                                    alt="Random"
                                    fill
                                    sizes="190px"
                                    className="object-contain"
                                    priority
                                />
                            </Link>
                        )}
                    </div>

                    {/* Columna derecha: grid personajes */}
                    <div className="flex-1 flex flex-col">

                        {zoneChars.length === 0 ? (
                            <div className="mt-10 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-8 text-center text-zinc-300">
                                There are no characters in{" "}
                                <span className="font-semibold">{prettyZone}</span>.
                            </div>
                        ) : (
                            <div className="flex flex-wrap justify-center gap-6 mb-10">
                                {zoneChars.map((char) => (
                                    <Link
                                        key={char.id}
                                        href={`/character/${char.id}`}
                                        className="group block w-[140px] rounded-xl border border-zinc-700 bg-black/80 p-3 shadow hover:border-zinc-400 hover:-translate-y-1 transition-transform"
                                    >
                                        <div className="relative aspect-[3/4] w-full rounded-lg bg-zinc-900 overflow-hidden">
                                            <Image
                                                src={char.sprites[0]}
                                                alt={char.name}
                                                fill
                                                sizes="140px"
                                                className="object-contain transition-transform duration-200 ease-out group-hover:scale-105"
                                            />
                                        </div>

                                        <p className="mt-3 text-center text-xs font-medium tracking-wide uppercase text-zinc-100">
                                            {char.name}
                                        </p>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
}
