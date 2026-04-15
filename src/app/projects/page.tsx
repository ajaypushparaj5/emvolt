"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projectsData } from "@/data/projects";

import Navbar from "@/components/ui/Navbar";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ProjectsPage() {
    const [activeIndex, setActiveIndex] = useState(0);
    const activeProject = projectsData[activeIndex];

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % projectsData.length);
    };

    const handlePrev = () => {
        setActiveIndex((prev) => (prev - 1 + projectsData.length) % projectsData.length);
    };

    return (
        <main className="relative w-full h-screen overflow-hidden bg-[#0A0A0A]">
            <Navbar />

            {/* Full Background Image */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeProject.id}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 0.4, scale: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.5 } }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="absolute inset-0 z-0"
                >
                    {/* Will be replaced with actual image once you have the URLs */}
                    <div
                        className="w-full h-full bg-cover bg-center"
                        style={{
                            backgroundImage: `url(${activeProject.image})`,
                            backgroundColor: '#1a1a1a' // Fallback
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
                </motion.div>
            </AnimatePresence>

            <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-6 pt-32 pb-12 flex flex-col justify-between">
                <div className="flex-1 flex items-center justify-between gap-12">

                    {/* Left Side: Active Project Details */}
                    <div className="w-full max-w-xl">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeProject.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="space-y-6"
                            >
                                <p className="text-[#E10600] text-sm uppercase tracking-[0.2em] font-bold">
                                    {activeProject.category}
                                </p>
                                <h1 className="text-5xl md:text-6xl font-bold text-white uppercase tracking-tight leading-[1.1]">
                                    {activeProject.title}
                                </h1>
                                <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-md">
                                    {activeProject.description}
                                </p>

                                <div className="pt-4">
                                    <button className="bg-[#ba8759] text-white px-8 py-3 rounded-full text-sm font-bold tracking-wider hover:bg-[#a0744d] transition-colors">
                                        VIEW DETAILS
                                    </button>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Right Side: Project Cards list */}
                    <div className="hidden lg:flex flex-col gap-4">
                        {projectsData.map((project, idx) => {
                            if (idx === activeIndex) return null; // Don't show active project in the right list
                            return (
                                <div
                                    key={project.id}
                                    onClick={() => setActiveIndex(idx)}
                                    className="relative group w-80 h-32 rounded-2xl overflow-hidden cursor-pointer border-2 border-white/10 hover:border-white/30 transition-colors"
                                >
                                    <div
                                        className="absolute inset-0 bg-cover bg-center scale-105 group-hover:scale-100 transition-transform duration-700"
                                        style={{ backgroundImage: `url(${project.image})`, backgroundColor: '#2a2a2a' }}
                                    />
                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                                    <div className="absolute inset-0 flex items-center justify-center p-4">
                                        <h3 className="text-center text-white font-bold tracking-wider text-xs md:text-sm uppercase drop-shadow-md">
                                            {project.title}
                                        </h3>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>

                {/* Bottom Pagination Controller */}
                <div className="flex items-center gap-6 pb-6">
                    <button
                        onClick={handlePrev}
                        className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors backdrop-blur-sm"
                    >
                        <ChevronLeft size={20} />
                    </button>

                    <div className="flex flex-col items-center">
                        <span className="text-white font-bold text-lg">{(activeIndex + 1).toString().padStart(2, '0')}</span>
                        <div className="w-8 h-[2px] bg-[#E10600] my-1" />
                        <span className="text-white/50 text-sm">{projectsData.length.toString().padStart(2, '0')}</span>
                    </div>

                    <button
                        onClick={handleNext}
                        className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors backdrop-blur-sm"
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>
            </div>
        </main>
    );
}
