import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ClothesBackground from './background/ClothesBackground';
import jumpingPersonImg from '../assets/jumping-person.png';
import SpriteGraffiti from '../assets/Sprite Graffiti.webp';
import SitGuy from '../assets/SitGuy.webp';
import hoddie1 from '../assets/hoddie4.webp';
import hoddie2 from '../assets/hoddie2.webp';
import hoddie3 from '../assets/hoddie3.webp';

gsap.registerPlugin(ScrollTrigger);

const ToDoPage = () => {
  const containerRef = useRef(null);
  const knpyGraffitiRef = useRef(null);
  const risenTitleRef = useRef(null);
  const sitGuyRef = useRef(null);
  const essentialsRef = useRef(null);
  const nuevaModaRef = useRef(null);
  const leftTextRef = useRef(null);
  const rightTextRef = useRef(null);
  const person1Ref = useRef(null);
  const person2Ref = useRef(null);
  const person3Ref = useRef(null);
  const person4Ref = useRef(null);
  const hoddiesRef = useRef(null);

  useEffect(() => {
    const elements = [
      knpyGraffitiRef.current,
      risenTitleRef.current,
      sitGuyRef.current,
      essentialsRef.current,
      nuevaModaRef.current,
      leftTextRef.current,
      rightTextRef.current,
      person1Ref.current,
      person2Ref.current,
      person3Ref.current,
      person4Ref.current,
      hoddiesRef.current
    ];

    if (elements.every(el => el)) {
      const tl = gsap.timeline();
      const isMobile = window.innerWidth < 640;
      const isTablet = window.innerWidth >= 640 && window.innerWidth < 1024;
      const scaleFactor = isMobile ? 0.6 : isTablet ? 0.8 : 1;

      // Set initial states
      gsap.set(elements, { opacity: 0, scale: 0.8 });

      // Set initial positions for jumping people
      gsap.set(person1Ref.current, { x: -200, y: -150, rotation: -15 });
      gsap.set(person2Ref.current, { x: 300, y: -100, rotation: 25 });
      gsap.set(person3Ref.current, { x: 400, y: 200, rotation: -20 });
      gsap.set(person4Ref.current, { x: -300, y: 250, rotation: 15 });

      // Animation sequence
      tl.to(knpyGraffitiRef.current, {
        duration: 1.2,
        opacity: 0.7,
        scale: 1,
        ease: "power3.out"
      }, 0)

        .to(essentialsRef.current, {
          duration: 1,
          opacity: 1,
          scale: 1,
          ease: "power3.out"
        }, 0.3)

        .to(risenTitleRef.current, {
          duration: 1.5,
          opacity: 1,
          scale: 1,
          ease: "power3.out"
        }, 0.5)

        .to(sitGuyRef.current, {
          duration: 1.2,
          opacity: 1,
          scale: 1,
          ease: "power3.out"
        }, 0.8)

        .to(nuevaModaRef.current, {
          duration: 1,
          opacity: 1,
          scale: 1,
          ease: "power3.out"
        }, 1)

        .to([leftTextRef.current, rightTextRef.current], {
          duration: 1,
          opacity: 1,
          scale: 1,
          ease: "power3.out",
          stagger: 0.2
        }, 1.2)

        .to([person1Ref.current, person2Ref.current, person3Ref.current, person4Ref.current], {
          duration: 1.5,
          opacity: 1,
          scale: scaleFactor,
          ease: "power3.out",
          stagger: 0.1
        }, 1.5)

        .to(hoddiesRef.current, {
          duration: 1,
          opacity: 1,
          scale: 1,
          ease: "power3.out"
        }, 2);

      // Floating animations for people
      gsap.to([person1Ref.current, person2Ref.current, person3Ref.current, person4Ref.current], {
        duration: 4,
        y: "+=15",
        rotation: "+=3",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.3,
        delay: 3
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
    <ClothesBackground className='w-full h-full relative overflow-hidden'>
      <div ref={containerRef} className='w-full h-[100vh] min-h-[800px] relative'>

        <h1
          ref={knpyGraffitiRef}
          className="absolute top-32 sm:top-40 md:top-52 left-4 sm:left-10 md:left-20 w-32 sm:w-48 md:w-64 lg:w-96 h-auto object-contain z-10 sprite-graffiti-font text-[150px] sm:text-[200px] md:text-[250px] lg:text-[300px]"
          style={{ opacity: 0.6, transform: 'rotate(-50deg)' }}
        >
          KNPY
        </h1>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-20 w-full px-4">
          <div ref={essentialsRef} className="mb-2 sm:mb-4 relative left-8 sm:left-16 md:left-24">
            <p className="text-xl sm:text-2xl md:text-4xl lg:text-7xl text-[#687e6d] mr-dafoe-regular font-light tracking-wider">
              essentials
            </p>
          </div>

          <div ref={risenTitleRef} className="relative">
            <p className="text-6xl sm:text-8xl md:text-9xl lg:text-[12rem] font-bold text-white z3non-font tracking-wider">
              RISEN
            </p>
            <p className="text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] font-bold sprite-graffiti-font tracking-wider -mt-12 sm:-mt-20 md:-mt-32 lg:-mt-48">
              RISEN
            </p>
          </div>

          <div ref={nuevaModaRef} className="mt-2 sm:mt-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-lime-400 horizon-font tracking-wide">
              UNA NUEVA MODA
            </h2>
          </div>

        </div>

        <div ref={leftTextRef} className="absolute top-[65%] sm:top-2/3 left-4 sm:left-6 md:left-8 max-w-[250px] sm:max-w-xs z-15">
          <h3 className="text-base sm:text-lg md:text-xl font-bold text-lime-400 mb-2 horizon-font">
            BAGGYS, HOODIES,<br />
            PURSES & ACCESORIES
          </h3>
          <p className="text-xs sm:text-sm text-white/80 leading-relaxed hidden sm:block">
            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem
            ipsum has been the industry's standard dummy text ever since the 1500s, when an
            unknown printer took a galley.
          </p>
        </div>

        <div ref={rightTextRef} className="absolute top-[65%] sm:top-2/3 right-4 sm:right-16 md:right-32 max-w-[250px] sm:max-w-xs text-right z-15">
          <h3 className="text-base sm:text-lg md:text-xl font-bold text-lime-400 mb-2 sprite-graffiti-font">
            MODA PARA<br />
            PARAGUAYOS
          </h3>
          <p className="text-xs sm:text-sm text-white/80 leading-relaxed hidden sm:block">
            Lorem ipsum is simply dummy text of the printing and typesetting
            industry. Lorem ipsum has been the industry's standard dummy
            text ever since the 1500s, when an unknown printer took a
            galley.
          </p>
        </div>

        <img
          ref={person1Ref}
          src={jumpingPersonImg}
          alt="Jumping Person 1"
          className="absolute top-16 sm:top-20 md:top-24 left-0 sm:left-auto w-16 sm:w-20 md:w-28 lg:w-80 h-auto object-contain z-[999]"
          style={{ transform: 'rotate(20deg)' }}
        />
        <img
          ref={person2Ref}
          src={jumpingPersonImg}
          alt="Jumping Person 2"
          className="absolute top-1/4 right-[10%] sm:right-1/4 w-16 sm:w-20 md:w-24 lg:w-32 h-auto object-contain z-25"
        />
        <img
          ref={person3Ref}
          src={jumpingPersonImg}
          alt="Jumping Person 3"
          className="absolute bottom-1 right-[20px] sm:right-[60px] md:right-[100px] w-16 sm:w-20 md:w-32 lg:w-48 h-auto object-contain z-25"
          style={{ transform: 'rotate(40deg)' }}
        />


        <div ref={hoddiesRef} className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/4 sm:left-32 md:left-48 transform -translate-x-1/2 flex -space-x-2 z-15">
          <img
            src={hoddie1}
            alt="Hoodie 1"
            className="w-12 sm:w-16 md:w-20 lg:w-28 h-auto object-contain"
            style={{transform: 'rotate(10deg)'}}
          />
          <img
            src={hoddie2}
            alt="Hoodie 2"
            className="w-12 sm:w-16 md:w-20 lg:w-28 h-auto object-contain"
            style={{transform: 'rotate(10deg)'}}
          />
          <img
            src={hoddie3}
            alt="Hoodie 3"
            className="w-12 sm:w-16 md:w-20 lg:w-28 h-auto object-contain"
            style={{transform: 'rotate(10deg)'}}
          />
        </div>

      </div>
    </ClothesBackground>
  );
};

export default ToDoPage;