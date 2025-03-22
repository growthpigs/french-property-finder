"use client"

import { useState } from "react"
import { AnimatePresence } from "framer-motion"
import { SimpleTinderCard } from "./SimpleTinderCard"

export function SimpleCardStack() {
  const [cards, setCards] = useState([
    { id: 1, content: "How to swipe", color: "white" },
    { id: 2, content: "Property Card 1", color: "#e0f2fe" },
    { id: 3, content: "Property Card 2", color: "#dbeafe" },
    { id: 4, content: "Property Card 3", color: "#bfdbfe" },
  ])

  const handleSwipe = (direction: "left" | "right") => {
    console.log(`Swiped ${direction}`)

    // Remove the top card
    setCards((prevCards) => prevCards.slice(1))
  }

  return (
    <div className="relative w-64 h-80 mx-auto">
      <AnimatePresence>
        {cards.map((card, index) => (
          <div
            key={card.id}
            className="absolute inset-0"
            style={{
              zIndex: cards.length - index,
              transform: `scale(${1 - index * 0.05}) translateY(${index * 8}px)`,
              pointerEvents: index === 0 ? "auto" : "none",
            }}
          >
            <SimpleTinderCard onSwipe={handleSwipe} backgroundColor={card.color}>
              <div className="flex items-center justify-center h-full">
                <h3 className="text-xl font-medium">{card.content}</h3>
              </div>
            </SimpleTinderCard>
          </div>
        ))}
      </AnimatePresence>

      {/* Empty state when no cards left */}
      {cards.length === 0 && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg">
          <p className="text-gray-500">No more cards</p>
        </div>
      )}
    </div>
  )
}

