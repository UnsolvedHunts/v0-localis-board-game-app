"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"

interface Location {
  name: string
  description: string
}

interface LocationModalProps {
  cellId: string
  locations: Location[]
  onClose: () => void
}

export function LocationModal({ cellId, locations, onClose }: LocationModalProps) {
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 font-[family-name:var(--font-space-grotesk)] text-2xl">
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
            Case {cellId}
          </DialogTitle>
          <DialogDescription>
            {locations.length} {locations.length > 1 ? "lieux historiques" : "lieu historique"} dans cette case
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="max-h-[60vh] pr-4">
          <div className="space-y-6">
            {locations.map((location, index) => (
              <div key={index} className="rounded-lg border bg-card p-4 transition-colors hover:bg-muted/50">
                <h3 className="mb-2 font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-primary">
                  {location.name}
                </h3>
                <div
                  className="text-sm text-muted-foreground leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: location.description }}
                />
              </div>
            ))}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}
