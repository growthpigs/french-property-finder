"use client"

import { useState } from "react"
import { AnimatePresence } from "framer-motion"
import { SimpleTinderCard } from "./SimpleTinderCard"
import { PromoCard } from "./PromoCard"

interface Property {
  id: number
  image: string
  location: string
  price: string
  size: string
  rooms: string
  type: string
}

interface PropertyCardStackProps {
  properties: Property[]
  isSearching?: boolean
  onAction?: (action: string, propertyId: number) => void
}

export function PropertyCardStack({ properties, isSearching = false, onAction }: PropertyCardStackProps) {
  const [showInstructionCard, setShowInstructionCard] = useState(true)
  const [visibleProperties, setVisibleProperties] = useState(properties)
  const [showPromoCard, setShowPromoCard] = useState(true)

  const handleInstructionSwipe = () => {
    setShowInstructionCard(false)
  }

  const handlePropertySwipe = (id: number) => {
    setVisibleProperties((prev) => prev.filter((p) => p.id !== id))
  }

  const handlePromoSwipe = () => {
    setShowPromoCard(false)
  }

  const handleAction = (action: string, id: number) => {
    if (onAction) {
      onAction(action, id)
    }
  }

  return (
    <div className="relative w-64 h-80 mx-auto">
      <AnimatePresence>
        {/* Determine what to show as the top card */}
        {showInstructionCard && (
          <div className="absolute inset-0" style={{ zIndex: 30 }}>
            <SimpleTinderCard onSwipe={() => handleInstructionSwipe()} backgroundColor="white">
              <div className="flex items-center justify-center h-full bg-white relative">
                <img
                  src="https://p129.p0.n0.cdn.zight.com/items/6qupKPrK/a9aac440-dcde-446f-96cd-ad3a95d73ce3.svg?v=06d04d7d1726e1264dae50fa6f7536b5"
                  alt="Swipe instructions"
                  className="w-4/5 h-auto"
                />

                {/* Loading indicator in bottom right */}
                {isSearching && (
                  <div className="absolute bottom-4 right-4 w-8 h-8">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"
                      alt="Loading"
                      className="w-full h-full"
                    />
                  </div>
                )}
              </div>
            </SimpleTinderCard>
          </div>
        )}

        {/* Property cards */}
        {!showInstructionCard &&
          visibleProperties.map((property, index) => (
            <div
              key={property.id}
              className="absolute inset-0"
              style={{
                zIndex: 20 - index,
                transform: `scale(${1 - index * 0.05}) translateY(${index * 4}px)`,
                pointerEvents: index === 0 ? "auto" : "none",
              }}
            >
              <SimpleTinderCard onSwipe={() => handlePropertySwipe(property.id)} backgroundColor="white">
                <div className="h-full relative">
                  {/* Property image */}
                  <img
                    src={property.image || "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"}
                    alt={property.location}
                    className="w-full h-full object-cover"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70"></div>

                  {/* Property details */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <div className="font-medium text-lg">{property.location}</div>
                    <div className="text-sm">
                      {[property.price, property.size, property.rooms, property.type].filter(Boolean).join(" | ")}
                    </div>

                    <div className="text-xs text-gray-300 mt-1">7 results matching your criteria</div>
                  </div>

                  {/* Certification badge */}
                  <div className="absolute top-4 left-4 bg-slate-800/80 rounded-full px-2 py-1 flex items-center">
                    <span className="text-yellow-400 mr-1">★</span>
                    <span className="text-white text-xs">4/5</span>
                  </div>

                  {/* Action buttons */}
                  <div className="absolute top-4 right-4 flex flex-col space-y-3">
                    {/* Action buttons would go here */}
                  </div>
                </div>
              </SimpleTinderCard>
            </div>
          ))}

        {/* Promo card as the last card */}
        {!showInstructionCard && visibleProperties.length === 0 && showPromoCard && (
          <div className="absolute inset-0" style={{ zIndex: 10 }}>
            <PromoCard onSwipe={handlePromoSwipe} />
          </div>
        )}
      </AnimatePresence>

      {/* Empty state when all cards are gone */}
      {!showInstructionCard && visibleProperties.length === 0 && !showPromoCard && (
        <div className="flex items-center justify-center h-full bg-gray-100 rounded-lg">
          <p className="text-gray-500">No more properties</p>
        </div>
      )}
    </div>
  )
}

