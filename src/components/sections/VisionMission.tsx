"use client";

import { forwardRef } from "react";
import { motion } from "framer-motion";

export const VisionMission = forwardRef<HTMLDivElement, {}>(({ }, ref) => {
    return (
        <div
            ref={ref}
            className="relative min-h-[150vh] w-full flex items-center justify-center bg-gradient-to-b from-transparent via-[#0A0A0A]/80 to-[#0A0A0A] pointer-events-none"
        >
            <div className="max-w-6xl mx-auto px-6 w-full py-[30vh]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 pointer-events-auto">
                    {/* Vision */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, margin: "-20%" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="space-y-6 bg-black/40 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-white/10"
                    >
                        <h2 className="text-sm tracking-[0.2em] text-[#E10600] font-bold uppercase drop-shadow-md">Vision</h2>
                        <div className="w-12 h-px bg-[#E10600]" />
                        <p className="text-2xl md:text-3xl text-white font-semibold leading-tight tracking-tight drop-shadow-lg">
                            To become the "Partner of Choice" and set standards acknowledged as "Best in its Class".
                        </p>
                        <p className="text-white/80 leading-relaxed text-lg font-medium drop-shadow-sm">
                            We aspire to reach and retain our position amongst the top three companies and be the leading brand within the next 5 years in the MEP sector, delivering true value to society.
                        </p>
                    </motion.div>

                    {/* Mission */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, margin: "-20%" }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="space-y-6 bg-black/40 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-white/10"
                    >
                        <h2 className="text-sm tracking-[0.2em] text-[#E10600] font-bold uppercase drop-shadow-md">Mission</h2>
                        <div className="w-12 h-px bg-[#E10600]" />
                        <p className="text-2xl md:text-3xl text-white font-semibold leading-tight tracking-tight drop-shadow-lg">
                            Rapidly grow our business into a dominant position in the electro-mechanical service sector.
                        </p>
                        <p className="text-white/80 leading-relaxed text-lg font-medium drop-shadow-sm">
                            Based on the core principles of customer focus, excellence of our services, motivated workforce, and the speed of our response on a sustainable basis.
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
});

VisionMission.displayName = "VisionMission";
