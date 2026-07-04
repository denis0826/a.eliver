"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const MessengerChat = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-20 right-0 w-80 bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 bg-white rounded-full overflow-hidden">
                    <Image
                      src="/images/logo.png"
                      alt="A.Eliver Logo"
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">
                      A.Eliver Frozen Products
                    </h4>
                    <p className="text-white/80 text-xs">
                      Typically replies instantly
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white/80 hover:text-white transition-colors"
                  aria-label="Close chat popup"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="p-4">
              <div className="bg-gray-100 rounded-2xl rounded-tl-none p-4 mb-4">
                <p className="text-gray-700 text-sm">
                  Hello! Welcome to A.Eliver Frozen Products Trading. How can
                  we help you today?
                </p>
              </div>

              <div className="space-y-2 mb-4">
                <a
                  href="https://m.me/A.EliverFrozen?text=Hi!%20I%20would%20like%20to%20inquire%20about%20your%20products."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-left px-4 py-3 bg-gray-50 hover:bg-purple-50 rounded-xl text-sm text-gray-700 hover:text-purple-600 transition-colors"
                  aria-label="Ask about products"
                >
                  Ask about products
                </a>
                <a
                  href="https://m.me/A.EliverFrozen?text=Hi!%20I%20would%20like%20to%20know%20your%20price%20list."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-left px-4 py-3 bg-gray-50 hover:bg-purple-50 rounded-xl text-sm text-gray-700 hover:text-purple-600 transition-colors"
                  aria-label="Request price list"
                >
                  Request price list
                </a>
                <a
                  href="https://m.me/A.EliverFrozen?text=Hi!%20I%20would%20like%20to%20place%20an%20order."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-left px-4 py-3 bg-gray-50 hover:bg-purple-50 rounded-xl text-sm text-gray-700 hover:text-purple-600 transition-colors"
                  aria-label="Place an order"
                >
                  Place an order
                </a>
              </div>

              <a
                href="https://m.me/A.EliverFrozen"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-[#0084FF] hover:bg-[#0073E6] text-white py-3 px-4 rounded-full font-semibold text-sm transition-colors"
                aria-label="Open Messenger conversation"
              >
                <MessageCircle className="w-4 h-4" />
                Open Messenger
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-16 h-16 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-full shadow-lg hover:shadow-xl flex items-center justify-center text-white transition-all hover:scale-105"
        whileTap={{ scale: 0.95 }}
        aria-label={isOpen ? "Close chat" : "Open chat"}
        aria-expanded={isOpen}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X className="w-7 h-7" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <MessageCircle className="w-7 h-7" />
            </motion.div>
          )}
        </AnimatePresence>

        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse" />
        )}
      </motion.button>
    </div>
  );
};

export default MessengerChat;
