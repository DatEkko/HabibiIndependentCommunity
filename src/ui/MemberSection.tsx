"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import EliteMember from "@/content/EliteMember.json";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const MemberSection: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.to(".member-card", {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 1,
            stagger: 0.15,
            ease: "back.out(1.7)",
            scrollTrigger: {
                trigger: ".grid-members",
                start: "top 80%",
            },
        });
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="py-24 bg-[#080808] text-white overflow-hidden">
            <div className="container mx-auto px-4">

                {/* Header */}
                <div className="text-center mb-20">
                    <h2 className="text-[10px] uppercase tracking-[0.6em] text-zinc-500 mb-4">Elite Members</h2>
                    <p className="text-4xl font-light uppercase tracking-[0.2em]">Hội Đồng Tối Cao</p>
                    <div className="h-px w-16 bg-linear-to-r from-transparent via-zinc-500 to-transparent mx-auto mt-6"></div>
                </div>

                {/* Grid Members */}
                <div className="grid-members grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-20 max-w-7xl mx-auto">
                    {EliteMember.map((member) => (
                        <div
                            key={member.id}
                            className="member-card group relative opacity-0 scale-90 translate-y-10"
                        >
                            {/* Image Container */}
                            <div className="cursor-pointer relative h-80 w-full overflow-hidden bg-zinc-900 ring-1 ring-white/10 lg:group-hover:ring-white/30 transition-all duration-500 shadow-2xl">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover grayscale-0 lg:grayscale-20 lg:group-hover:grayscale-0 transition-all duration-1000"
                                    sizes="(max-width: 768px) 100vw, 25vw"
                                />

                                {/* Info Overlay */}
                                {/* Mobile: hiện sẵn (opacity-100), Desktop: ẩn và hiện khi hover (lg:opacity-0 lg:group-hover:opacity-100) */}
                                <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-6 
                                                opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-500">

                                    {/* Mobile: vị trí chuẩn (translate-y-0), Desktop: trượt lên khi hover (lg:translate-y-4 lg:group-hover:translate-y-0) */}
                                    <div className="translate-y-0 lg:translate-y-4 lg:group-hover:translate-y-0 transition-transform duration-500">
                                        <p className="text-yellow-500 text-[12px] font-bold tracking-[0.3em] uppercase mb-1">
                                            {member.role}
                                        </p>
                                        <h3 className="text-xl font-black uppercase tracking-tighter">
                                            {member.name}
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MemberSection;