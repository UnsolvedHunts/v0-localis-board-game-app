"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function Navigation() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <svg
            className="h-6 w-6 text-primary"
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
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
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
