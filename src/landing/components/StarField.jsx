import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import starKnpy from '../assets/starKnpy.webp';

gsap.registerPlugin(ScrollTrigger);

const StarField = ({ className = "" }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const starConfigs = [
      { count: 4, minSize: 70, maxSize: 80, opacity: 0.8 },
      { count: 8, minSize: 25, maxSize: 40, opacity: 0.6 },
      { count: 14, minSize: 15, maxSize: 25, opacity: 0.4 }
    ];

    const allStars = [];

    starConfigs.forEach((config, layerIndex) => {
      for (let i = 0; i < config.count; i++) {
        const star = document.createElement('img');
        star.src = starKnpy;
        star.className = 'absolute pointer-events-none select-none';
        star.alt = 'star';
        const size = Math.random() * (config.maxSize - config.minSize) + config.minSize;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.opacity = config.opacity;
        
        container.appendChild(star);
        allStars.push({ element: star, layer: layerIndex });
      }
    });

    allStars.forEach((starData, index) => {
      const { element, layer } = starData;
      gsap.to(element, {
        x: `random(-15, 15)`,
        y: `random(-15, 15)`,
        duration: `random(8, 15)`,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: index * 0.2
      });

      gsap.to(element, {
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
          onUpdate: (self) => {
            const progress = self.progress;
            const blurAmount = (layer + 1) * progress * 3;
            gsap.set(element, {
              filter: `blur(${blurAmount}px)`
            });
          }
        }
      });
    });

    gsap.fromTo(allStars.map(s => s.element), 
      {
        opacity: 0,
        scale: 0
      },
      {
        opacity: (i) => starConfigs[allStars[i].layer].opacity,
        scale: 1,
        duration: 1.5,
        stagger: 0.1,
        ease: "power2.out",
        delay: 0.3
      }
    );

    return () => {
      allStars.forEach(starData => starData.element.remove());
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    />
  );
};

export default StarField;