"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { FaDiscord, FaComments, FaCodeBranch, FaCheckCircle } from "react-icons/fa";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const steps = [
    {
        id: 1,
        title: "Tham gia Discord",
        desc: "Bước đầu tiên để gia nhập đại gia đình Habibi bằng cách kết nối vào server discord Lexy - Đam mê Đấu Vật Community.",
        icon: <FaDiscord />,
    },
    {
        id: 2,
        title: "Vào Tab 'Chat Chung'",
        desc: "Tìm đến khu vực thảo luận chính, nơi mọi cư dân tụ họp và chia sẻ.",
        icon: <FaComments />,
    },
    {
        id: 3,
        title: "Threads 'Chính Phủ'",
        desc: "Vào mục Threads, tìm 'Văn phòng chính phủ Habibi' để làm thủ tục cấp định danh.",
        icon: <FaCodeBranch />,
    },
    {
        id: 4,
        title: "Thành công!",
        desc: "Sau khi xin cấp định danh, bạn chính thức trở thành một Habibi thực thụ.",
        icon: <FaCheckCircle />,
    },
];

const JoinUsSection: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
            },
        });
        tl.from(".animate-header", {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
        })
            .from(".step-card", {
                opacity: 0,
                y: 40,
                stagger: 0.2,
                duration: 0.8,
                ease: "power4.out",
            }, "-=0.4")
            .from(".animate-button", {
                scale: 0.8,
                opacity: 0,
                duration: 0.6,
                ease: "power4.out",
            }, "-=0.6");

    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} className="py-24 bg-[#EBEBE3] text-zinc-900">
            <div className="container mx-auto px-4">
                <div className="text-center mb-20 animate-header">
                    <h2 className="text-[11px] uppercase tracking-[0.5em] text-[#5865F2] mb-3 font-bold">
                        Habibi Onboarding
                    </h2>
                    <p className="text-4xl md:text-5xl font-black uppercase tracking-tighter">
                        Quy trình <span className="text-[#5865F2]">Nhập cư</span>
                    </p>
                </div>

                <div className="steps-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {steps.map((step) => (
                        <div key={step.id} className="step-card group relative">
                            <div className="h-full bg-[#FFFAF0] p-8 rounded-2xl border-b-4 border-transparent hover:border-[#5865F2] hover:shadow-[0_20px_40px_rgba(88,101,242,0.1)] transition-all duration-500">
                                <span className="absolute top-4 right-6 text-5xl font-black text-[#5865F2]/20 group-hover:text-[#5865F2]/40 transition-colors">
                                    0{step.id}
                                </span>
                                <div className="mb-6 w-14 h-14 rounded-xl bg-[#5865F2] flex items-center justify-center text-white text-2xl shadow-[0_10px_20px_rgba(88,101,242,0.3)] group-hover:scale-110 transition-transform">
                                    {step.icon}
                                </div>

                                <h3 className="text-lg font-black mb-3 uppercase tracking-tight text-zinc-800">
                                    {step.title}
                                </h3>

                                <p className="text-zinc-500 text-sm leading-relaxed">
                                    {step.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center animate-button">
                    <a
                        href="https://discord.com/invite/zwxuxwXR4"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block"
                    >
                        <button className="cursor-pointer px-12 py-4 bg-[#5865F2] text-white font-black uppercase tracking-[0.2em] rounded-2xl shadow-lg 
                     hover:bg-[#4752C4] hover:shadow-[#5865F2]/40 transition-all active:scale-95 duration-300">
                            Tham gia Ngay
                        </button>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default JoinUsSection;