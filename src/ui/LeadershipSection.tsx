"use client"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import { useRef } from "react";
import leaders from "@/content/LeaderMember.json"


if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const LeadershipSection = () => {
    const container = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top 75%",
                toggleActions: "play none none reverse",
            }
        });

        tl.to(".animate-title", {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out"
        })
            .to(".animate-img", {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power3.out"
            }, "-=1")
            .to(".animate-info", {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power3.out"
            }, "-=0.4")

    }, { scope: container });

    return (
        <section ref={container} className="py-20 overflow-hidden">
            <div className="container mx-auto max-w-7xl">
                <div className="text-center mb-16 text-primary-text">
                    <h2 className="animate-title opacity-0 translate-y-10 text-3xl md:text-7xl font-black uppercase tracking-widest">
                        Ban Điều Hành
                    </h2>
                    <div className="h-1 w-20 mx-auto mt-4"></div>
                </div>

                {/* Container Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 items-center">
                    {leaders.map((leader) => (
                        <div
                            key={leader.id}
                            className={`flex flex-col items-center transition-all duration-500 ${leader.isFounder
                                ? "order-first md:order-0 md:scale-110 z-10"
                                : "md:opacity-80 md:hover:opacity-100"}`}
                        >
                            {/* Card Ảnh */}
                            <div className={`animate-img opacity-0 translate-y-10 w-full mb-6 overflow-hidden relative group ${leader.isFounder
                                ? "border-2 border-primary-text shadow-xl"
                                : "grayscale-20 hover:grayscale-0"
                                }`}>
                                <div className="relative w-full h-100">
                                    <Image
                                        src={leader.image}
                                        alt={leader.name}
                                        fill
                                        className="object-cover object-[center_10%] transition-transform duration-700 group-hover:scale-110"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />
                                </div>

                                {leader.isFounder && (
                                    <div className="absolute top-4 left-4 bg-primary-text text-background text-[10px] font-black px-3 py-1 uppercase tracking-tighter z-20">
                                        Founder
                                    </div>
                                )}
                            </div>

                            {/* Thông tin */}
                            <div className="animate-info opacity-0 translate-y-10 text-center px-4">
                                <h3 className={`text-primary-text mb-1 uppercase tracking-tight ${leader.isFounder
                                    ? "text-2xl font-black"
                                    : "text-lg font-bold"}`}>
                                    {leader.name}
                                </h3>
                                <p className="text-xs font-bold text-highlight-text mb-4 tracking-[0.2em] uppercase">
                                    {leader.role}
                                </p>
                                <p className="text-primary-text leading-relaxed text-sm max-w-xs mx-auto">
                                    {leader.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LeadershipSection;