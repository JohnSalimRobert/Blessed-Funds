import FormBuilder from "@/components/app/FormBuilder"
import { loginFields } from "../fields/loginFields"
import { Link } from "@tanstack/react-router"
import AuthWrapper from "../wrapper/authWrapper"
import { useAuthStore } from "@/store"
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react"
import AnimatedSplitText from "@/components/app/Text/AnimatedSplitText"

const loginHeadlines = [
    "Welcome back. Let's get you in.",
    "Ready when you are.",
    "Back to build.",
    "Secure. Simple. Signed in.",
    "Let’s pick up where you left off.",
];

export const LoginPage = () => {
    const { login } = useAuthStore((state) => state);
    const textContainer = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const currentQuote = loginHeadlines[currentIndex];
    
    const onSubmit = (data: any) => {
        console.log("Login data", data)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % loginHeadlines.length);
        }, 4000); // 4 seconds per quote

        return () => clearInterval(interval);
    }, []);
    return (
        <AuthWrapper header="Log in">
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
            <FormBuilder
                fields={loginFields}
                onSubmit={onSubmit}
                submitLabel="Log in"
                footer={
                    <div className="py-5 text-center text-sm">
                        <Link to="/forgot-password" className="text-primary hover:underline block mb-2">
                            Forgot password?
                        </Link>
                        Don’t have an account?{' '}
                        <Link to="/signup" className="text-accent text-rose-800 font-medium hover:underline">
                            Sign up
                        </Link>
                    </div>
                }
            />
        </AuthWrapper>
    )
}