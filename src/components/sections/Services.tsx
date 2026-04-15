"use client";

import { forwardRef } from "react";
import { motion } from "framer-motion";

const services = [
    {
        title: "ELECTRICAL",
        items: [
            "Power Distribution Systems",
            "Electrical L.V Networks, Outlets, Earthing, Lightening",
            "Cabling, Wiring, Lighting, Dimming",
        ],
    },
    {
        title: "PLUMBING & PUBLIC HEALTH ENGINEERING",
        items: [
            "Hot & Coldwater Supply system",
            "Water Filtration System",
            "Irrigation System",
            "Swimming Pool",
            "Drainage System",
            "Sanitation",
            "Rain Water",
            "Sewage Treatment",
        ],
    },
    {
        title: "MACHINE INSTALLATION",
        items: [
            "Low Current Systems",
            "Fire Detection & Alarms",
            "Telephone & Data Systems",
            "Access Control Systems",
            "Home Automation",
            "Audio/ Video Intercom Systems",
            "CCTV, P.A Sound Systems",
        ],
    },
    {
        title: "LOW VOLTAGE SYSTEM",
        items: [
            "Machinery relocation & setup",
            "Precision alignment & calibration",
            "Electrical and mechanical installation",
            "Commissioning & testing",
            "Ongoing maintenance & support",
            "Compliance with safety regulations & standards",
        ],
    },
    {
        title: "HVAC & DUCTING SYSTEM",
        items: [
            "Building, warehouse, factory, villa design",
            "Shop drawings & supervision",
            "Authority inspection support",
        ],
    },
    {
        title: "DESIGN & SUPERVISION",
        items: [
            "G.I & P.I Ducting Installation System",
            "Ecology Unit Installation Systems",
            "Chilled Water Piping System",
            "Kitchen hood exhaust & fresh air system",
            "Package units, DX units & Fan Coil Unit Installation",
            "Chemical Flushing & 3rd Party Testing Reports",
            "Ventilation systems",
            "Air Balancing System & Certifications",
        ],
    },
    {
        title: "HVAC & DUCTING SYSTEM (FIRE & SAFETY)",
        items: [
            "Fire alarm system installation & maintenance",
            "Fire extinguisher supply & inspection",
            "Sprinkler system design & installation",
            "Fire pump installation & testing",
            "Emergency lighting system installation",
            "Fire suppression system installation (e.g, CO2, foam)",
            "Fire hose reel installation & maintenance",
        ],
    },
];

export const Services = forwardRef<HTMLDivElement, {}>(({ }, ref) => {
    return (
        <div
            ref={ref}
            id="services"
            className="relative min-h-[300vh] w-full bg-transparent py-[20vh]"
        >
            <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.8 }}
                    className="mb-24 space-y-6"
                >
                    <h2 className="text-sm tracking-[0.2em] text-[#E10600] font-bold uppercase">Capabilities</h2>
                    <div className="w-8 h-px bg-[#E10600]/40" />
                    <p className="text-4xl md:text-5xl text-white font-medium leading-tight tracking-tight">
                        Comprehensive Services
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-x-16 md:gap-y-24">
                    {services.map((service, idx) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 0.6, delay: (idx % 3) * 0.1 }}
                            className="space-y-6 bg-black/40 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/10 drop-shadow-lg"
                        >
                            <h3 className="text-lg md:text-xl font-semibold text-white tracking-wide border-l-2 border-[#E10600] pl-4 drop-shadow-md">
                                {service.title}
                            </h3>
                            <ul className="space-y-4 pt-2">
                                {service.items.map((item, itemIdx) => (
                                    <li key={itemIdx} className="text-white/80 text-sm md:text-base font-medium leading-relaxed flex items-start gap-3 drop-shadow-sm">
                                        <span className="text-[#E10600] mt-1.5 opacity-80 text-[10px]">■</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
});

Services.displayName = "Services";
