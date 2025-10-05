import { gsap } from 'gsap'
import React, { useRef, useState } from 'react'

const ImageWithScatterEffect = ({ src, alt, className }) => {
  const containerRef = useRef(null)
  const mainImageRef = useRef(null)
  const scatteredImagesRef = useRef([])
  const [isHovered, setIsHovered] = useState(false)

  const createScatteredImages = () => {
    const container = containerRef.current
    const mainImage = mainImageRef.current
    
    if (!container || !mainImage) return
    scatteredImagesRef.current.forEach(img => {
      if (img && img.parentNode) {
        img.parentNode.removeChild(img)
      }
    })
    scatteredImagesRef.current = []
    const positions = [
      { side: 'left', rotation: -15 },
      { side: 'right', rotation: 15 }
    ]
    
    positions.forEach((position, i) => {
      const img = document.createElement('img')
      img.src = src
      img.alt = alt
      img.className = 'absolute w-72 h-auto object-cover pointer-events-none'
      img.style.zIndex = '5'

      img.style.left = '50%'
      img.style.top = '50%'
      img.style.transform = 'translate(-50%, -50%)'
      img.style.opacity = '0'
      
      container.appendChild(img)
      scatteredImagesRef.current.push({ img, position })
    })
  }

  const animateScatter = () => {
    if (scatteredImagesRef.current.length === 0) return
    scatteredImagesRef.current.forEach((item, index) => {
      const { img, position } = item
      
      const offsetX = position.side === 'left' ? -80 : 80
      const offsetY = Math.random() * 20 - 10

      gsap.to(img, {
        x: offsetX,
        y: offsetY,
        rotation: position.rotation,
        scale: 0.9,
        opacity: 0.7,
        duration: 0.5,
        delay: index * 0.1,
        ease: "back.out(1.2)"
      })
    })

    gsap.to(mainImageRef.current, {
      scale: 1.05,
      duration: 0.3,
      ease: "power2.out"
    })
  }

  const animateGather = () => {
    if (scatteredImagesRef.current.length === 0) return

    scatteredImagesRef.current.forEach((item, index) => {
      const { img } = item
      
      gsap.to(img, {
        x: 0,
        y: 0,
        rotation: 0,
        scale: 1,
        opacity: 0,
        duration: 0.4,
        delay: index * 0.05,
        ease: "power2.inOut",
        onComplete: () => {
          if (img && img.parentNode) {
            img.parentNode.removeChild(img)
          }
        }
      })
    })

    gsap.to(mainImageRef.current, {
      scale: 1,
      duration: 0.3,
      ease: "power2.out"
    })

    scatteredImagesRef.current = []
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
    createScatteredImages()
    setTimeout(() => animateScatter(), 50)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    animateGather()
  }

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-full flex items-center justify-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        ref={mainImageRef}
        src={src}
        alt={alt}
        className={`${className} relative z-10`}
      />
    </div>
  )
}

export default ImageWithScatterEffect