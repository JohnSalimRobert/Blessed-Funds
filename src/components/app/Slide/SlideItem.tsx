import { motion, usePresenceData } from 'framer-motion'
import Lottie from 'lottie-react'
import { forwardRef, type Ref } from 'react'
import type { SlideItemProps } from '@/types/SlideTypes'

export const SlideItem = forwardRef<HTMLDivElement, SlideItemProps>(
  ({ animation, title, description }, ref: Ref<HTMLDivElement>) => {
    const direction = usePresenceData()

    return (
      <motion.div
        className="flex flex-col items-center justify-center space-y-4 text-center px-6 w-full"
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -100, opacity: 0 }}
        // transition={{ type: "spring", bounce: 0.3 }}
      >
        <motion.div
          animate={{ rotate: [0, 2, -2, 2, -2, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-48 h-48"
        >
          <Lottie animationData={animation} loop />
        </motion.div>

        <h2 className="text-2xl font-semibold text-white">{title}</h2>
        <p className="text-white/80 max-w-sm">{description}</p>
      </motion.div>
    )
  }
)
