import Link from "next/link";

export default function DeltaruneIndex() {
    return (
        <main className="p-6">
            <Link href="/" className="btn">Volver al Home</Link>
            <h2 className="text-2xl my-4">Galería de Deltarune</h2>

            <div className="flex flex-col gap-4">
                <Link href="/deltarune/chapter1" className="btn">Capítulo 1</Link>
                <Link href="/deltarune/chapter2" className="btn">Capítulo 2</Link>
                <Link href="/character/random" className="btn">Random</Link>
            </div>
        </main>
    );
}