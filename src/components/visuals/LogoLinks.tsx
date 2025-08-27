"use client";

import Link from "next/link";
import Image from "next/image";

interface LogoLinksProps {
    randomId?: string | null;
}

export default function LogoLinks({ randomId }: LogoLinksProps) {
    const logoSize = {
        width: 220,
        height: 80,
    };

    return (
        <div className="flex flex-col items-end gap-22">
            <Link href="/undertale" className="block">
                <Image
                    src="/img/undertalelogo2.webp"
                    alt="Galería Undertale"
                    {...logoSize}
                    className="object-contain hover:scale-105 transition-transform duration-200 ease-out"
                    priority
                />
            </Link>

            <Link href="/deltarune" className="block">
                <Image
                    src="/img/deltarunelogo2.webp"
                    alt="Galería Deltarune"
                    {...logoSize}
                    className="object-contain hover:scale-105 transition-transform duration-200 ease-out"
                    priority
                />
            </Link>

            <Link href="/fans" className="block">
                <Image
                    src="/img/fanslogo2.webp"
                    alt="Galería Fans"
                    {...logoSize}
                    className="object-contain hover:scale-105 transition-transform duration-200 ease-out"
                    priority
                />
            </Link>

            {randomId && (
                <Link href={`/character/${randomId}`} className="block">
                    <Image
                        src="/img/randomlogo2.webp"
                        alt="Random"
                        {...logoSize}
                        className="object-contain hover:scale-105 transition-transform duration-200 ease-out"
                        priority
                    />
                </Link>
            )}
        </div>
    );
}
