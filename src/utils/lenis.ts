// utils/lenis.ts
import Lenis from '@studio-freight/lenis'

let lenisInstance: Lenis | null = null

export const initSmoothScroll = () => {
  if (typeof window === 'undefined') return null // SSR-safe

  if (!lenisInstance) {
    lenisInstance = new Lenis({
      duration: 1 ,
      smoothWheel: true,
   easing: (t: number) => 1 - Math.pow(1 - t, 3),
    })

    const raf = (time: number) => {
      lenisInstance?.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }

  return lenisInstance
}

export const getLenisInstance = () => lenisInstance
