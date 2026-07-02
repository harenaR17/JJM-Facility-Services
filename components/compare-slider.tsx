'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

interface CompareSliderProps {
  before: string
  after: string
  beforeLabel?: string
  afterLabel?: string
}

export function CompareSlider({
  before,
  after,
  beforeLabel = 'Avant',
  afterLabel = 'Après',
}: CompareSliderProps) {
  const [position, setPosition] = useState(50)
  const [containerWidth, setContainerWidth] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)

  const clamp = (v: number) => Math.min(100, Math.max(0, v))

  const getPercent = useCallback((clientX: number) => {
    const el = containerRef.current
    if (!el) return 50
    const { left, width } = el.getBoundingClientRect()
    return clamp(((clientX - left) / width) * 100)
  }, [])

  const onMouseDown = () => { dragging.current = true }
  const onMouseMove = useCallback((e: MouseEvent) => {
    if (!dragging.current) return
    setPosition(getPercent(e.clientX))
  }, [getPercent])
  const onMouseUp = () => { dragging.current = false }

  useEffect(() => {
    // Set container width on mount and resize
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth)
      }
    }
    updateWidth()
    window.addEventListener('resize', updateWidth)

    const handleTouchMove = (e: { touches: { clientX: number }[] }) => {
      if (!dragging.current) return
      setPosition(getPercent(e.touches[0].clientX))
    }

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', onMouseUp)
    window.addEventListener('touchmove', handleTouchMove as EventListener, { passive: true })
    window.addEventListener('touchend', onMouseUp)
    return () => {
      window.removeEventListener('resize', updateWidth)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)
      window.removeEventListener('touchmove', handleTouchMove as EventListener)
      window.removeEventListener('touchend', onMouseUp)
    }
  }, [onMouseMove, getPercent])

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[3/2] overflow-hidden rounded-2xl shadow-lg select-none cursor-col-resize"
      onMouseDown={onMouseDown}
      onTouchStart={(e) => {
        dragging.current = true
        setPosition(getPercent(e.touches[0].clientX))
      }}
    >
      {/* After image (full) */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={after}
        alt={afterLabel}
        draggable={false}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Before image (clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${position}%` }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={before}
          alt={beforeLabel}
          draggable={false}
          className="absolute inset-0 h-full object-cover"
          style={{ width: containerWidth ?? '100%' }}
        />
      </div>

      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white shadow-md pointer-events-none"
        style={{ left: `${position}%` }}
      />

      {/* Handle */}
      <div
        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white shadow-lg flex items-center justify-center pointer-events-none"
        style={{ left: `${position}%` }}
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
          <path d="M6 4L2 9L6 14" stroke="#2B2E6E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 4L16 9L12 14" stroke="#2B2E6E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* Labels */}
      <span className="absolute top-3 left-3 bg-[var(--marine)]/80 text-white text-xs font-medium px-2 py-0.5 rounded pointer-events-none">
        {beforeLabel}
      </span>
      <span className="absolute top-3 right-3 bg-[var(--marine)]/80 text-white text-xs font-medium px-2 py-0.5 rounded pointer-events-none">
        {afterLabel}
      </span>
    </div>
  )
}
