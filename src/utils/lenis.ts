// utils/lenis.ts
import Lenis from '@studio-freight/lenis'

let lenisInstance: Lenis | null = null

export const initSmoothScroll = () => {
  if (typeof window === 'undefined') return null // SSR-safe

  if (!lenisInstance) {
    lenisInstance = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })

    // Ignore scroll on elements with class "scrollable-container"
    document.addEventListener('wheel', (e) => {
      const target = e.target as HTMLElement;
      return;
  console.log(target)
      if (target.closest('.sidebar_scrollable_container')) {
        // Don't let Lenis handle this
        return;
      }
    });

    const raf = (time: number) => {
      lenisInstance?.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }

  return lenisInstance
}

export const getLenisInstance = () => lenisInstance
