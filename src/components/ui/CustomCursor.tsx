"use client";

import { useEffect, useState, ReactNode } from "react";
import { motion } from "framer-motion";

export const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Determine if it's a touch device
        if (window.matchMedia("(pointer: coarse)").matches) return;

        setIsVisible(true);

        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e: MouseEvent) => {
            // Logic to determine if cursor is over interactive elements
            const target = e.target as HTMLElement;
            if (
                target.tagName.toLowerCase() === "a" ||
                target.tagName.toLowerCase() === "button" ||
                target.closest("a") ||
                target.closest("button") ||
                target.hasAttribute("data-magnetic") ||
                target.hasAttribute("data-cursor-expand")
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener("mousemove", updateMousePosition);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, []);

    if (!isVisible) return null;

    return (
        <>
            <motion.div
                className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full mix-blend-difference bg-white"
                animate={{
                    x: mousePosition.x - (isHovering ? 20 : 8),
                    y: mousePosition.y - (isHovering ? 20 : 8),
                    width: isHovering ? 40 : 16,
                    height: isHovering ? 40 : 16,
                }}
                transition={{
                    type: "spring",
                    stiffness: 700,
                    damping: 28,
                    mass: 0.5,
                }}
                style={{
                    boxShadow: isHovering ? "0 0 20px 2px rgba(255,255,255,0.2)" : "none",
                }}
            />
        </>
    );
};
