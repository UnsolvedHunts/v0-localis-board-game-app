export default function ReglesPage() {
  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-8 font-[family-name:var(--font-space-grotesk)] text-4xl font-bold text-center">
            Règles du jeu
          </h1>

          <div className="rounded-lg bg-card p-6 mb-8">
            <p className="text-muted-foreground text-center mb-6 leading-relaxed">
              Découvrez comment jouer à Localis en vidéo
            </p>

            <div className="aspect-video w-full overflow-hidden rounded-lg">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Règles de Localis"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="border-0"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-lg bg-card p-6">
              <h2 className="mb-3 font-[family-name:var(--font-space-grotesk)] text-2xl font-semibold">
                Objectif du jeu
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Le but de Localis est de positionner correctement des lieux et événements historiques sur une carte de
                France. Plus votre placement est précis, plus vous gagnez de points !
              </p>
            </div>

            <div className="rounded-lg bg-card p-6">
              <h2 className="mb-3 font-[family-name:var(--font-space-grotesk)] text-2xl font-semibold">Déroulement</h2>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground leading-relaxed">
                <li>Chaque joueur reçoit des cartes représentant des lieux historiques</li>
                <li>À tour de rôle, placez une carte sur la grille 5x5 de la France</li>
                <li>Les autres joueurs peuvent contester votre placement</li>
                <li>Vérifiez la position exacte et comptez les points</li>
                <li>Le joueur avec le plus de points à la fin gagne la partie</li>
              </ol>
            </div>

            <div className="rounded-lg bg-card p-6">
              <h2 className="mb-3 font-[family-name:var(--font-space-grotesk)] text-2xl font-semibold">
                Système de points
              </h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed">
                <li>Case exacte : 5 points</li>
                <li>Case adjacente : 3 points</li>
                <li>Même région : 1 point</li>
                <li>Mauvaise région : 0 point</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
