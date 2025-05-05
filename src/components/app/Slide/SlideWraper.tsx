import { FC, useEffect, useState } from 'react'
import { SlideItem } from './SlideItem'
import { SlideWrapperProps } from '@/types/SlideTypes'
import { AnimatePresence } from 'motion/react'

export const SlideWrapper: FC<SlideWrapperProps> = ({ slidesData }) => {
  const [current, setCurrent] = useState(0)
  const nextSlide = () => setCurrent((prev) => (prev + 1) % slidesData.length)
  const resetSlide = () => setCurrent(0)
  const slide = slidesData[current]
  const direction = current === 0 ? 1 : -1

  useEffect(() =>{
    setInterval(() => {
        if(current === slidesData.length - 1) {
          resetSlide()
        } else {
          nextSlide()
        }
    }, 4000);
  },[])

  return (
    <div className='h-[20rem]'>
      <SlideItem key={current} {...slide} />
    </div>
  )
}
