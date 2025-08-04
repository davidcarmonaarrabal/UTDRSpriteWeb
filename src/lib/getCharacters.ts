import fs from 'fs'
import path from 'path'

export function getCharacters(): string[] {
    const spritesPath = path.join(process.cwd(), 'public', 'sprites')
    if (!fs.existsSync(spritesPath)) return []

    const entries = fs.readdirSync(spritesPath, { withFileTypes: true })
    return entries
        .filter((entry) => entry.isDirectory())
        .map((dir) => dir.name)
}
