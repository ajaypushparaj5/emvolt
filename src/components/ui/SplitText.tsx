"use client";

import { motion } from "framer-motion";
import React from "react";

interface SplitTextProps {
    text: string;
    className?: string;
    delay?: number;
    duration?: number;
    stagger?: number;
    as?: React.ElementType;
}

export const SplitText = ({
    text,
    className = "",
    delay = 0,
    duration = 0.5,
    stagger = 0.02,
    as: Component = "div",
}: SplitTextProps) => {
    const words = text.split(" ");

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: stagger, delayChildren: delay },
        }),
    };

    const child = {
        hidden: {
            opacity: 0,
            y: `1em`,
            rotate: 5,
        },
        visible: {
            opacity: 1,
            y: `0em`,
            rotate: 0,
            transition: {
                duration,
                ease: [0.2, 0.65, 0.3, 0.9] as [number, number, number, number],
            },
        },
    };

    return (
        <Component className={className}>
            <motion.span
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-10%" }}
                className="inline-flex flex-wrap"
            >
                {words.map((word, idx) => (
                    <span key={idx} className="overflow-hidden inline-block mr-[0.25em]">
                        {word.split("").map((char, charIdx) => (
                            <motion.span
                                variants={child}
                                key={charIdx}
                                className="inline-block"
                            >
                                {char}
                            </motion.span>
                        ))}
                    </span>
                ))}
            </motion.span>
        </Component>
    );
};
