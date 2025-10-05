import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import prenda1 from '../assets/floatsImages/prendaMoving.webp';
import prenda2 from '../assets/floatsImages/prendaMoving2.webp';
import prenda3 from '../assets/floatsImages/prendaMoving3.webp';
import SpriteGraffiti from '../assets/Sprite Graffiti.webp';

const ClothesField = ({ className = "", clothesImages = [prenda1, prenda2, prenda3, SpriteGraffiti, SpriteGraffiti] }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const clothes = clothesImages.length > 0
      ? clothesImages
      : ['👕', '👔', '👗', '👚', '🧥', '👖', '🩳', '🩱', '👙'];

    const isUsingImages = clothesImages.length > 0;
    const clothesConfigs = [
      { count: 5, minSize: 70, maxSize: 100, blur: 0, opacity: 0.9 },
      { count: 8, minSize: 40, maxSize: 60, blur: 2, opacity: 0.7 },
      { count: 10, minSize: 25, maxSize: 40, blur: 4, opacity: 0.5 },
      { count: 6, minSize: 15, maxSize: 25, blur: 6, opacity: 0.3 }
    ];

    const allClothes = [];

    clothesConfigs.forEach((config, layerIndex) => {
      for (let i = 0; i < config.count; i++) {
        const randomItem = clothes[Math.floor(Math.random() * clothes.length)];
        const size = Math.random() * (config.maxSize - config.minSize) + config.minSize;

        let clothItem;

        if (isUsingImages) {
          clothItem = document.createElement('img');
          clothItem.src = randomItem;
          clothItem.className = 'absolute pointer-events-none select-none object-contain';
          clothItem.style.width = `${size}px`;
          clothItem.style.height = `${size}px`;
        } else {
          clothItem = document.createElement('div');
          clothItem.textContent = randomItem;
          clothItem.className = 'absolute pointer-events-none select-none';
          clothItem.style.fontSize = `${size}px`;
        }

        clothItem.style.left = `${Math.random() * 100}%`;
        clothItem.style.top = `${Math.random() * 100}%`;
        clothItem.style.filter = `blur(${config.blur}px)`;

        const rotation = Math.random() * 360;
        gsap.set(clothItem, {
          rotation: rotation,
          opacity: 0,
          scale: 0
        });

        container.appendChild(clothItem);
        allClothes.push({ element: clothItem, targetOpacity: config.opacity });
      }
    });

    gsap.to(allClothes.map(c => c.element), {
      opacity: (i) => allClothes[i].targetOpacity,
      scale: 1,
      duration: 1.5,
      stagger: 0.08,
      ease: "back.out(1.7)",
      delay: 0.3
    });

    return () => {
      allClothes.forEach(clothData => clothData.element.remove());
    };
  }, [clothesImages]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    />
  );
};

export default ClothesField;