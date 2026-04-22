"use client";

import React, { useRef, useMemo } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import allMembers from "@/content/EliteMember.json";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const MemberSection: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const displayedMembers = useMemo(() => allMembers.slice(0, 8), []);

    useGSAP(() => {
        gsap.from(".member-card", {
            opacity: 0,
            scale: 0.9,
            y: 40,
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

                {/* Header nhẹ nhàng */}
                <div className="text-center mb-20">
                    <h2 className="text-[10px] uppercase tracking-[0.6em] text-zinc-500 mb-4">Elite Members</h2>
                    <p className="text-4xl font-light uppercase tracking-[0.2em]">Hội Đồng Tối Cao</p>
                    <div className="h-px w-16 bg-linear-to-r from-transparent via-zinc-500 to-transparent mx-auto mt-6"></div>
                </div>

                {/* Grid 8 người: 4 cột trên Desktop, 2 cột trên Tablet, 1 cột trên Mobile */}
                <div className="grid-members grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-20 max-w-7xl mx-auto">
                    {displayedMembers.map((member, index) => (
                        <div
                            key={member.id}
                            className="member-card group relative"
                        >
                            {/* Image Container - Kích thước bằng nhau tuyệt đối */}
                            <div className="relative h-80 w-full overflow-hidden bg-zinc-900 ring-1 ring-white/10 group-hover:ring-white/30 transition-all duration-500 shadow-2xl">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover group-hover:grayscale-0 transition-all duration-1000"
                                    sizes="(max-width: 768px) 100vw, 25vw"
                                />

                                {/* Info Overlay */}
                                <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        <p className="text-yellow-500 text-[10px] font-bold tracking-[0.3em] uppercase mb-1">
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