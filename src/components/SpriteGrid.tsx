'use client'

import Image from 'next/image'
import { useState } from 'react'

interface Props {
    characters: string[]
}

export function SpriteGrid({ characters }: Props) {
    const [search, setSearch] = useState('')

    const filtered = characters.filter((name) =>
        name.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <div className="space-y-6">
            <input
                type="text"
                placeholder="Buscar personaje..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full p-3 border rounded-xl"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {filtered.map((name) => (
                    <div key={name} className="p-4 border rounded-xl">
                        <h2 className="text-lg font-semibold mb-2 capitalize">{name}</h2>
                        <div className="space-y-2">
                            {['idle.png', 'attack.png'].map((img) => (
                                <div key={img} className="relative h-32 w-full">
                                    <Image
                                        src={`/sprites/${name}/${img}`}
                                        alt={`${name} - ${img}`}
                                        fill
                                        className="object-contain"
                                    />
                                    <a
                                        href={`/sprites/${name}/${img}`}
                                        download
                                        className="block text-sm text-blue-600 mt-1"
                                    >
                                        Descargar {img}
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
