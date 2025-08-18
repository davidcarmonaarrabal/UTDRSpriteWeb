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
    // This will now be used inside a Suspense boundary
    const searchParams = useSearchParams();
    
    // Safely get the search params
    const initial = useMemo(() => {
      try {
        return (searchParams?.get("name") ?? "").trim();
      } catch (e) {
        console.log(e);
        return "";
      }
    }, [searchParams]);

    const [query, setQuery] = useState(initial);
    const pushedToSearch = useRef(false);

    useEffect(() => {
        const t = setTimeout(() => {
            const q = query.trim();

            if (q.length < 3) {
                if (pathname === "/search") {
                    router.replace("/search");
                }
                pushedToSearch.current = false;
                return;
            }
            
            if (autoNavigateToSearch && pathname === "/" && !pushedToSearch.current) {
                pushedToSearch.current = true;
                router.push(`/search?name=${encodeURIComponent(q)}`);
                return;
            }

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