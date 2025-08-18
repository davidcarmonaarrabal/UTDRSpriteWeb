import SearchResults from '@/components/navbar/SearchBar'
import { Suspense } from 'react'


export default function SearchPage() {
    return (
        <Suspense fallback={<SearchFallback />}>
            <SearchResults />
        </Suspense>
    )
}

function SearchFallback() {
    return (
        <main className="p-6 max-w-6xl mx-auto">
            <div className="flex items-center justify-between gap-4 mb-6">
                <div className="inline-flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-100">
                    ← Volver al Home
                </div>
                <div className="flex items-center gap-3">
                    <div className="rounded-xl border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm w-64 h-[42px] animate-pulse" />
                    <div className="rounded-lg bg-zinc-900/70 border border-zinc-800 px-3 py-1 text-sm text-zinc-300">
                        Cargando...
                    </div>
                </div>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-8 text-center text-zinc-300">
                Buscando resultados...
            </div>
        </main>
    )
}