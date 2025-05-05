import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { Smile } from "lucide-react";
import { useNavigate } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import AnimatedSplitText from "@/components/app/Text/AnimatedSplitText";
import { SlideWrapper } from "@/components/app/Slide/SlideWraper";
import { slidesData } from "../data/slideData";

const quotes = [
    "Track your church youth group giving with joy and purpose!",
    "Log offerings and tithes with ease.",
    "Generate reports to see your community’s growth.",
    "Plan and manage future events effortlessly.",
    "Empower transparency and stewardship in faith."
];

const GetStarted: React.FC = () => {
    const navigate = useNavigate();
    const textContainer = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const currentQuote = quotes[currentIndex];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % quotes.length);
        }, 6000); // 4 seconds per quote

        return () => clearInterval(interval);
    }, []);
    return (
        <>
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
                    <h2 className="text-2xl font-semibold text-indigo-400">Blessed Funds</h2>
                    {/* <Lottie animationData={lottieStar} loop={false} /> */}
                    {/* <h1 className="text-4xl font-bold text-zinc-800">Get Started</h1> */}
                    <AnimatePresence mode="wait">
                        <motion.p
                            ref={textContainer}
                            key={currentQuote}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.5 }}
                            className="text-slate-200 max-w-sm text-center px-4 h-8"
                        >
                            <AnimatedSplitText text={currentQuote} />
                        </motion.p>
                    </AnimatePresence>

                </motion.div>
{/* 
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
                </motion.div> */}
                <SlideWrapper slidesData={slidesData} />

                <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    className='flex items-center justify-center'
                >
                    <Button
                        onClick={() => navigate({ to: "/login" })}
                        className="relative flex items-center justify-center gap-2 text-lg font-semibold px-8 py-6 rounded-full 
             bg-gradient-to-r from-orange-500 via-orange-450 to-orange-500 
             text-white shadow-xl transition-all duration-300
             motion-safe:animate-bounce-slow active:scale-95 group"
                    >
                        Let’s Go!
                        <Smile
                            className="ml-1 h-5 w-5 transition-transform duration-300 ease-in-out 
               motion-safe:group-hover:rotate-[20deg] motion-safe:group-active:rotate-[10deg]"
                        />

                        {/* Glowing Ping Effect */}
                        <span className="absolute -inset-1 rounded-full bg-orange-400 opacity-50 blur-xl 
                   motion-safe:animate-ping-slow z-[-1]" />
                    </Button>
                </motion.div>
            </motion.div>
        </>
    );
};

export default GetStarted;