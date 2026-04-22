"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const IntroSection = () => {
    const container = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top 75%",
                toggleActions: "play none none reverse",
            }
        });

        tl.to(".intro-line", { width: "60px", duration: 1, ease: "power4.out" })
            .to(".intro-text", {
                opacity: 1,
                y: 0,
                duration: 1,
                stagger: 0.15,
                ease: "power3.out"
            }, "-=0.6");

    }, { scope: container });

    return (
        <section
            ref={container}
            className="text-zinc-900 py-24 md:py-44 px-6 lg:px-20 overflow-hidden relative"
        >
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                {/* Cột trái: Tiêu đề */}
                <div className="lg:col-span-5 relative z-10">
                    <div className="intro-line w-0 h-0.5 bg-[#BF953F] mb-10"></div>
                    <h2 className="intro-text opacity-0 translate-y-8 text-5xl md:text-7xl font-light tracking-tight leading-[1.1]">
                        Giới thiệu <br />
                        <span className="italic text-highlight-text">Về chúng tôi</span>
                    </h2>
                </div>

                {/* Cột phải: Nội dung chi tiết */}
                <div className="lg:col-span-7 lg:pl-16 mt-8 lg:mt-0 relative z-10">
                    <p className="intro-text opacity-0 translate-y-8 text-zinc-600 text-xl md:text-2xl leading-relaxed font-light max-w-2xl">
                        <span className="text-zinc-900 font-bold">Habibi Independent Community</span>, là một cộng đồng những gồm người đam mê bộ môn đấu vật có tình yêu thuần khiết với nền văn minh Trung Đông.
                        Chúng tôi hứa hẹn sẽ là một tổ chức phát triển, lịch sự và văn minh.
                    </p>

                    <div className="intro-text opacity-0 translate-y-8 grid grid-cols-1 sm:grid-cols-2 gap-10 mt-16 border-t border-zinc-500 pt-12">
                        <div>
                            <span className="block text-highlight-text text-xs font-bold uppercase tracking-[0.2em] mb-3">
                                Mục tiêu
                            </span>
                            <h4 className="text-2xl font-semibold text-zinc-900">Cộng đồng văn minh</h4>
                            <p className="text-zinc-500 mt-2 font-light">Xây dựng một cộng đồng đấu vật dựa trên nền tảng tôn trọng, lịch thiệp và giữ gìn những giá trị tinh hoa của văn hóa Trung Đông.</p>
                        </div>
                        <div>
                            <span className="block text-highlight-text text-xs font-bold uppercase tracking-[0.2em] mb-3">
                                Khẩu hiệu
                            </span>
                            <h4 className="text-2xl font-semibold text-zinc-900">Bản sắc Habibi</h4>
                            <p className="text-zinc-500 mt-2 font-light">Habibi muôn năm, Habibi mãi đỉnh</p>
                        </div>
                    </div>
                </div>

            </div>

            {/* Chữ nền mờ cực nhẹ (Watermark) */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  opacity-[0.1] pointer-events-none select-none hidden lg:block">
                <h3 className="text-[20rem] font-black leading-none text-zinc-400 uppercase">
                    Habibi
                </h3>
            </div>
        </section>
    );
};

export default IntroSection;