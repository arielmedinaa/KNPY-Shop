import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Importar imágenes
const images = import.meta.glob('../assets/*.webp', { eager: true })
const getImageByName = (imageName) => {
  const imagePath = `../assets/${imageName}.webp`
  return images[imagePath]?.default || images[imagePath]
}

gsap.registerPlugin(ScrollTrigger)

const FooterLanding = () => {
  const footerRef = useRef(null)
  const maskRef = useRef(null)
  const contentRef = useRef(null)
  const logoRef = useRef(null)

  useEffect(() => {
    const footer = footerRef.current
    const mask = maskRef.current
    const content = contentRef.current
    const logo = logoRef.current

    if (!footer || !mask || !content || !logo) return


    gsap.set(mask, {
      scale: 1,
      zIndex: 5,
      clipPath: 'inset(0% 0% 0% 0%)',
    })

    gsap.set(logo, {
      scale: 3,
      zIndex: 1000,
      opacity: 0,
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '200px',
      height: 'auto'
    })

    gsap.set(content, {
      y: 0,
      opacity: 0,
      zIndex: 10
    })

    gsap.timeline({
      scrollTrigger: {
        trigger: footer,
        start: 'top 30%', // Comienza antes de que el footer entre en vista
        end: 'top 10%',    // Termina cuando está bien arriba
        scrub: 2.5,        // Más suave para el logo gigante
        onUpdate: (self) => {
          const progress = self.progress
          const logoScale = progress < 0.2 ? 6 : 6 - ((progress - 0.2) * 5.2) // Aparece moderado (6x), luego se reduce a 0.8
          const logoOpacity = progress < 0.1 ? progress * 10 : (progress < 0.9 ? 1 : 1 - ((progress - 0.9) * 5)) // Fade in inicial, luego se mantiene visible
          
          gsap.set(logo, {
            scale: logoScale,
            opacity: logoOpacity,
            zIndex: progress > 0.8 ? 25 : 1000, // Mantener zIndex alto hasta el final
            position: progress > 0.7 ? 'absolute' : 'fixed',
            top: progress > 0.7 ? '150px' : '50%', // Se posiciona en la parte superior del footer
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '200px',
            height: 'auto'
          })
          
          gsap.set(mask, {
            scale: 1 + (progress * 0.3), // Se hace más grande (efecto de alejarse)
            opacity: 1 - (progress * 0.6), // Se desvanece gradualmente
            filter: `blur(${progress * 2}px)`, // Se difumina al alejarse
          })
          
          gsap.set(content, {
            opacity: progress > 0.5 ? (progress - 0.5) * 2 : 0,
            y: 120 - (progress * 120), // Sube desde más abajo
            zIndex: 15,
            paddingTop: progress > 0.7 ? '250px' : '0px' // Más espacio para el logo
          })
        }
      }
    })

    // Animación adicional para elementos individuales del contenido
    gsap.fromTo('.footer-element:not(.logo-element)', 
      { 
        y: 80, 
        opacity: 0 
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: footer,
          start: 'top 40%',
          end: 'top 15%',
          scrub: 2
        }
      }
    )

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <footer 
      ref={footerRef}
      className="relative min-h-screen overflow-visible"
    >
      <div 
        ref={maskRef}
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0"></div>
      </div>

      {/* Logo gigante que se reduce */}
      <img 
        ref={logoRef}
        src={getImageByName('knpy-logo')} 
        alt="KNPY Logo" 
        className="logo-element"
        style={{ zIndex: 1000 }} // Asegurar que esté por encima de todo
      />

      <div 
        ref={contentRef}
        className="relative z-10 flex flex-col justify-center items-center min-h-screen px-8 text-center"
      >
        <div className="footer-element mb-8">
          <h2 className="text-4xl md:text-6xl font-bold text-white horizon-font">
            KNPY SHOP
          </h2>
        </div>

        <p className="footer-element text-xl md:text-2xl text-white/80 mb-12 max-w-2xl leading-relaxed">
          Descubre la moda urbana que define tu estilo. 
          Calidad premium, diseños únicos y la actitud que necesitas.
        </p>

        <div className="footer-element grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 w-full max-w-4xl">
          <div>
            <h3 className="text-xl font-bold text-knpy-primary-500 mb-6">Navegación</h3>
            <ul className="space-y-3">
              <li><a href="#inicio" className="text-white/70 hover:text-knpy-primary-500 transition-colors duration-300">Inicio</a></li>
              <li><a href="#productos" className="text-white/70 hover:text-knpy-primary-500 transition-colors duration-300">Productos</a></li>
              <li><a href="#sobre-nosotros" className="text-white/70 hover:text-knpy-primary-500 transition-colors duration-300">Sobre Nosotros</a></li>
              <li><a href="#contacto" className="text-white/70 hover:text-knpy-primary-500 transition-colors duration-300">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-knpy-primary-500 mb-6">Categorías</h3>
            <ul className="space-y-3">
              <li><a href="#shirts" className="text-white/70 hover:text-knpy-primary-500 transition-colors duration-300">Camisetas</a></li>
              <li><a href="#jackets" className="text-white/70 hover:text-knpy-primary-500 transition-colors duration-300">Chaquetas</a></li>
              <li><a href="#baggys" className="text-white/70 hover:text-knpy-primary-500 transition-colors duration-300">Pantalones</a></li>
              <li><a href="#quepis" className="text-white/70 hover:text-knpy-primary-500 transition-colors duration-300">Gorras</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-knpy-primary-500 mb-6">Síguenos</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="w-12 h-12 bg-knpy-primary-500/20 hover:bg-knpy-primary-500 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                <span className="text-white font-bold">IG</span>
              </a>
              <a href="#" className="w-12 h-12 bg-knpy-primary-500/20 hover:bg-knpy-primary-500 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                <span className="text-white font-bold">FB</span>
              </a>
              <a href="#" className="w-12 h-12 bg-knpy-primary-500/20 hover:bg-knpy-primary-500 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                <span className="text-white font-bold">TW</span>
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="footer-element w-full max-w-md mb-12">
          <h3 className="text-xl font-bold text-white mb-4">Newsletter</h3>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Tu email..." 
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-l-full text-white placeholder-white/50 focus:outline-none focus:border-knpy-primary-500"
            />
            <button className="px-6 py-3 bg-knpy-primary-500 hover:bg-knpy-primary-600 rounded-r-full text-white font-semibold transition-colors duration-300">
              Suscribir
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-element border-t border-white/20 pt-8 w-full max-w-4xl">
          <p className="text-white/50 text-sm">
            © 2024 KNPY Shop. Todos los derechos reservados. | Diseñado con ❤️ para la cultura urbana.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default FooterLanding