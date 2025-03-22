"use client"
import { SimpleTinderCard } from "./SimpleTinderCard"

interface PromoCardProps {
  onSwipe: () => void
}

export function PromoCard({ onSwipe }: PromoCardProps) {
  const handleSwipe = (direction: "left" | "right") => {
    onSwipe()
  }

  return (
    <SimpleTinderCard onSwipe={handleSwipe} backgroundColor="#3b82f6">
      {" "}
      {/* Blue-500 */}
      <div className="h-full flex flex-col items-center justify-center p-6 text-white">
        <div className="text-center mb-8">
          <h3 className="font-bold text-2xl mb-2 leading-tight">
            Save your favourites
            <br />
            for next time
          </h3>
        </div>

        <div className="bg-blue-600 p-5 rounded-lg w-full mb-6 text-center">
          <h3 className="font-bold text-xl mb-1">Premium AI Property Finder</h3>
          <p className="text-blue-100 text-sm">Free Forever</p>
        </div>

        <button className="bg-white text-blue-500 font-semibold py-3 px-6 rounded-full mb-6 w-full text-lg">
          Sign up with phone
        </button>

        <p className="text-sm text-blue-100 text-center">
          Activate all the premium features in
          <br />
          20-seconds. Only phone number required
        </p>
      </div>
    </SimpleTinderCard>
  )
}

