"use client"
import { motion } from "framer-motion"
import { X } from "lucide-react"

interface PropertyActionModalProps {
  isOpen: boolean
  onClose: () => void
  modalType: "info" | "call" | "share" | "web" | null
  property: {
    id: number
    location: string
    price: string
    size: string
    rooms: string
    type: string
    image: string
  } | null
}

export function PropertyActionModal({ isOpen, onClose, modalType, property }: PropertyActionModalProps) {
  if (!isOpen || !property) return null

  return (
    <div className="absolute inset-0 z-[100] pointer-events-auto">
      {/* Semi-transparent overlay */}
      <motion.div
        className="absolute inset-0 bg-black/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
      />

      {/* Modal content - slides up from bottom */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 bg-white rounded-t-xl p-4 max-h-[60%] overflow-y-auto"
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
      >
        {/* Drag handle */}
        <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-4"></div>

        {/* Close button */}
        <button onClick={onClose} className="absolute top-4 right-4 p-1 rounded-full bg-gray-100 hover:bg-gray-200">
          <X size={16} />
        </button>

        {/* Modal title and content - different for each type */}
        {modalType === "info" && (
          <div>
            <div className="text-lg font-semibold mb-2">Property Details</div>
            <div className="text-sm text-gray-500 mb-4">More information about {property.location}</div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 bg-slate-100 rounded-lg">
                <div className="text-sm text-gray-500">Price</div>
                <div className="font-semibold">{property.price}</div>
              </div>
              <div className="p-3 bg-slate-100 rounded-lg">
                <div className="text-sm text-gray-500">Size</div>
                <div className="font-semibold">{property.size}</div>
              </div>
              <div className="p-3 bg-slate-100 rounded-lg">
                <div className="text-sm text-gray-500">Rooms</div>
                <div className="font-semibold">{property.rooms}</div>
              </div>
              <div className="p-3 bg-slate-100 rounded-lg">
                <div className="text-sm text-gray-500">Type</div>
                <div className="font-semibold">{property.type}</div>
              </div>
            </div>
          </div>
        )}

        {modalType === "call" && (
          <div>
            <div className="text-lg font-semibold mb-2">Contact Agent</div>
            <div className="text-sm text-gray-500 mb-4">Call the listing agent for this property</div>

            <div className="flex flex-col items-center justify-center mt-4">
              <div className="text-lg font-semibold mb-3">Agent: Pierre Dubois</div>
              <button className="bg-green-500 text-white px-5 py-2 rounded-full font-medium">
                Call +33 01 23 45 67 89
              </button>
            </div>
          </div>
        )}

        {modalType === "share" && (
          <div>
            <div className="text-lg font-semibold mb-2">Share Property</div>
            <div className="text-sm text-gray-500 mb-4">Share this property with friends or family</div>

            <div className="grid grid-cols-4 gap-4 mt-2">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-1">
                  <span className="text-xl">📱</span>
                </div>
                <span className="text-xs">WhatsApp</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-1">
                  <span className="text-xl">✉️</span>
                </div>
                <span className="text-xs">Email</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-1">
                  <span className="text-xl">💬</span>
                </div>
                <span className="text-xs">SMS</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-1">
                  <span className="text-xl">🔗</span>
                </div>
                <span className="text-xs">Copy Link</span>
              </div>
            </div>
          </div>
        )}

        {modalType === "web" && (
          <div>
            <div className="text-lg font-semibold mb-2">Original Listing</div>
            <div className="text-sm text-gray-500 mb-4">View the original property listing</div>

            <div className="flex flex-col items-center justify-center p-4 bg-gray-100 rounded-lg">
              <div className="text-center">
                <div className="font-medium mb-2">Original listing from SeLoger.com</div>
                <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md font-medium">
                  Open Full Listing
                </button>
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  )
}

