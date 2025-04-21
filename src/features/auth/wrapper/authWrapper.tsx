import { AuthWrapperProps } from '@/types/WrapperTypes';
import React from 'react';
import { motion } from "framer-motion";


const AuthWrapper: React.FC<AuthWrapperProps> = ({ header, children }) => {
    return (
        <div className="flex justify-center min-h-screen py-24 px-4">
            <div className="w-full max-w-md space-y-4">
                <motion.h1
                    className="text-3xl sm:text-4xl font-extrabold text-indigo-800 text-center drop-shadow-md"
                    initial={{ opacity: 0.9, y: -10 }}
                    animate={{ opacity: 1, y: [0, -5, 0] }} // float effect
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "easeInOut",
                    }}    
                >
                    {header}
                </motion.h1>
                {children}
            </div>
        </div>
    );
};

export default AuthWrapper;