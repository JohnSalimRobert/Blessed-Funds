import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { Sparkles, Smile } from "lucide-react";
import lottieCoins from '../assets/lottie/coins.json';
import lottieStar from '../assets/lottie/star.json';
import Lottie from 'lottie-react';
import { useEffect, useState } from 'react';

export const Route = createFileRoute('/')({
  component: Index,
})

const quotes = [
  "Track your church youth group giving with joy and purpose!",
  "Log offerings and tithes with ease.",
  "Generate reports to see your community’s growth.",
  "Plan and manage future events effortlessly.",
  "Empower transparency and stewardship in faith."
];

function Index() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
const currentQuote = quotes[currentIndex];

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentIndex((prev) => (prev + 1) % quotes.length);
  }, 4000); // 4 seconds per quote

  return () => clearInterval(interval);
}, []);
  return (
    <div className="flex flex-col items-center  min-h-screen animate-gradient bg-gradient-to-br from-indigo-400 via-pink-100 to-rose-300 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900  p-6 text-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="space-y-6"
      >
        <motion.div
          className="flex flex-col items-center space-y-4"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <Lottie animationData={lottieStar} loop={false} />
          <h1 className="text-4xl font-bold text-zinc-800">Get Started</h1>
          <h2 className="text-2xl font-semibold text-indigo-400">Blessed Funds</h2>
          <AnimatePresence mode="wait">
            <motion.p
              key={currentQuote}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="text-gray-600 max-w-sm text-center px-4 h-8"
            >
              {currentQuote}
            </motion.p>
          </AnimatePresence>

        </motion.div>

        <motion.div
          className="flex items-center justify-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <motion.div
            animate={{
              rotate: [0, 5, -5, 5, -5, 0],
              transition: { duration: 2, repeat: Infinity },
            }}
            className='w-48 h-48'
          >
            <Lottie animationData={lottieCoins} loop={true} />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className='flex items-center justify-center'
        >
          <Button
            onClick={() => navigate({ to: "/login" })}
            className="relative flex items-center justify-center gap-2 text-lg font-semibold px-8 py-6 rounded-full 
             bg-gradient-to-r from-rose-400 via-pink-400 to-rose-400 
             text-white shadow-xl transition-all duration-300 
             motion-safe:animate-bounce-slow active:scale-95 group"
          >
            Let’s Go!
            <Smile
              className="ml-1 h-5 w-5 transition-transform duration-300 ease-in-out 
               motion-safe:group-hover:rotate-[20deg] motion-safe:group-active:rotate-[10deg]"
            />

            {/* Glowing Ping Effect */}
            <span className="absolute -inset-1 rounded-full bg-rose-300 opacity-50 blur-xl 
                   motion-safe:animate-ping-slow z-[-1]" />
          </Button>
        </motion.div>
      </motion.div>
    </div>
  )
}