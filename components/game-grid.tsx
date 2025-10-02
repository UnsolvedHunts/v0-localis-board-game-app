"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { LocationModal } from "@/components/location-modal"
import locationsData from "@/data/locations.json"

type CellId = keyof typeof locationsData

const rows = [1, 2, 3, 4, 5]
const cols = ["A", "B", "C", "D", "E"]

export function GameGrid() {
  const [selectedCell, setSelectedCell] = useState<CellId | null>(null)

  const getCellId = (col: string, row: number): CellId => {
    return `${col}${row}` as CellId
  }

  const handleCellClick = (cellId: CellId) => {
    const locations = locationsData[cellId]
    if (locations && locations.length > 0) {
      setSelectedCell(cellId)
    }
  }

  const handleCloseModal = () => {
    setSelectedCell(null)
  }

  return (
    <>
      <div className="flex justify-center">
        <div className="grid grid-cols-5 gap-3 md:gap-4 max-w-4xl w-full mx-auto">
          {rows.map((row) =>
            cols.map((col) => {
              const cellId = getCellId(col, row)
              const locations = locationsData[cellId]
              const locationCount = locations?.length || 0
              const isClickable = locationCount > 0

              return (
                <Card
                  key={cellId}
                  className={`aspect-square transition-all ${
                    isClickable
                      ? "cursor-pointer hover:scale-105 hover:shadow-lg hover:border-primary"
                      : "cursor-not-allowed opacity-50"
                  }`}
                  onClick={() => handleCellClick(cellId)}
                >
                  <div className="flex h-full flex-col items-center justify-center p-4 text-center">
                    <span className="mb-2 font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-primary">
                      {cellId}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {locationCount} {locationCount > 1 ? "lieux" : "lieu"}
                    </span>
                  </div>
                </Card>
              )
            }),
          )}
        </div>
      </div>

      {selectedCell && (
        <LocationModal cellId={selectedCell} locations={locationsData[selectedCell]} onClose={handleCloseModal} />
      )}
    </>
  )
}
