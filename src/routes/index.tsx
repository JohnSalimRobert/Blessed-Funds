import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Sparkles, Smile } from "lucide-react";


export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 via-slate-50 to-rose-50 p-6 text-center">

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
        <Sparkles className="h-10 w-10 text-purple-600 animate-pulse" />
        <h1 className="text-4xl font-bold text-gray-800">Get Started</h1>
        <h2 className="text-2xl font-semibold text-purple-700">Blessed Funds</h2>
        <p className="text-gray-600 max-w-sm">
          Track your church youth group giving with joy and purpose!
        </p>
      </motion.div>

      <motion.div
        className="relative"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <motion.div
          animate={{
            rotate: [0, 5, -5, 5, -5, 0],
            transition: { duration: 2, repeat: Infinity },
          }}
          className="text-5xl"
        >
          💰
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <Button
          className="text-lg px-8 py-6 rounded-full bg-purple-600 hover:bg-purple-700 transition-all shadow-lg"
          onClick={() => navigate({to: "/login"})}
        >
          Let's Go!
          <Smile className="ml-2 h-5 w-5" />
        </Button>
      </motion.div>
    </motion.div>
  </div>
  )
}