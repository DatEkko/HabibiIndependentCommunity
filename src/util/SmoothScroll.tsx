"use client"
import { ReactLenis, LenisRef } from 'lenis/react'
import { useEffect, useRef, ReactNode } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

interface SmoothScrollProps {
    children: ReactNode
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
    const lenisRef = useRef<LenisRef>(null)

    useEffect(() => {
        // 1. Vòng lặp ticker: Phải luôn chạy để điều khiển Lenis raf
        const update = (time: number) => {
            lenisRef.current?.lenis?.raf(time * 1000)
        }
        gsap.ticker.add(update)

        // 2. Kết nối với ScrollTrigger
        const lenis = lenisRef.current?.lenis
        if (lenis) {
            lenis.on('scroll', ScrollTrigger.update)
            // Đảm bảo các vị trí animation được tính toán lại
            ScrollTrigger.refresh()
        }

        return () => {
            gsap.ticker.remove(update)
            lenis?.off('scroll', ScrollTrigger.update)
        }
    }, [])

    return (
        <ReactLenis
            ref={lenisRef}
            root
            autoRaf={false} // Rất quan trọng: Tắt auto để dùng ticker của GSAP
            options={{
                lerp: 0.1,
                duration: 1.5,
                smoothWheel: true,
                wheelMultiplier: 1.1,
                touchMultiplier: 2,
            }}
        >
            {children}
        </ReactLenis>
    )
}