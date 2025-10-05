import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import starImg from '../assets/starKnpy.webp'
gsap.registerPlugin(ScrollTrigger)

const ReseñasLanding = () => {
  const sectionRef = useRef(null)
  const backgroundTextRef = useRef(null)
  const cardsRefs = useRef([])
  const graffitiRefs = useRef([])

  const reseñas = [
    {
      id: 1,
      nombre: "María González",
      ubicacion: "Asunción",
      rating: 5,
      comentario: "Excelente calidad en las prendas. Mi hoddie llegó perfecta y el material es increíble. Definitivamente volvería a comprar.",
      fecha: "Hace 2 semanas",
      gradient: "knpy-primary"
    },
    {
      id: 2,
      nombre: "Carlos Mendoza",
      ubicacion: "Ciudad del Este",
      rating: 5,
      comentario: "El servicio al cliente es excepcional. Me ayudaron a elegir la talla correcta y el envío fue súper rápido.",
      fecha: "Hace 1 mes",
      gradient: "knpy-primary"
    },
    {
      id: 3,
      nombre: "Ana Rodríguez",
      ubicacion: "Encarnación",
      rating: 4,
      comentario: "Me encanta el diseño de los accesorios. Son únicos y de muy buena calidad. Los precios son justos para lo que ofrecen.",
      fecha: "Hace 3 semanas",
      gradient: "knpy-primary"
    },
    {
      id: 4,
      nombre: "Luis Fernández",
      ubicacion: "San Lorenzo",
      rating: 5,
      comentario: "Compré zapatillas y quedé impresionado con la comodidad. Perfectas para el día a día y muy estilosas.",
      fecha: "Hace 1 semana",
      gradient: "knpy-primary"
    },
    {
      id: 5,
      nombre: "Sofia Benítez",
      ubicacion: "Luque",
      rating: 5,
      comentario: "La atención personalizada es lo que más me gustó. Se nota que se preocupan por cada cliente. Recomendado 100%.",
      fecha: "Hace 4 días",
      gradient: "knpy-primary"
    },
    {
      id: 6,
      nombre: "Diego Paredes",
      ubicacion: "Fernando de la Mora",
      rating: 4,
      comentario: "Productos de calidad premium a precios accesibles. La entrega fue puntual y el packaging muy cuidado.",
      fecha: "Hace 2 días",
      gradient: "knpy-primary"
    }
  ]

  const graffitiLetters = ['K', 'N', 'P', 'Y', 'S', 'T', 'Y', 'L', 'E', 'M', 'O', 'D', 'A', 'U', 'R', 'B', 'A', 'N']

  useEffect(() => {
    const section = sectionRef.current
    const backgroundText = backgroundTextRef.current
    const cards = cardsRefs.current
    const graffitiElements = graffitiRefs.current

    if (section && backgroundText && cards.length > 0) {
      gsap.set(backgroundText, {
        opacity: 0,
        scale: 0.9
      })

      gsap.to(backgroundText, {
        opacity: 0.08,
        scale: 1,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "play none none reverse"
        }
      })

      cards.forEach((card, index) => {
        gsap.fromTo(card, 
          {
            y: 200,
            opacity: 0,
            scale: 0.6,
            rotation: gsap.utils.random(-20, 20)
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 1,
            ease: "back.out(1.4)",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              end: "top 20%",
              toggleActions: "play none none reverse",
            }
          }
        )

        if (card) {
          card.addEventListener('mouseenter', () => {
            gsap.to(card, {
              scale: 1,
              y: -1,
              rotation: gsap.utils.random(-3, 3),
              duration: 0.4,
              ease: "power2.out"
            })
          })

          card.addEventListener('mouseleave', () => {
            gsap.to(card, {
              scale: 1,
              y: 0,
              rotation: 0,
              duration: 0.4,
              ease: "power2.out"
            })
          })
        }
      })


      graffitiElements.forEach((letter, index) => {
        if (letter) {
          gsap.set(letter, {
            opacity: 0,
            scale: gsap.utils.random(0.5, 1.5),
            rotation: gsap.utils.random(-45, 45),
            x: gsap.utils.random(-50, 50),
            y: gsap.utils.random(-50, 50)
          })

          gsap.to(letter, {
            opacity: gsap.utils.random(0.15, 0.25),
            scale: gsap.utils.random(0.8, 1.2),
            rotation: gsap.utils.random(-30, 30),
            duration: gsap.utils.random(2, 4),
            ease: "power2.out",
            delay: gsap.utils.random(0, 2),
            scrollTrigger: {
              trigger: section,
              start: "top 90%",
              end: "bottom 10%",
              toggleActions: "play none none reverse"
            }
          })

          // Animación flotante continua
          gsap.to(letter, {
            y: "+=20",
            x: "+=10",
            rotation: "+=15",
            duration: gsap.utils.random(3, 6),
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
            delay: gsap.utils.random(0, 2)
          })
        }
      })
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`text-sm sm:text-base ${
          index < rating ? 'text-yellow-400' : 'text-indigo-500'
        }`}
      >
        ★
      </span>
    ))
  }

  return (
    <section 
      ref={sectionRef}
      className="relative w-full min-h-screen py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {graffitiLetters.map((letter, index) => (
        <div
          key={index}
          ref={el => graffitiRefs.current[index] = el}
          className="absolute pointer-events-none select-none z-5 text-indigo-500"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        >
          <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-indigo-500/30 transform">
            {letter}
          </span>
        </div>
      ))}

      <div 
        ref={backgroundTextRef}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
      >
        <h2 className="text-[8rem] sm:text-[12rem] md:text-[16rem] lg:text-[20rem] xl:text-[24rem] font-black text-lime-300 leading-none tracking-wider transform -rotate-12">
          RESEÑAS
        </h2>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 horizon-font">
            Lo que dicen nuestros clientes
          </h3>
          <p className="text-lg sm:text-xl text-lime-400 max-w-2xl mx-auto">
            Más de 1000 paraguayos confían en nosotros para sus compras de moda y accesorios
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16">
          {reseñas.map((reseña, index) => (
            <div
              key={reseña.id}
              ref={el => cardsRefs.current[index] = el}
              className="relative group cursor-pointer"
            >
              <div className="absolute -top-6 -left-6 z-50">
                <img 
                  src={starImg} 
                  alt="Estrella KNPY" 
                  className="w-20 h-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              
              <div className={`relative bg-gradient-to-br ${reseña.gradient} rounded-3xl overflow-hidden shadow-2xl border border-gray-700/50 aspect-[9/16] sm:aspect-[3/4]`}>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
                <div className="relative h-full flex flex-col justify-between p-6 sm:p-8 text-white">
                  <div className="flex justify-end">
                    <div className="bg-black/30 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                      {renderStars(reseña.rating)}
                    </div>
                  </div>
                  <div className="flex-1 flex items-center justify-center">
                    <p className="text-white text-center leading-relaxed text-sm sm:text-base font-medium">
                      "{reseña.comentario}"
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {reseña.nombre.charAt(0)}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-white text-base sm:text-lg">
                          {reseña.nombre}
                        </h4>
                        <p className="text-gray-300 text-xs sm:text-sm">
                          {reseña.ubicacion} • {reseña.fecha}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12 group-hover:animate-pulse"></div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10"></div>
            </div>
          ))}
        </div>

        <div className="mt-16 sm:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl sm:text-4xl font-bold text-lime-400">1000+</div>
            <div className="text-sm sm:text-base text-white">Clientes Felices</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl sm:text-4xl font-bold text-lime-400">4.8</div>
            <div className="text-sm sm:text-base text-white">Rating Promedio</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl sm:text-4xl font-bold text-lime-400">500+</div>
            <div className="text-sm sm:text-base text-white">Productos Vendidos</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl sm:text-4xl font-bold text-lime-400">98%</div>
            <div className="text-sm sm:text-base text-white">Satisfacción</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ReseñasLanding