"use client";

import { forwardRef } from "react";
import { motion } from "framer-motion";
import { SplitText } from "@/components/ui/SplitText";

export const HeroSection = forwardRef<HTMLDivElement, {}>(({ }, ref) => {
    return (
        <div
            ref={ref}
            id="overview"
            className="relative min-h-[130vh] w-full flex items-center justify-center pointer-events-none"
        >
            <div className="max-w-4xl mx-auto px-6 pt-[20vh] pb-[30vh]">
                <div className="pointer-events-auto text-center space-y-8">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight drop-shadow-2xl">
                        <SplitText text="Engineering" as="span" className="block" duration={0.8} />
                        <SplitText text="Excellence." as="span" className="text-[#E10600] drop-shadow-[0_0_15px_rgba(225,6,0,0.5)] block" delay={0.4} duration={0.8} />
                    </h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, margin: "-10%" }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                        className="text-lg md:text-xl text-white/90 leading-relaxed font-medium max-w-3xl mx-auto drop-shadow-md bg-black/20 p-4 rounded-xl backdrop-blur-sm"
                    >
                        Emvolt Electromechanical Work LLC, a UAE-based FEWA licensed company,
                        specializes in MEP engineering, covering Electrical, Plumbing, HVAC,
                        CCTV and Building Management System.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: false, margin: "-10%" }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="pt-8"
                    >
                        <p className="text-sm md:text-base text-white/80 max-w-2xl mx-auto tracking-wide font-medium drop-shadow-md bg-black/20 p-4 rounded-xl backdrop-blur-sm">
                            Committed to professionalism and client satisfaction, we offer one-stop
                            solutions for MEP needs, regardless of project size. We handle passing
                            and approvals for permanent and temporary FEWA connections.
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
});

HeroSection.displayName = "HeroSection";
