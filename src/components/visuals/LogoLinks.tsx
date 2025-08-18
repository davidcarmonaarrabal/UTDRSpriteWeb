"use client";

import Link from "next/link";
import Image from "next/image";

interface LogoLinksProps {
    randomId?: string | null;
}

export default function LogoLinks({ randomId }: LogoLinksProps) {
    const logoBox =
        "relative w-[240px] h-[120px] overflow-hidden rounded-xl shadow " +
        "transition-transform duration-200 ease-out hover:scale-105 bg-black";

    return (
        <div className="flex gap-4 mt-4 items-center">
            {/* Undertale */}
            <Link href="/undertale" className="block">
                <div className={logoBox}>
                    <Image
                        src="/img/Undertale-logo.jpg"
                        alt="Galería Undertale"
                        fill
                        sizes="240px"
                        className="object-contain"
                        priority
                    />
                </div>
            </Link>

            {/* Deltarune */}
            <Link href="/deltarune" className="block">
                <div className={logoBox}>
                    <Image
                        src="/img/Deltarune-logo.jpg"
                        alt="Galería Deltarune"
                        fill
                        sizes="240px"
                        className="object-contain"
                        priority
                    />
                </div>
            </Link>

            {/* Fans */}
            <Link href="/fans" className="block">
                <div className={logoBox}>
                    <Image
                        src="/img/Fans-logo.jpg"
                        alt="Galería Fans"
                        fill
                        sizes="240px"
                        className="object-contain"
                        priority
                    />
                </div>
            </Link>

            {/* Random */}
            {randomId && (
                <Link href={`/character/${randomId}`} className="block">
                    <div className={logoBox}>
                        <Image
                            src="/img/Random-logo.jpg"
                            alt="Random"
                            fill
                            sizes="240px"
                            className="object-contain"
                            priority
                        />
                    </div>
                </Link>
            )}
        </div>
    );
}
