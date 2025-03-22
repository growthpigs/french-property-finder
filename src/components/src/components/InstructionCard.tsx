"use client"

import { useState } from "react"
import { motion } from "framer-motion"

interface InstructionCardProps {
  onRemove: () => void
  isLoading?: boolean
}

export function InstructionCard({ onRemove, isLoading = false }: InstructionCardProps) {
  const [exitX, setExitX] = useState(0)
  const [exitY, setExitY] = useState(400) // More pronounced curve
  const [isExiting, setIsExiting] = useState(false)

  // Updated SVG URL
  const instructionSvgUrl =
    "https://p129.p0.n0.cdn.zight.com/items/6qupKPrK/a9aac440-dcde-446f-96cd-ad3a95d73ce3.svg?v=06d04d7d1726e1264dae50fa6f7536b5"

  // Loading indicator gif
  const loadingGifUrl = "https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"

  function handleDragEnd(_: any, info: any) {
    const threshold = 80

    if (Math.abs(info.offset.x) > threshold) {
      // Determine swipe direction and set exit coordinates for curved path
      const xDirection = info.offset.x > 0 ? 1 : -1

      // Set exit coordinates to create a curved path
      setExitX(xDirection * 1000)
      setExitY(400) // Card always exits downward for a curved path

      if (xDirection > 0) {
        // Show red heart animation for right swipe
        setTimeout(() => {
          const heart = document.createElement("div")
          heart.className =
            "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl z-50 animate-ping"
          heart.innerText = "❤️"
          document.body.appendChild(heart)
          setTimeout(() => heart.remove(), 800)
        }, 100)
      }

      setIsExiting(true)
      setTimeout(() => onRemove(), 400)
    }
  }

  return (
    <motion.div
      className="absolute top-0 left-0 w-full h-full rounded-lg overflow-hidden shadow-lg bg-white"
      animate={{
        x: isExiting ? exitX : 0,
        y: isExiting ? exitY : 0,
        rotate: isExiting ? (exitX > 0 ? 45 : -45) : 0, // More rotation for curved effect
      }}
      initial={{ x: 0, y: 0, rotate: 0 }}
      exit={{
        x: exitX,
        y: exitY,
        rotate: exitX > 0 ? 45 : -45,
        opacity: 0,
        transition: { duration: 0.4 },
      }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.7}
      onDragEnd={handleDragEnd}
      transition={{
        type: "spring",
        damping: 30, // Less damping for more natural movement
        stiffness: 200, // Less stiffness for more bounce
      }}
      whileDrag={{ cursor: "grabbing" }}
    >
      <div className="flex items-center justify-center h-full bg-white">
        <img src={instructionSvgUrl || "/placeholder.svg"} alt="Swipe instructions" className="w-4/5 h-auto" />

        {/* Loading indicator - moved to bottom right */}
        {isLoading && (
          <div className="absolute bottom-4 right-4 w-8 h-8">
            <img src={loadingGifUrl || "/placeholder.svg"} alt="Loading" className="w-full h-full" />
          </div>
        )}
      </div>
    </motion.div>
  )
}

