"use client";

import { forwardRef } from "react";
import { motion } from "framer-motion";

export const Organization = forwardRef<HTMLDivElement, {}>(({ }, ref) => {
    return (
        <div
            ref={ref}
            id="organization"
            className="relative min-h-[150vh] w-full bg-transparent py-[30vh] border-t border-white/5"
        >
            <div className="max-w-4xl mx-auto px-6 w-full text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.8 }}
                    className="mb-24 space-y-6 flex flex-col items-center"
                >
                    <h2 className="text-sm tracking-[0.2em] text-[#E10600] font-bold uppercase">Hierarchy</h2>
                    <div className="w-8 h-px bg-[#E10600]/40" />
                    <p className="text-4xl md:text-5xl text-white font-medium leading-tight tracking-tight">
                        Organization Structure
                    </p>
                </motion.div>

                <div className="relative font-mono text-sm tracking-widest text-[#E10600] bg-black/40 backdrop-blur-md rounded-2xl border border-white/10 py-16 px-6">

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{ duration: 1 }}
                        className="flex flex-col items-center gap-6"
                    >
                        <div className="px-8 py-4 bg-[#121212]/80 border border-white/20 text-white tracking-widest font-sans font-semibold uppercase text-xl drop-shadow-md">CLIENT</div>
                        <div className="h-12 w-px bg-white/30 drop-shadow-sm" />
                        <div className="px-8 py-4 border border-[#E10600]/50 bg-[#E10600]/20 text-white uppercase tracking-wider font-bold drop-shadow-md">CEO / MD / GM</div>

                        <div className="h-12 w-px bg-white/30 drop-shadow-sm" />

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full max-w-4xl border-t border-white/30 pt-12 relative">
                            <div className="absolute top-0 left-1/2 -ml-px w-px h-12 bg-white/30 -translate-y-full drop-shadow-sm" />
                            <div className="space-y-4">
                                <div className="px-4 py-3 bg-[#121212]/90 border border-white/20 font-bold text-white text-xs drop-shadow-lg">PROCUREMENT & PRO</div>
                            </div>
                            <div className="space-y-4">
                                <div className="px-4 py-3 bg-[#121212]/90 border border-white/20 font-bold text-white text-xs drop-shadow-lg">SITE ENGINEER</div>
                            </div>
                            <div className="space-y-4">
                                <div className="px-4 py-3 bg-[#121212]/90 border border-white/20 font-bold text-white text-xs drop-shadow-lg">ELECTRICAL ENGINEER</div>
                            </div>
                            <div className="space-y-4">
                                <div className="px-4 py-3 bg-[#121212]/90 border border-white/20 font-bold text-white text-xs drop-shadow-lg">PROJECT ENGINEER</div>
                            </div>
                        </div>

                        <div className="w-full max-w-lg mt-12 grid grid-cols-2 gap-8 relative border-t border-white/30 pt-12">
                            <div className="absolute top-0 left-1/2 -ml-px w-px h-12 bg-white/30 -translate-y-full drop-shadow-sm" />
                            <div className="px-4 py-3 bg-[#121212]/90 border border-white/20 font-bold text-white text-xs drop-shadow-md">DRAUGHTSMAN</div>
                            <div className="px-4 py-3 bg-[#121212]/90 border border-white/20 font-bold text-white text-xs drop-shadow-md">ACCOUNTANT</div>
                        </div>

                        <div className="h-12 w-px bg-white/30 drop-shadow-sm mt-12" />
                        <div className="px-8 py-3 bg-[#121212]/90 border border-white/20 text-white uppercase text-sm font-semibold drop-shadow-md">SUPERVISORS</div>
                        <div className="h-12 w-px bg-white/30 drop-shadow-sm" />

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl border-t border-white/30 pt-12 relative">
                            <div className="absolute top-0 left-1/2 -ml-px w-px h-12 bg-white/30 -translate-y-full drop-shadow-sm" />
                            <div className="flex items-center gap-3 font-semibold text-white text-xs text-left bg-black/60 border border-white/10 px-4 py-4 drop-shadow-lg"><span className="text-[#E10600]">■</span> Technicians/Helpers Group A (6-8 Persons)</div>
                            <div className="flex items-center gap-3 font-semibold text-white text-xs text-left bg-black/60 border border-white/10 px-4 py-4 drop-shadow-lg"><span className="text-[#E10600]">■</span> Technicians/Helpers Group B (6-8 Persons)</div>
                            <div className="flex items-center gap-3 font-semibold text-white text-xs text-left bg-black/60 border border-white/10 px-4 py-4 drop-shadow-lg"><span className="text-[#E10600]">■</span> Technicians/Helpers Group C (6-8 Persons)</div>
                            <div className="flex items-center gap-3 font-semibold text-white text-xs text-left bg-black/60 border border-white/10 px-4 py-4 drop-shadow-lg"><span className="text-[#E10600]">■</span> Technicians/Helpers Group D (6-8 Persons)</div>
                        </div>

                    </motion.div>
                </div>
            </div>
        </div>
    );
});

Organization.displayName = "Organization";
