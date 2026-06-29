"use client";

import React, { useState, useEffect, useRef } from 'react'

const ERROR_IMG_SRC =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4K'

type Props = {
  src: string
  alt?: string
  type?: 'image' | 'video'
  className?: string
  style?: React.CSSProperties
}

export function ImageWithFallback({
  src,
  alt,
  type = 'image',
  className,
  style,
}: Props) {
  const [didError, setDidError] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleError = () => {
    setDidError(true)
  }

  // Monitor video error events on the nested <source> element
  useEffect(() => {
    if (type === 'video' && videoRef.current) {
      const videoElement = videoRef.current
      const sourceElement = videoElement.querySelector("source")
      
      if (sourceElement) {
        sourceElement.addEventListener("error", handleError)
      }

      return () => {
        if (sourceElement) {
          sourceElement.removeEventListener("error", handleError)
        }
      }
    }
  }, [type, src])

  // 🔴 Error fallback
  if (didError) {
    return (
      <div
        className={`inline-block bg-gray-100 text-center align-middle ${className ?? ''}`}
        style={style}
      >
        <div className="flex items-center justify-center w-full h-full">
          <img src={ERROR_IMG_SRC} alt="Error loading media" />
        </div>
      </div>
    )
  }

  // 🎥 Video support
  if (type === 'video') {
    return (
      <video
        ref={videoRef}
        className={className}
        style={style}
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    )
  }

  // 🖼️ Default image
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      onError={handleError}
    />
  )
}