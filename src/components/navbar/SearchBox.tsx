"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type Props = {
    placeholder?: string;
    autoNavigateToSearch?: boolean;
    className?: string;
    debounceMs?: number;
};

export default function SearchBox({
    placeholder = "Buscar personaje...",
    autoNavigateToSearch = false,
    className = "border p-2 w-64 rounded-md",
    debounceMs = 250,
}: Props) {
    const router = useRouter();
    const pathname = usePathname();
    const sp = useSearchParams();

    const initial = useMemo(() => (sp?.get("name") ?? "").trim(), [sp]);
    const [query, setQuery] = useState(initial);
    const pushedToSearch = useRef(false);

    useEffect(() => {
        const t = setTimeout(() => {
            const q = query.trim();

            // 🚨 Solo activar si hay mínimo 3 caracteres
            if (q.length < 3) {
                if (pathname === "/search") {
                    router.replace("/search"); // limpiar resultados si hay menos de 3
                }
                pushedToSearch.current = false;
                return;
            }
            
            // si estamos en Home y se quiere navegación automática
            if (autoNavigateToSearch && pathname === "/" && !pushedToSearch.current) {
                pushedToSearch.current = true;
                router.push(`/search?name=${encodeURIComponent(q)}`);
                return;
            }

            // actualizar URL
            const target = `/search?name=${encodeURIComponent(q)}`;
            if (pathname === "/search" || autoNavigateToSearch) {
                router.replace(target);
            }
        }, debounceMs);

        return () => clearTimeout(t);
    }, [query, autoNavigateToSearch, pathname, router, debounceMs]);

    return (
        <input
            value={query}
            onChange={(e) => {
                setQuery(e.target.value);
                if (!e.target.value) pushedToSearch.current = false;
            }}
            onKeyDown={(e) => {
                if (e.key === "Enter") {
                    const q = query.trim();
                    if (q.length >= 3) {
                        router.push(`/search?name=${encodeURIComponent(q)}`);
                    } else if (pathname === "/search") {
                        router.replace("/search");
                    }
                }
            }}
            placeholder={placeholder}
            className={className}
        />
    );
}
