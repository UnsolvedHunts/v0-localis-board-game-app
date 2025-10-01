import { GameGrid } from "@/components/game-grid"

export default function LieuxPage() {
  return (
    <main className="min-h-screen py-12">
      <div className="container">
        <div className="mx-auto max-w-6xl">
          <h1 className="mb-4 font-[family-name:var(--font-space-grotesk)] text-4xl font-bold text-center">
            Les lieux du jeu
          </h1>
          <p className="mb-12 text-center text-muted-foreground text-lg leading-relaxed">
            Cliquez sur une case pour découvrir les lieux historiques qu'elle contient
          </p>

          <GameGrid />
        </div>
      </div>
    </main>
  )
}
