"use client";

import Link from "next/link";
import Image from "next/image";

interface LogoLinksProps {
    randomId?: string | null;
}

export default function LogoLinks({ randomId }: LogoLinksProps) {
    const logoBox =
        "relative overflow-hidden rounded-xl shadow bg-black " +
        "transition-transform duration-200 ease-out hover:scale-105 " +
        "w-[160px] h-[80px] sm:w-[200px] sm:h-[100px] md:w-[220px] md:h-[110px] lg:w-[240px] lg:h-[120px]";

    return (
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <Link href="/undertale" className="block">
                <div className={logoBox}>
                    <Image
                        src="/img/Undertale-logo.webp"
                        alt="Galería Undertale"
                        fill
                        sizes="(max-width: 640px) 160px, (max-width: 768px) 200px, (max-width: 1024px) 220px, 240px"
                        className="object-contain"
                        priority
                    />
                </div>
            </Link>

            <Link href="/deltarune" className="block">
                <div className={logoBox}>
                    <Image
                        src="/img/Deltarune-logo.jpg"
                        alt="Galería Deltarune"
                        fill
                        sizes="(max-width: 640px) 160px, (max-width: 768px) 200px, (max-width: 1024px) 220px, 240px"
                        className="object-contain"
                        priority
                    />
                </div>
            </Link>

            <Link href="/fans" className="block">
                <div className={logoBox}>
                    <Image
                        src="/img/Fans-logo.webp"
                        alt="Galería Fans"
                        fill
                        sizes="(max-width: 640px) 160px, (max-width: 768px) 200px, (max-width: 1024px) 220px, 240px"
                        className="object-contain"
                        priority
                    />
                </div>
            </Link>

            {randomId && (
                <Link href={`/character/${randomId}`} className="block">
                    <div className={logoBox}>
                        <Image
                            src="/img/Random-logo.webp"
                            alt="Random"
                            fill
                            sizes="(max-width: 640px) 160px, (max-width: 768px) 200px, (max-width: 1024px) 220px, 240px"
                            className="object-contain"
                            priority
                        />
                    </div>
                </Link>
            )}
        </div>
    );
}
