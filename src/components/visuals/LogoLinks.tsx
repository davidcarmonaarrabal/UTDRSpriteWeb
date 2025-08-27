"use client";

import Link from "next/link";
import Image from "next/image";

interface LogoLinksProps {
    randomId?: string | null;
}

export default function LogoLinks({ randomId }: LogoLinksProps) {
    const links = [
        { href: "/undertale", src: "/img/undertalelogo2.webp", alt: "Galería Undertale" },
        { href: "/deltarune", src: "/img/deltarunelogo2.webp", alt: "Galería Deltarune" },
        { href: "/fans", src: "/img/fanslogo2.webp", alt: "Galería Fans" },
    ];

    if (randomId) {
        links.push({
            href: `/character/${randomId}`,
            src: "/img/randomlogo2.webp",
            alt: "Random",
        });
    }

    return (
        <div
            className="
                flex 
                flex-col 
                items-center sm:items-end 
                gap-4 sm:gap-6 
                w-full sm:w-auto
                pb-4
            "
        >
            {links.map((link) => (
                <Link key={link.href} href={link.href} className="block">
                    <Image
                        src={link.src}
                        alt={link.alt}
                        width={160}
                        height={60}
                        className="
                            object-contain 
                            hover:scale-105 
                            transition-transform 
                            duration-200 
                            ease-out 
                            sm:w-[220px] sm:h-[80px]
                        "
                        priority
                    />
                </Link>
            ))}
        </div>
    );
}
