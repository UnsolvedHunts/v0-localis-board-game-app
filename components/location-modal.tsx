"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { MapPin } from "lucide-react"

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
            <MapPin className="h-6 w-6 text-primary" />
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
