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
                src="https://www.youtube.com/embed/uyooGy_Y8pQ"
                title="Règles de Localis"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="border-0"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-lg bg-card p-6">
              <h2 className="mb-3 font-[family-name:var(--font-space-grotesk)] text-2xl font-semibold">Présentation</h2>
              <p className="text-muted-foreground leading-relaxed">
                Localis est un jeu de société qui mêle géographie et histoire de France. Que vous soyez néophyte ou
                expert, vous prendrez plaisir à découvrir, replacer et apprendre des lieux et monuments emblématiques
                tout en jouant.
              </p>
            </div>

            <div className="rounded-lg bg-card p-6">
              <h2 className="mb-3 font-[family-name:var(--font-space-grotesk)] text-2xl font-semibold">
                Contenu du jeu
              </h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed">
                <li>1 plateau représentant la France</li>
                <li>Des jetons de score (un par joueur)</li>
                <li>Un paquet de cartes « Localis » (lieux, villes, monuments)</li>
                <li>Ce livret de règles</li>
              </ul>
            </div>

            <div className="rounded-lg bg-card p-6">
              <h2 className="mb-3 font-[family-name:var(--font-space-grotesk)] text-2xl font-semibold">
                Mise en place
              </h2>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground leading-relaxed">
                <li>Placez le plateau au centre de la table</li>
                <li>Chaque joueur pose son jeton sur la case 0 de la piste de score</li>
                <li>
                  Mélangez toutes les cartes et placez-les en pile avec le titre de la carte visible (par ex.
                  Notre-Dame, Metz)
                </li>
                <li>Piochez les 5 premières cartes et disposez-les en haut du plateau</li>
              </ol>
            </div>

            <div className="rounded-lg bg-card p-6">
              <h2 className="mb-3 font-[family-name:var(--font-space-grotesk)] text-2xl font-semibold">
                Objectif du jeu
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Être le premier joueur à atteindre 15 points sur la piste de score.
              </p>
              <p className="text-sm text-muted-foreground italic">
                Le joueur qui a visité le plus de villes françaises cette année commence.
              </p>
            </div>

            <div className="rounded-lg bg-card p-6">
              <h2 className="mb-3 font-[family-name:var(--font-space-grotesk)] text-2xl font-semibold">
                Déroulement d'un tour
              </h2>
              <p className="text-muted-foreground mb-4">Chaque tour suit les étapes suivantes :</p>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">1. Choisir une carte</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Le joueur actif sélectionne une des 5 cartes de la rivière.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">2. Placer la carte</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Il choisit une case sur le plateau (exemple : B2) puis il retourne la carte pour savoir s'il a
                    juste.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">3. Résultat</h3>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground leading-relaxed">
                    <li>
                      Bonne réponse : la carte est placée correctement, le joueur gagne le nombre de points indiqués par
                      les mâcles (losanges)
                    </li>
                    <li>Mauvaise réponse : la carte est placée correctement, mais le joueur ne marque pas de points</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">4. Renouveler la rivière</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Une fois une carte posée, piochez la suivante et placez-la dans la rivière pour qu'il y ait toujours
                    5 cartes disponibles.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-card p-6">
              <h2 className="mb-3 font-[family-name:var(--font-space-grotesk)] text-2xl font-semibold">Les cartes</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed">
                <li>Chaque carte possède 1 à 3 mâcles</li>
                <li>
                  Les mâcles indiquent à la fois la difficulté et le nombre de points remportés si la carte est
                  correctement placée
                </li>
                <li>Exemple : une carte avec 3 mâcles vaut 3 points et correspond à un emplacement très difficile</li>
                <li>
                  Pour certaines cases (ex. C2), plusieurs cartes existent (jusqu'à 8 par emplacements). Dans ce cas,
                  empilez-les les unes sur les autres pour conserver la continuité visuelle de la carte de France
                </li>
              </ul>
            </div>

            <div className="rounded-lg bg-card p-6">
              <h2 className="mb-3 font-[family-name:var(--font-space-grotesk)] text-2xl font-semibold">
                Fin de partie
              </h2>
              <p className="text-muted-foreground mb-3">La partie s'arrête immédiatement si :</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed">
                <li>Un joueur atteint 15 points (ou 20 points dans la variante longue)</li>
                <li>
                  OU lorsqu'il ne reste plus que 2 régions vides à la carte de France. Dans ce cas le ou la vainqueur(e)
                  est la personne qui a le plus de points
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
