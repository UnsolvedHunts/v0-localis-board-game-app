import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto flex items-center py-20 md:py-32 min-h-[calc(100vh-80px)] px-4">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 flex justify-center">
            <div className="rounded-full bg-card p-4">
              <svg
                className="h-12 w-12 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
          </div>

          <h1 className="mb-6 font-[family-name:var(--font-space-grotesk)] text-4xl font-bold tracking-tight text-balance md:text-6xl">
            Bienvenue sur <span className="text-primary">Localis</span>
          </h1>

          <p className="mb-8 text-lg text-muted-foreground text-pretty md:text-xl leading-relaxed">
            Un jeu de société qui mêle géographie et histoire de France. Découvrez, replacez et apprenez des lieux et
            monuments emblématiques tout en jouant !
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="gap-2">
              <Link href="/regles">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Voir les règles
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="gap-2 bg-transparent">
              <Link href="/lieux">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zM14 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z"
                  />
                </svg>
                Explorer les lieux
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-t bg-muted/50 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-12 text-center font-[family-name:var(--font-space-grotesk)] text-3xl font-bold">
              Comment jouer ?
            </h2>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-lg bg-card p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full bg-primary/10 p-3">
                    <span className="text-2xl font-bold text-primary">1</span>
                  </div>
                </div>
                <h3 className="mb-2 font-[family-name:var(--font-space-grotesk)] text-xl font-semibold">
                  Choisir une carte
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Sélectionnez une des 5 cartes de la rivière avec des lieux historiques emblématiques
                </p>
              </div>

              <div className="rounded-lg bg-card p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full bg-primary/10 p-3">
                    <span className="text-2xl font-bold text-primary">2</span>
                  </div>
                </div>
                <h3 className="mb-2 font-[family-name:var(--font-space-grotesk)] text-xl font-semibold">
                  Placer la carte
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Choisissez une case sur le plateau et retournez la carte pour vérifier
                </p>
              </div>

              <div className="rounded-lg bg-card p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full bg-primary/10 p-3">
                    <span className="text-2xl font-bold text-primary">3</span>
                  </div>
                </div>
                <h3 className="mb-2 font-[family-name:var(--font-space-grotesk)] text-xl font-semibold">
                  Gagner des points
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Gagnez 1 à 3 points selon la difficulté. Premier à 15 points gagne !
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
