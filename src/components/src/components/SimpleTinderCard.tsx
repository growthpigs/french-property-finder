"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"

interface SimpleTinderCardProps {
  onSwipe: (direction: "left" | "right") => void
  children: React.ReactNode
  backgroundColor?: string
}

export function SimpleTinderCard({ onSwipe, children, backgroundColor = "white" }: SimpleTinderCardProps) {
  // Track drag state
  const [dragX, setDragX] = useState(0)
  const [isExiting, setIsExiting] = useState(false)
  const [exitDirection, setExitDirection] = useState<"left" | "right" | null>(null)

  // SVG heart URLs
  const likedHeartSvg =
    "https://p129.p0.n0.cdn.zight.com/items/nOurdnR1/dda6975b-4cbd-4ee4-b6a0-fdb4e40877ed.svg?v=b8d7727135f3ba2efdedc7a91c06588a"
  const brokenHeartSvg =
    "https://p129.p0.n0.cdn.zight.com/items/6qupKPZb/f43dadd4-28a0-497b-978e-95211e258a71.svg?v=516e7098d6fc59cf68466fa4ce4da63f"

  // Handle drag to update rotation
  const handleDrag = (_: any, info: any) => {
    setDragX(info.offset.x)
  }

  // Handle end of drag
  const handleDragEnd = (_: any, info: any) => {
    const threshold = 100

    // Check if drag distance exceeds threshold
    if (Math.abs(info.offset.x) > threshold) {
      // Determine direction
      const direction = info.offset.x > 0 ? "right" : "left"
      setExitDirection(direction)
      setIsExiting(true)

      // Show heart animation
      showHeartAnimation(direction)

      // Call onSwipe after animation delay
      setTimeout(() => {
        onSwipe(direction)
        // Reset states after swipe is processed
        setIsExiting(false)
        setExitDirection(null)
        setDragX(0)
      }, 300)
    } else {
      // Reset if drag didn't exceed threshold
      setDragX(0)
    }
  }

  // Display heart animation
  const showHeartAnimation = (direction: "left" | "right") => {
    const container = document.createElement("div")
    container.style.position = "fixed"
    container.style.top = "50%"
    container.style.left = "50%"
    container.style.transform = "translate(-50%, -50%)"
    container.style.width = "80px"
    container.style.height = "80px"
    container.style.zIndex = "9999"

    const img = document.createElement("img")
    img.src = direction === "right" ? likedHeartSvg : brokenHeartSvg
    img.style.width = "100%"
    img.style.height = "100%"
    img.style.animation = "heartPulse 0.8s ease-out forwards"

    // Add animation keyframes
    const style = document.createElement("style")
    style.textContent = `
      @keyframes heartPulse {
        0% { transform: scale(0.5); opacity: 0; }
        50% { transform: scale(1.2); opacity: 1; }
        100% { transform: scale(1); opacity: 0; }
      }
    `
    document.head.appendChild(style)

    container.appendChild(img)
    document.body.appendChild(container)

    setTimeout(() => {
      container.remove()
      style.remove()
    }, 800)
  }

  return (
    <motion.div
      className="absolute inset-0 rounded-lg overflow-hidden shadow-lg touch-none"
      style={{ backgroundColor }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.2}
      onDrag={handleDrag}
      onDragEnd={handleDragEnd}
      whileTap={{ cursor: "grabbing" }}
      animate={{
        x: isExiting ? (exitDirection === "right" ? 1000 : -1000) : 0,
        y: isExiting ? 400 : 0,
        rotate: isExiting ? (exitDirection === "right" ? 45 : -45) : dragX ? dragX * 0.05 : 0,
      }}
      transition={{
        type: "spring",
        damping: 30,
        stiffness: 200,
      }}
    >
      {children}
    </motion.div>
  )
}

