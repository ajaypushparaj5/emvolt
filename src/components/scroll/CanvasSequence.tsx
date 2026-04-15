"use client";

import { useRef, useEffect, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

export default function CanvasSequence() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { scrollYProgress } = useScroll();
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const frameCount = 240;

    useEffect(() => {
        const loadedImages: HTMLImageElement[] = [];
        for (let i = 1; i <= frameCount; i++) {
            const img = new Image();
            img.src = `/3dvdo/ezgif-frame-${String(i).padStart(3, "0")}.jpg`;
            loadedImages.push(img);
        }
        setImages(loadedImages);

        if (loadedImages[0]) {
            loadedImages[0].onload = () => {
                if (canvasRef.current) {
                    const ctx = canvasRef.current.getContext("2d");
                    if (ctx) {
                        renderFrame(ctx, loadedImages[0], canvasRef.current);
                    }
                }
            };
        }
    }, []);

    const renderFrame = (ctx: CanvasRenderingContext2D, img: HTMLImageElement, canvas: HTMLCanvasElement) => {
        // Fill the background
        ctx.fillStyle = "#0A0A0A";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
        const x = (canvas.width / 2) - (img.width / 2) * scale;
        const y = (canvas.height / 2) - (img.height / 2) * scale;

        ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
    };

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (images.length === 0 || !canvasRef.current) return;

        const frameIndex = Math.min(
            frameCount - 1,
            Math.floor(latest * frameCount)
        );

        const img = images[frameIndex];
        if (img && img.complete) {
            const ctx = canvasRef.current.getContext("2d");
            if (ctx) {
                renderFrame(ctx, img, canvasRef.current);
            }
        }
    });

    useEffect(() => {
        const handleResize = () => {
            if (canvasRef.current) {
                const dpr = window.devicePixelRatio || 1;
                const rect = canvasRef.current.parentElement?.getBoundingClientRect();

                if (rect) {
                    canvasRef.current.width = rect.width * dpr;
                    canvasRef.current.height = rect.height * dpr;

                    const ctx = canvasRef.current.getContext("2d");
                    if (ctx) {
                        // Re-render current frame on resize without context scaling - we handle it in math
                        const latest = scrollYProgress.get();
                        const frameIndex = Math.min(
                            frameCount - 1,
                            Math.floor(latest * frameCount)
                        );
                        const img = images[frameIndex];
                        if (img && img.complete) {
                            renderFrame(ctx, img, canvasRef.current);
                        }
                    }
                }
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [images, scrollYProgress]);

    return (
        <div className="fixed inset-0 w-full h-[100dvh] z-0 bg-[#0A0A0A]">
            <canvas
                ref={canvasRef}
                className="w-full h-full block"
            />
            <div className="absolute inset-0 bg-[#0A0A0A]/50 md:bg-[#0A0A0A]/30 z-10 mix-blend-multiply pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/60 z-10 pointer-events-none" />
        </div>
    );
}
