import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin, Play, Grid3x3 } from "lucide-react"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="container py-20 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 flex justify-center">
            <div className="rounded-full bg-card p-4">
              <MapPin className="h-12 w-12 text-primary" />
            </div>
          </div>

          <h1 className="mb-6 font-[family-name:var(--font-space-grotesk)] text-4xl font-bold tracking-tight text-balance md:text-6xl">
            Bienvenue sur <span className="text-primary">Localis</span>
          </h1>

          <p className="mb-8 text-lg text-muted-foreground text-pretty md:text-xl leading-relaxed">
            Découvrez l'histoire de France à travers un jeu de société éducatif et passionnant. Positionnez des lieux et
            événements historiques sur une carte de France et testez vos connaissances !
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="gap-2">
              <Link href="/regles">
                <Play className="h-5 w-5" />
                Voir les règles
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="gap-2 bg-transparent">
              <Link href="/lieux">
                <Grid3x3 className="h-5 w-5" />
                Explorer les lieux
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-t bg-muted/50 py-20">
        <div className="container">
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
                  Découvrez les lieux
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Explorez 25 cases contenant des lieux historiques emblématiques de France
                </p>
              </div>

              <div className="rounded-lg bg-card p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full bg-primary/10 p-3">
                    <span className="text-2xl font-bold text-primary">2</span>
                  </div>
                </div>
                <h3 className="mb-2 font-[family-name:var(--font-space-grotesk)] text-xl font-semibold">
                  Positionnez-les
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Placez chaque lieu sur la carte de France selon vos connaissances
                </p>
              </div>

              <div className="rounded-lg bg-card p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full bg-primary/10 p-3">
                    <span className="text-2xl font-bold text-primary">3</span>
                  </div>
                </div>
                <h3 className="mb-2 font-[family-name:var(--font-space-grotesk)] text-xl font-semibold">
                  Gagnez des points
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Plus vous êtes précis, plus vous marquez de points !
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
