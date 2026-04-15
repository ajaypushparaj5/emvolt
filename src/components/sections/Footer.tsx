"use client";

import { forwardRef } from "react";
import { motion } from "framer-motion";

export const Footer = forwardRef<HTMLDivElement, {}>(({ }, ref) => {
    return (
        <footer
            ref={ref}
            id="contact"
            className="relative min-h-[70vh] flex flex-col justify-end w-full bg-transparent py-24 border-t border-white/5"
        >
            <div className="max-w-7xl mx-auto px-6 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.8 }}
                    className="text-center space-y-8"
                >
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-2">
                        Complete MEP Solutions
                    </h2>
                    <p className="text-xl text-[#E10600] tracking-widest uppercase font-medium">
                        Emvolt Electromechanical Work LLC
                    </p>
                </motion.div>

                <div className="mt-24 pt-12 border-t border-white/10 grid grid-cols-1 lg:grid-cols-3 gap-12 font-medium">
                    <div className="space-y-4">
                        <h4 className="text-white text-sm uppercase tracking-wider font-bold mb-6 drop-shadow-md">Dubai / Ajman Office</h4>
                        <p className="text-white/80 text-sm leading-relaxed drop-shadow-sm max-w-sm">
                            AL - MURJAN BUILDING GROUND FLOOR OFFICE NO.1, <br />
                            OPP - ADCB BANK AL RASHIDIA 3, AJMAN UAE
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-white text-sm uppercase tracking-wider font-bold mb-6 drop-shadow-md">Umm Al Quwain Office</h4>
                        <p className="text-white/80 text-sm leading-relaxed drop-shadow-sm max-w-sm">
                            AL SHAMOOKH BUSINESS COMPLEX 2ND FLOOR, <br />
                            201 AL ITTIHAD ROAD, AL MUQTA 2 UMM AL QUWAIN, UAE
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-white text-sm uppercase tracking-wider font-bold mb-6 drop-shadow-md">Contact Us</h4>
                        <p className="text-white/80 text-sm leading-relaxed drop-shadow-sm">
                            <a href="mailto:info@emvoltude.com" className="hover:text-white hover:underline transition-colors block mb-2">info@emvoltude.com</a>
                            <a href="tel:+971528727036" className="hover:text-white hover:underline transition-colors block">+971 52 872 7036</a>
                        </p>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-semibold text-white/40">
                    <p>© {new Date().getFullYear()} Emvolt Electromechanical Work LLC. All Rights Reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
});

Footer.displayName = "Footer";
