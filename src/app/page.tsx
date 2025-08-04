import { SpriteGrid } from '@/components/SpriteGrid'

const characters = ['sans', 'papyrus'] // ← luego se puede generar dinámicamente

export default function HomePage() {
  return (
    <main className="max-w-5xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Undertale/Deltarune Sprites</h1>
      <SpriteGrid characters={characters} />
    </main>
  )
}
