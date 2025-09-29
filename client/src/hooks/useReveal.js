import { useEffect, useRef, useState } from 'react'

const defaultOptions = {
  threshold: 0.08,
  rootMargin: '0px 0px -5% 0px',
  once: true,
}

export default function useReveal(options = {}) {
  const { threshold, rootMargin, once } = { ...defaultOptions, ...options }
  const elementRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = elementRef.current
    if (!node) {
      return
    }

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once) {
            observer.disconnect()
          }
        } else if (!once) {
          setIsVisible(false)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(node)

    return () => {
      observer.unobserve(node)
      observer.disconnect()
    }
  }, [threshold, rootMargin, once])

  return [elementRef, isVisible]
}
