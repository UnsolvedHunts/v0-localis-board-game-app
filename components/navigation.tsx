"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { MapPin } from "lucide-react"

export function Navigation() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <MapPin className="h-6 w-6 text-primary" />
          <span className="font-[family-name:var(--font-space-grotesk)]">Localis</span>
        </Link>

        <nav className="flex items-center gap-6">
          <Link
            href="/"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              pathname === "/" ? "text-primary" : "text-muted-foreground",
            )}
          >
            Accueil
          </Link>
          <Link
            href="/regles"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              pathname === "/regles" ? "text-primary" : "text-muted-foreground",
            )}
          >
            Règles du jeu
          </Link>
          <Link
            href="/lieux"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              pathname === "/lieux" ? "text-primary" : "text-muted-foreground",
            )}
          >
            Les lieux
          </Link>
        </nav>
      </div>
    </header>
  )
}
