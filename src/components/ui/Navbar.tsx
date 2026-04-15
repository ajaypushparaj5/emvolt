"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [isTop, setIsTop] = useState(true);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;

        if (latest <= 50) {
            setIsTop(true);
            setHidden(false);
        } else {
            setIsTop(false);
            if (latest > previous && latest > 150) {
                setHidden(true);
            } else {
                setHidden(false);
            }
        }
    });

    return (
        <motion.header
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${isTop ? "bg-transparent py-6" : "bg-[#0A0A0A] py-4 shadow-sm border-b border-white/5"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
                {/* Logo Section */}
                <div className="flex-shrink-0">
                    <img src="/logo.jpeg" alt="Emvolt Logo" className="h-10 w-auto" />
                </div>

                {/* Center Nav */}
                <nav className="hidden md:flex items-center gap-8 text-[13px] font-medium tracking-wide text-white/70">
                    <a href="#overview" className="hover:text-white transition-colors">Overview</a>
                    <a href="#services" className="hover:text-white transition-colors">Services</a>
                    <a href="#organization" className="hover:text-white transition-colors">Organization</a>
                    <a href="#contact" className="hover:text-white transition-colors">Contact</a>
                </nav>

                {/* Right CTA */}
                <div className="flex-shrink-0">
                    <a
                        href="#contact"
                        className="text-[13px] font-medium bg-[#E10600] text-white px-5 py-2.5 rounded-full hover:bg-[#aa0400] transition-colors"
                    >
                        Get in touch
                    </a>
                </div>
            </div>
        </motion.header>
    );
}
