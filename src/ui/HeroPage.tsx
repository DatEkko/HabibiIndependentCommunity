"use client";
import { useRef } from "react";
import Image from 'next/image';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const HeroPage = () => {
    const container = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            defaults: { ease: "power4.out", force3D: true }
        });

        tl.to(".hero-bg", {
            scale: 1,
            duration: 2,
        })
            .to(".animate-text", {
                y: 0,
                opacity: 1,
                duration: 1.2,
                stagger: 0.2,
            }, "-=1.5");

    }, { scope: container });

    return (
        <section ref={container} className="relative min-h-screen w-full overflow-hidden px-5 lg:px-10">
            <div className="hero-bg absolute inset-0 scale-110 will-change-transform">
                <Image
                    src={"/images/bg/bg.png"}
                    alt="Background Hero"
                    fill
                    quality={75}
                    priority
                    className="object-cover"
                />
            </div>

            <div className="absolute inset-0 bg-black/50" />

            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white">
                <div className='text-center'>
                    <p className="animate-text opacity-0 translate-y-10 text-xl md:text-2xl tracking-[0.3em] uppercase mb-4 font-light text-gray-300">
                        Welcome to
                    </p>

                    <h1 className="animate-text opacity-0 translate-y-10 text-7xl md:text-9xl font-black uppercase tracking-wide
                                    bg-linear-to-b from-white via-white via-45% to-[#BF953F]
                                    bg-clip-text text-transparent
                                    drop-shadow-[0_5px_15px_rgba(0,0,0,0.3)]
                                    leading-none">
                        Habibi
                    </h1>

                    <h2 className="animate-text opacity-0 translate-y-10 text-2xl md:text-5xl font-bold uppercase mt-4 tracking-widest text-white/90">
                        Independent Community
                    </h2>

                    <div className="animate-text opacity-0 w-20 h-0.5 bg-[#BF953F] mx-auto mt-8"></div>
                </div>
            </div>
        </section>
    );
};

export default HeroPage;