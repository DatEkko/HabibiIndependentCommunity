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
                    <p className="text-4xl font-light uppercase tracking-[0.2em]">Thành viên Tổ chức</p>
                    <div className="h-px w-16 bg-linear-to-r from-transparent via-zinc-500 to-transparent mx-auto mt-6"></div>
                </div>

                <div className="max-w-7xl mx-auto flex flex-col gap-y-20">
                    {/* PHẦN 1: 2 người đầu tiên - Căn giữa ở hàng đầu */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:justify-center gap-x-12 gap-y-20">
                        {EliteMember.slice(0, 2).map((member) => (
                            <div
                                key={member.id}
                                className="member-card group relative opacity-0 scale-90 translate-y-10 w-full lg:max-w-[calc(25%-2.25rem)]"
                            >
                                {/* Image Container */}
                                <div className="cursor-pointer relative h-80 w-full overflow-hidden bg-zinc-900 ring-1 ring-white/10 lg:hover:ring-white/30 transition-all duration-500 shadow-2xl">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover object-[center_10%] grayscale-0 transition-all duration-1000"
                                        sizes="(max-width: 768px) 100vw, 25vw"
                                    />

                                    {/* Info Overlay - Luôn hiện thông tin */}
                                    <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-6 opacity-100 transition-all duration-500">
                                        <div className="translate-y-0 transition-transform duration-500">
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

                    {/* PHẦN 2: Các thành viên còn lại - Grid 4 cột như cũ */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-20">
                        {EliteMember.slice(2).map((member) => (
                            <div
                                key={member.id}
                                className="member-card group relative opacity-0 scale-90 translate-y-10"
                            >
                                {/* Image Container */}
                                <div className="cursor-pointer relative h-80 w-full overflow-hidden bg-zinc-900 ring-1 ring-white/10 lg:hover:ring-white/30 transition-all duration-500 shadow-2xl">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover object-[center_10%] grayscale-0 transition-all duration-1000"
                                        sizes="(max-width: 768px) 100vw, 25vw"
                                    />

                                    {/* Info Overlay - Luôn hiện thông tin */}
                                    <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-6 opacity-100 transition-all duration-500">
                                        <div className="translate-y-0 transition-transform duration-500">
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
            </div>
        </section>
    );
};

export default MemberSection;