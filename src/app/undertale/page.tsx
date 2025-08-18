import Link from "next/link";

export default function UndertaleGallery() {
    const zones = ["ruinas", "snowdin", "hotland", "waterfall", "newhome", "truelab"];

    return (
        <main className="p-6">
            <Link href="/" className="btn">Volver al Home</Link>
            <h2 className="text-2xl my-4">Galería Undertale</h2>
            <div className="flex gap-4 flex-wrap">
                {zones.map(zone => (
                    <Link key={zone} href={`/undertale/${zone}`} className="btn">
                        {zone}
                    </Link>
                ))}
            </div>
        </main>
    );
}
