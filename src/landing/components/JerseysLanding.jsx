import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import hoddie1 from '../assets/hoddie1.webp'
import hoddie2 from '../assets/hoddie2.webp'
import hoddie3 from '../assets/hoddie3.webp'
import hoddie4 from '../assets/hoddie4.webp'

gsap.registerPlugin(ScrollTrigger)

const JerseysLanding = () => {
  const containerRef = useRef(null)
  const scrollContainerRef = useRef(null)
  const titleRef = useRef(null)

  const prendas = [
    { id: 1, name: 'Hoddie Classic', price: '$45.99', image: hoddie1 },
    { id: 2, name: 'Hoddie Premium', price: '$59.99', image: hoddie2 },
    { id: 3, name: 'Hoddie Sport', price: '$52.99', image: hoddie3 },
    { id: 4, name: 'Hoddie Urban', price: '$48.99', image: hoddie4 },
    { id: 5, name: 'Hoddie Deluxe', price: '$65.99', image: hoddie1 },
    { id: 6, name: 'Hoddie Street', price: '$42.99', image: hoddie2 },
    { id: 7, name: 'Hoddie Elite', price: '$72.99', image: hoddie3 },
    { id: 8, name: 'Hoddie Pro', price: '$55.99', image: hoddie4 },
  ]

  const knpyPattern = ['K', 'N', 'P', 'Y']
  const backgroundColumns = Array.from({ length: 12 }, (_, colIndex) => 
    Array.from({ length: 12 }, (_, rowIndex) => ({
      letter: knpyPattern[rowIndex % 4],
      id: `col-${colIndex}-row-${rowIndex}`,
      colIndex,
      rowIndex
    }))
  )

  useEffect(() => {
    const container = containerRef.current
    const scrollContainer = scrollContainerRef.current
    const title = titleRef.current

    if (container && scrollContainer && title) {
      gsap.fromTo(title, 
        {
          opacity: 0,
          y: 50
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: container,
            start: "top 80%",
            end: "top 50%",
            toggleActions: "play none none reverse"
          }
        }
      )

      const totalWidth = window.innerWidth * (prendas.length - 1)

      gsap.to(scrollContainer, {
        x: -totalWidth,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: () => `+=${totalWidth * 2}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onRefresh: () => {
            const newTotalWidth = window.innerWidth * (prendas.length - 1)
            gsap.set(scrollContainer, { x: 0 })
          }
        }
      })

      const cards = scrollContainer.querySelectorAll('.prenda-card')
      cards.forEach((card, index) => {
        gsap.fromTo(card,
          {
            opacity: 0,
            scale: 0.9
          },
          {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: "power2.out",
            delay: index * 0.1,
            scrollTrigger: {
              trigger: container,
              start: "top 80%",
              end: "top 50%",
              toggleActions: "play none none reverse"
            }
          }
        )
      })
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <div ref={containerRef} className='w-full h-screen relative overflow-hidden'>
      <div className='absolute inset-0 z-0 flex justify-between px-8'>
        {backgroundColumns.map((column, colIndex) => (
          <div key={`column-${colIndex}`} className='flex flex-col justify-center items-center h-full opacity-10'>
            {column.map((item) => (
              <div
                key={item.id}
                className='text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white horizon-font mb-4 select-none pointer-events-none'
                style={{
                  transform: `rotate(${Math.random() * 20 - 10}deg)`,
                  marginBottom: `${Math.random() * 20 + 10}px`
                }}
              >
                {item.letter}
              </div>
            ))}
          </div>
        ))}
      </div>
      
      <div className='absolute inset-0 bg-black/5 z-10'></div>
      <div className='absolute top-20 left-1/2 transform -translate-x-1/2 z-20'>
        <h2 ref={titleRef} className='text-6xl font-bold text-white horizon-font text-center'>
          NUESTRAS PRENDAS
        </h2>
      </div>
      <div 
        ref={scrollContainerRef} 
        className='flex h-full'
        style={{ width: `${prendas.length * 100}vw` }}
      >
        {prendas.map((prenda, index) => (
          <div 
            key={prenda.id} 
            className='prenda-card flex-shrink-0 w-screen h-full flex items-center justify-center px-20'
          >
            <div className='max-w-2xl w-full bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20 hover:bg-white/15 transition-all duration-500 cursor-pointer group'>
              <div className='w-full h-96 mb-8 overflow-hidden rounded-2xl flex items-center justify-center'>
                <img 
                  src={prenda.image} 
                  alt={prenda.name}
                  className='w-96 h-auto object-cover group-hover:scale-105 transition-transform duration-700'
                />
              </div>
              <div className='text-center'>
                <h3 className='text-4xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors duration-300 horizon-font'>
                  {prenda.name}
                </h3>
                <p className='text-5xl font-bold text-lime-400 mb-6'>
                  {prenda.price}
                </p>
                <button className='bg-knpy-dark/20 hover:bg-knpy-primary-500/30 border border-white/20 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105'>
                  Ver Detalles
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20'>
        <div className='flex items-center gap-4 text-white/70'>
          <span className='text-lg font-medium'>Scroll para ver más prendas</span>
          <div className='flex gap-2'>
            {prendas.map((_, index) => (
              <div key={index} className='w-2 h-2 bg-white/30 rounded-full'></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default JerseysLanding