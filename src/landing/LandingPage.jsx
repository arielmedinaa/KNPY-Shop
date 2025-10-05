import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import element1Img from './assets/hoddie1.webp';
import hoddie2Img from './assets/hoddie2.webp';
import hoddie3Img from './assets/hoddie3.webp';
import hoddie4Img from './assets/hoddie4.webp';
import starImg from './assets/starKnpy.webp';
//import Logo from './assets/knpy-logo.webp';
import CarrouselProducts from './components/carrousel/CarrouselProducts';
import AccesoriosLanding from './components/AccesoriosLanding';
import JerseysLanding from './components/JerseysLanding';
import ReseñasLanding from './components/ReseñasLanding';
import AnimatedBackground from './components/AnimatedBackground';
import KNPYLanding from './components/KNPYLanding';
import FooterLanding from './components/FooterLanding';
import ToDoPage from './components/ToDoPage';

gsap.registerPlugin(ScrollTrigger);

const LandingPage = () => {
  const element1Ref = useRef(null);
  const element2Ref = useRef(null);
  const element3Ref = useRef(null);
  const element4Ref = useRef(null);
  const element5Ref = useRef(null);
  const element6Ref = useRef(null);
  const star1Ref = useRef(null);
  const star2Ref = useRef(null);
  const star3Ref = useRef(null);
  const star4Ref = useRef(null);
  const titleRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const element1 = element1Ref.current;
    const element2 = element2Ref.current;
    const element3 = element3Ref.current;
    const element4 = element4Ref.current;
    const element5 = element5Ref.current;
    const element6 = element6Ref.current;
    const star1 = star1Ref.current;
    const star2 = star2Ref.current;
    const star3 = star3Ref.current;
    const star4 = star4Ref.current;
    const title = titleRef.current;
    const container = containerRef.current;

    if (element1 && element2 && element3 && element4 && element5 && element6 && star1 && star2 && star3 && star4 && title && container) {
      const tl = gsap.timeline();
      const isMobile = window.innerWidth < 640;
      const isTablet = window.innerWidth >= 640 && window.innerWidth < 1024;

      const scaleFactor = isMobile ? 0.6 : isTablet ? 0.8 : 1;
      const positionFactor = isMobile ? 0.5 : isTablet ? 0.7 : 1;
      gsap.set(element1, {
        x: gsap.utils.random(-400 * positionFactor, -150 * positionFactor),
        y: gsap.utils.random(-250 * positionFactor, -80 * positionFactor),
        rotation: gsap.utils.random(-45, 45),
        scale: 0.4 * scaleFactor,
        opacity: 1,
        transformOrigin: "center center"
      });

      gsap.set(element2, {
        x: gsap.utils.random(150 * positionFactor, 400 * positionFactor),
        y: gsap.utils.random(-250 * positionFactor, -80 * positionFactor),
        rotation: gsap.utils.random(-45, 45),
        scale: 0.4 * scaleFactor,
        opacity: 0.9,
        transformOrigin: "center center"
      });

      gsap.set(element3, {
        x: gsap.utils.random(-500 * positionFactor, -200 * positionFactor),
        y: gsap.utils.random(-150 * positionFactor, 150 * positionFactor),
        rotation: gsap.utils.random(-45, 45),
        scale: 0.3 * scaleFactor,
        opacity: 0.7,
        transformOrigin: "center center"
      });

      gsap.set(element4, {
        x: gsap.utils.random(200 * positionFactor, 500 * positionFactor),
        y: gsap.utils.random(-150 * positionFactor, 150 * positionFactor),
        rotation: gsap.utils.random(-45, 45),
        scale: 0.3 * scaleFactor,
        opacity: 0.8,
        transformOrigin: "center center"
      });

      gsap.set(element5, {
        x: gsap.utils.random(-350 * positionFactor, -80 * positionFactor),
        y: gsap.utils.random(80 * positionFactor, 300 * positionFactor),
        rotation: gsap.utils.random(-45, 45),
        scale: 0.4 * scaleFactor,
        opacity: 0.9,
        transformOrigin: "center center"
      });

      gsap.set(element6, {
        x: gsap.utils.random(80 * positionFactor, 350 * positionFactor),
        y: gsap.utils.random(80 * positionFactor, 300 * positionFactor),
        rotation: gsap.utils.random(-45, 45),
        scale: 0.4 * scaleFactor,
        opacity: 1,
        transformOrigin: "center center"
      });

      gsap.set(star1, {
        x: gsap.utils.random(-200 * positionFactor, -50 * positionFactor),
        y: gsap.utils.random(-300 * positionFactor, -150 * positionFactor),
        rotation: gsap.utils.random(0, 360),
        scale: 0.3 * scaleFactor,
        opacity: 1,
        transformOrigin: "center center"
      });

      gsap.set(star2, {
        x: gsap.utils.random(50 * positionFactor, 200 * positionFactor),
        y: gsap.utils.random(-300 * positionFactor, -150 * positionFactor),
        rotation: gsap.utils.random(0, 360),
        scale: 0.35 * scaleFactor,
        opacity: 0.9,
        transformOrigin: "center center"
      });

      gsap.set(star3, {
        x: gsap.utils.random(-300 * positionFactor, -100 * positionFactor),
        y: gsap.utils.random(150 * positionFactor, 300 * positionFactor),
        rotation: gsap.utils.random(0, 360),
        scale: 0.25 * scaleFactor,
        opacity: 0.8,
        transformOrigin: "center center"
      });

      gsap.set(star4, {
        x: gsap.utils.random(100 * positionFactor, 300 * positionFactor),
        y: gsap.utils.random(150 * positionFactor, 300 * positionFactor),
        rotation: gsap.utils.random(0, 360),
        scale: 0.3 * scaleFactor,
        opacity: 1,
        transformOrigin: "center center"
      });

      gsap.set(title, {
        opacity: 0,
        y: 30,
        scale: 0.9
      });

      tl.to(element1, {
        duration: 1.2,
        x: -580 * positionFactor,
        y: -200 * positionFactor,
        rotation: -12,
        scale: 1.4 * scaleFactor,
        opacity: 1,
        ease: "power3.out"
      }, 0)

        .to(element2, {
          duration: 1.2,
          x: 580 * positionFactor,
          y: -200 * positionFactor,
          rotation: 12,
          scale: 1.4 * scaleFactor,
          opacity: 1,
          ease: "power3.out"
        }, 0.05)

        .to(element3, {
          duration: 1.2,
          x: -700 * positionFactor,
          y: 20 * positionFactor,
          rotation: -18,
          scale: 1.0 * scaleFactor,
          opacity: 0.7,
          ease: "power3.out"
        }, 0.1)

        .to(element4, {
          duration: 1.2,
          x: 680 * positionFactor,
          y: 20 * positionFactor,
          rotation: 18,
          scale: 1.0 * scaleFactor,
          opacity: 0.8,
          ease: "power3.out"
        }, 0.15)

        .to(element5, {
          duration: 1.2,
          x: -480 * positionFactor,
          y: 220 * positionFactor,
          rotation: -8,
          scale: 1.1 * scaleFactor,
          opacity: 0.9,
          ease: "power3.out"
        }, 0.2)

        .to(element6, {
          duration: 1.2,
          x: 480 * positionFactor,
          y: 220 * positionFactor,
          rotation: 8,
          scale: 1.1 * scaleFactor,
          opacity: 1,
          ease: "power3.out"
        }, 0.25)

        .to(star1, {
          duration: 1.5,
          x: -350 * positionFactor,
          y: -300 * positionFactor,
          rotation: 180,
          scale: 1.0 * scaleFactor,
          opacity: 1,
          ease: "power2.out"
        }, 0.1)

        .to(star2, {
          duration: 1.5,
          x: 380 * positionFactor,
          y: -280 * positionFactor,
          rotation: -180,
          scale: 1.1 * scaleFactor,
          opacity: 0.9,
          ease: "power2.out"
        }, 0.15)

        .to(star3, {
          duration: 1.5,
          x: -480 * positionFactor,
          y: 320 * positionFactor,
          rotation: 90,
          scale: 0.9 * scaleFactor,
          opacity: 0.8,
          ease: "power2.out"
        }, 0.2)

        .to(star4, {
          duration: 1.5,
          x: 500 * positionFactor,
          y: 340 * positionFactor,
          rotation: -90,
          scale: 1.0 * scaleFactor,
          opacity: 1,
          ease: "power2.out"
        }, 0.25)

        .to(title, {
          duration: 0.8,
          opacity: 1,
          y: 0,
          scale: 1,
          ease: "power3.out"
        }, 0.4);

      gsap.to([star1, star2, star3, star4], {
        duration: 4,
        y: "+=15",
        rotation: "+=8",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.3,
        delay: 2
      });

      gsap.to([element1, element2, element3, element4, element5, element6], {
        duration: 5,
        rotation: "+=3",
        y: "+=8",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.4,
        delay: 2.2
      });

      gsap.to([element1, element2, element3, element4, element5, element6], {
        duration: 6,
        scale: "+=0.05",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.5,
        delay: 2.5
      });

    }

    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <AnimatedBackground className='w-full h-full relative overflow-visible mb-8 sm:mb-12 lg:mb-16'>
      <div ref={containerRef} className='w-full h-full relative'>
        <div className='w-full h-[100vh] min-h-[600px] sm:min-h-[700px] lg:min-h-[800px]'>
          <div className="relative flex flex-col gap-2 sm:gap-4 items-center justify-center h-full text-white px-4 sm:px-6 lg:px-8">
            {/* <div className='w-full flex items-center justify-center'>
              <img src={Logo} alt="" className='w-auto h-72 object-contain'/>
            </div> */}
            <h1 ref={titleRef} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold horizon-font text-center leading-tight">
              ACCESORIOS | PRENDAS | CALZADOS
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-center">
              MODA LIBRE, PARA GENTE LIBRE
            </p>
            {/* 
            <div className='w-full h-5 bg-white'></div> */}
          </div>
          <img
            ref={element1Ref}
            src={element1Img}
            alt="Hoddie 1"
            className="absolute top-1/2 left-1/2 w-32 sm:w-40 md:w-48 lg:w-56 xl:w-64 h-auto object-contain z-20 pointer-events-none transform -translate-x-1/2 -translate-y-1/2"
            style={{ transformOrigin: 'center center' }}
          />
          <img
            ref={element2Ref}
            src={hoddie2Img}
            alt="Hoddie 2"
            className="absolute top-1/2 left-1/2 w-32 sm:w-40 md:w-48 lg:w-56 xl:w-64 h-auto object-contain z-20 pointer-events-none transform -translate-x-1/2 -translate-y-1/2"
            style={{ transformOrigin: 'center center' }}
          />
          <img
            ref={element3Ref}
            src={hoddie3Img}
            alt="Hoddie 3"
            className="absolute top-1/2 left-1/2 w-28 sm:w-32 md:w-40 lg:w-48 xl:w-56 h-auto object-contain z-15 pointer-events-none transform -translate-x-1/2 -translate-y-1/2"
            style={{ transformOrigin: 'center center' }}
          />
          <img
            ref={element4Ref}
            src={hoddie4Img}
            alt="Hoddie 4"
            className="absolute top-1/2 left-1/2 w-28 sm:w-32 md:w-40 lg:w-48 xl:w-56 h-auto object-contain z-15 pointer-events-none transform -translate-x-1/2 -translate-y-1/2"
            style={{ transformOrigin: 'center center' }}
          />
          <img
            ref={element5Ref}
            src={element1Img}
            alt="Hoddie 5"
            className="absolute top-1/2 left-1/2 w-30 sm:w-36 md:w-44 lg:w-52 xl:w-60 h-auto object-contain z-10 pointer-events-none transform -translate-x-1/2 -translate-y-1/2"
            style={{ transformOrigin: 'center center' }}
          />
          <img
            ref={element6Ref}
            src={hoddie2Img}
            alt="Hoddie 6"
            className="absolute top-1/2 left-1/2 w-30 sm:w-36 md:w-44 lg:w-52 xl:w-60 h-auto object-contain z-18 pointer-events-none transform -translate-x-1/2 -translate-y-1/2"
            style={{ transformOrigin: 'center center' }}
          />

          <img
            ref={star1Ref}
            src={starImg}
            alt="Estrella 1"
            className="absolute top-1/2 left-1/2 w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 h-auto object-contain z-15 pointer-events-none transform -translate-x-1/2 -translate-y-1/2"
            style={{ transformOrigin: 'center center' }}
          />
          <img
            ref={star2Ref}
            src={starImg}
            alt="Estrella 2"
            className="absolute top-1/2 left-1/2 w-18 sm:w-22 md:w-28 lg:w-32 xl:w-36 h-auto object-contain z-15 pointer-events-none transform -translate-x-1/2 -translate-y-1/2"
            style={{ transformOrigin: 'center center' }}
          />
          <img
            ref={star3Ref}
            src={starImg}
            alt="Estrella 3"
            className="absolute top-1/2 left-1/2 w-14 sm:w-18 md:w-20 lg:w-24 xl:w-28 h-auto object-contain z-15 pointer-events-none transform -translate-x-1/2 -translate-y-1/2"
            style={{ transformOrigin: 'center center' }}
          />
          <img
            ref={star4Ref}
            src={starImg}
            alt="Estrella 4"
            className="absolute top-1/2 left-1/2 w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 h-auto object-contain z-15 pointer-events-none transform -translate-x-1/2 -translate-y-1/2"
            style={{ transformOrigin: 'center center' }}
          />


          <div className="w-full">
            <CarrouselProducts />
          </div>

          <div className="w-full">
            <JerseysLanding />
          </div>

          {/* <div>
            <KNPYLanding />
          </div> */}

          <div className="w-full">
            <AccesoriosLanding />
          </div>

          <div className='w-full'>
            <ToDoPage></ToDoPage>
          </div>

          <div className="w-full">
            <ReseñasLanding />
          </div>

          {/* <div className='w-full'>
            <FooterLanding />
          </div> */}
        </div>
      </div>
    </AnimatedBackground>
  )
}

export default LandingPage