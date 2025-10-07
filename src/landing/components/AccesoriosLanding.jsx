import React, { useRef, useState, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import AnimatedBackground from './AnimatedBackground'
import ImageWithScatterEffect from './scatter/ImageWithScatterEffect'
const images = import.meta.glob('../assets/*.webp', { eager: true })
const getImageByName = (imageName) => {
  const imagePath = `../assets/${imageName}.webp`
  return images[imagePath]?.default || images[imagePath]
}

gsap.registerPlugin(ScrollTrigger)

const AccesoriosLanding = () => {
  const containerRef = useRef(null)
  const titleRef = useRef(null)
  const [activeCategory, setActiveCategory] = useState('todos')
  const [currentPage, setCurrentPage] = useState(0)
  const itemsPerPage = 6
  const accesorios = [
    {
      id: 1,
      name: 'Shirt Urban Classic',
      price: '$29.99',
      category: 'shirts',
      image: getImageByName('hoddie1'),
      description: 'Camisa urbana de algodón premium'
    },
    {
      id: 2,
      name: 'Shirt Oversized',
      price: '$34.99',
      category: 'shirts',
      image: getImageByName('hoddie2'),
      description: 'Camisa oversized estilo streetwear'
    },
    {
      id: 3,
      name: 'Shirt Vintage',
      price: '$39.99',
      category: 'shirts',
      image: getImageByName('hoddie3'),
      description: 'Camisa vintage con diseño retro'
    },
    {
      id: 19,
      name: 'Shirt Graphic',
      price: '$32.99',
      category: 'shirts',
      image: getImageByName('hoddie4'),
      description: 'Camisa con diseño gráfico moderno'
    },
    {
      id: 20,
      name: 'Shirt Basic',
      price: '$24.99',
      category: 'shirts',
      image: getImageByName('hoddie5'),
      description: 'Camisa básica de algodón suave'
    },
    {
      id: 21,
      name: 'Shirt Polo',
      price: '$36.99',
      category: 'shirts',
      image: getImageByName('hoddie6'),
      description: 'Polo clásico de corte moderno'
    },

    {
      id: 4,
      name: 'Jacket Bomber',
      price: '$89.99',
      category: 'jackets',
      image: getImageByName('jackets1'),
      description: 'Chaqueta bomber clásica urbana'
    },
    {
      id: 5,
      name: 'Jacket Denim',
      price: '$75.99',
      category: 'jackets',
      image: getImageByName('jackets2'),
      description: 'Chaqueta de mezclilla vintage'
    },
    {
      id: 6,
      name: 'Jacket Windbreaker',
      price: '$65.99',
      category: 'jackets',
      image: getImageByName('jackets3'),
      description: 'Cortavientos deportivo resistente'
    },
    {
      id: 22,
      name: 'Jacket Leather',
      price: '$149.99',
      category: 'jackets',
      image: getImageByName('jackets4'),
      description: 'Chaqueta de cuero genuino estilo biker'
    },
    {
      id: 23,
      name: 'Jacket Hoodie',
      price: '$59.99',
      category: 'jackets',
      image: getImageByName('hoddie7'),
      description: 'Sudadera con capucha urbana'
    },
    {
      id: 24,
      name: 'Jacket Track',
      price: '$69.99',
      category: 'jackets',
      image: getImageByName('jackets1'),
      description: 'Chaqueta deportiva con rayas laterales'
    },

    {
      id: 7,
      name: 'Baggy Cargo',
      price: '$55.99',
      category: 'baggys',
      image: getImageByName('baggy1'),
      description: 'Pantalón baggy cargo'
    },
    {
      id: 8,
      name: 'Baggy Denim',
      price: '$49.99',
      category: 'baggys',
      image: getImageByName('baggy2'),
      description: 'Jeans baggy estilo 90s'
    },
    {
      id: 9,
      name: 'Baggy Sweat',
      price: '$42.99',
      category: 'baggys',
      image: getImageByName('baggy3'),
      description: 'Pantalón baggy de algodón suave'
    },
    {
      id: 25,
      name: 'Baggy Chino',
      price: '$52.99',
      category: 'baggys',
      image: getImageByName('baggy1'),
      description: 'Pantalón baggy chino de corte relajado'
    },
    {
      id: 26,
      name: 'Baggy Corduroy',
      price: '$58.99',
      category: 'baggys',
      image: getImageByName('baggy5'),
      description: 'Pantalón baggy de pana vintage'
    },
    {
      id: 27,
      name: 'Baggy Jogger',
      price: '$45.99',
      category: 'baggys',
      image: getImageByName('baggy1'),
      description: 'Jogger baggy deportivo cómodo'
    },

    // Quepis
    {
      id: 10,
      name: 'Quepi Snapback',
      price: '$24.99',
      category: 'quepis',
      image: getImageByName('cap1'),
      description: 'Gorra snapback con logo bordado'
    },
    {
      id: 11,
      name: 'Quepi Bucket',
      price: '$19.99',
      category: 'quepis',
      image: getImageByName('cap2'),
      description: 'Sombrero bucket hat streetwear'
    },
    {
      id: 12,
      name: 'Quepi Beanie',
      price: '$16.99',
      category: 'quepis',
      image: getImageByName('cap3'),
      description: 'Gorro beanie de lana suave'
    },
    {
      id: 28,
      name: 'Quepi Dad Hat',
      price: '$22.99',
      category: 'quepis',
      image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&h=400&fit=crop&crop=center',
      description: 'Gorra dad hat de algodón lavado'
    },
    {
      id: 29,
      name: 'Quepi Trucker',
      price: '$26.99',
      category: 'quepis',
      image: 'https://images.unsplash.com/photo-1521369909029-2afed882baee?w=400&h=400&fit=crop&crop=center',
      description: 'Gorra trucker con malla trasera'
    },
    {
      id: 30,
      name: 'Quepi Fisherman',
      price: '$21.99',
      category: 'quepis',
      image: 'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=400&h=400&fit=crop&crop=center',
      description: 'Gorro pescador de algodón resistente'
    },

    // Shoes
    {
      id: 13,
      name: 'Shoes Sneakers',
      price: '$129.99',
      category: 'shoes',
      image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop&crop=center',
      description: 'Zapatillas urbanas de alta calidad'
    },
    {
      id: 14,
      name: 'Shoes Canvas',
      price: '$79.99',
      category: 'shoes',
      image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400&h=400&fit=crop&crop=center',
      description: 'Zapatillas de lona clásicas'
    },
    {
      id: 15,
      name: 'Shoes Boots',
      price: '$159.99',
      category: 'shoes',
      image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400&h=400&fit=crop&crop=center',
      description: 'Botas urbanas resistentes'
    },
    {
      id: 16,
      name: 'Shoes Sneakers',
      price: '$129.99',
      category: 'shoes',
      image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop&crop=center',
      description: 'Zapatillas urbanas de alta calidad'
    },
    {
      id: 17,
      name: 'Shoes Canvas',
      price: '$79.99',
      category: 'shoes',
      image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400&h=400&fit=crop&crop=center',
      description: 'Zapatillas de lona clásicas'
    },
    {
      id: 18,
      name: 'Shoes Boots',
      price: '$159.99',
      category: 'shoes',
      image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400&h=400&fit=crop&crop=center',
      description: 'Botas urbanas resistentes'
    }
  ]

  const filteredProducts = activeCategory === 'todos'
    ? accesorios
    : accesorios.filter(item => item.category === activeCategory)

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage)
  const startIndex = currentPage * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentProducts = filteredProducts.slice(startIndex, endIndex)

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handleCategoryChange = (category) => {
    setActiveCategory(category)
    setCurrentPage(0)
  }

  return (
    <AnimatedBackground>

      <div ref={containerRef} className='w-full min-h-screen relative overflow-hidden py-16 px-4 sm:px-6 lg:px-8'>
        <div className='relative z-20 max-w-7xl mx-auto'>
          <div className='text-center mb-12'>
            <h1 ref={titleRef} className='text-5xl md:text-6xl lg:text-7xl font-bold text-white horizon-font mb-4'>
              ACCESORIOS
            </h1>
            <p className='text-xl text-white/80 max-w-2xl mx-auto'>
              Descubre nuestra colección urbana: shirts, jackets, baggys, quepis y shoes para tu estilo único
            </p>
          </div>
          <div className='flex justify-center mb-12'>
            <div className='p-2'>
              <div className='flex flex-wrap gap-2 justify-center'>
                {[
                  { key: 'todos', label: 'Todos' },
                  { key: 'shirts', label: 'Shirts' },
                  { key: 'jackets', label: 'Jackets' },
                  { key: 'baggys', label: 'Baggys' },
                  // { key: 'quepis', label: 'Quepis' },
                  // { key: 'shoes', label: 'Shoes' }
                ].map((category) => (
                  <button
                    key={category.key}
                    onClick={() => handleCategoryChange(category.key)}
                    className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${activeCategory === category.key
                        ? 'bg-knpy-primary-500 text-white shadow-lg'
                        : 'text-white/70 hover:text-white hover:bg-white/10'
                      }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className='relative'>
            {totalPages > 1 && (
              <>
                <button
                  onClick={prevPage}
                  disabled={currentPage === 0}
                  className={`absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 rounded-full border-2 transition-all duration-300 ${
                    currentPage === 0
                      ? 'bg-white/10 border-white/20 text-white/30 cursor-not-allowed'
                      : 'bg-white/20 border-white/40 text-white hover:bg-white/30 hover:border-white/60'
                  }`}
                >
                  <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextPage}
                  disabled={currentPage === totalPages - 1}
                  className={`absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 rounded-full border-2 transition-all duration-300 ${
                    currentPage === totalPages - 1
                      ? 'bg-white/10 border-white/20 text-white/30 cursor-not-allowed'
                      : 'bg-white/20 border-white/40 text-white hover:bg-white/30 hover:border-white/60'
                  }`}
                >
                  <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 px-16'>
              {currentProducts.map((accesorio) => (
              <div
                key={accesorio.id}
                className='accesorio-card transition-all duration-500 cursor-pointer group'
              >
                <div className='w-full h-64 mb-6 overflow-hidden rounded-xl relative'>
                  <ImageWithScatterEffect
                    src={accesorio.image}
                    alt={accesorio.name}
                    className='w-60 h-auto object-cover transition-transform duration-700'
                  />
                </div>

                <div className='text-center'>
                  <div className='mb-2'>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${accesorio.category === 'shirts'
                        ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                        : accesorio.category === 'jackets'
                          ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                          : accesorio.category === 'baggys'
                            ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                            : accesorio.category === 'quepis'
                              ? 'bg-orange-500/20 text-orange-300 border border-orange-500/30'
                              : accesorio.category === 'shoes'
                                ? 'bg-red-500/20 text-red-300 border border-red-500/30'
                                : 'bg-gray-500/20 text-gray-300 border border-gray-500/30'
                      }`}>
                      {accesorio.category.toUpperCase()}
                    </span>
                  </div>
                  <h3 className='text-2xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300 horizon-font'>
                    {accesorio.name}
                  </h3>
                  <p className='text-white/70 text-sm mb-4 leading-relaxed'>
                    {accesorio.description}
                  </p>
                  <p className='text-3xl font-bold text-lime-400 mb-6'>
                    {accesorio.price}
                  </p>
                  <button className='w-full bg-knpy-dark/20 hover:bg-knpy-primary-500/30 border border-white/20 hover:border-knpy-primary-500/50 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg'>
                    Agregar al Carrito
                  </button>
                </div>
              </div>
              ))}
            </div>

            {totalPages > 1 && (
              <div className='flex justify-center items-center mt-8 space-x-4'>
                <div className='flex space-x-2'>
                  {Array.from({ length: totalPages }, (_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentPage(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        currentPage === index
                          ? 'bg-knpy-primary-500 scale-125'
                          : 'bg-white/30 hover:bg-white/50'
                      }`}
                    />
                  ))}
                </div>
                
                <button className='ml-6 px-6 py-2 bg-transparent border-2 border-knpy-primary-500 text-knpy-primary-500 hover:bg-knpy-primary-500 hover:text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105'>
                  Ver más
                </button>
              </div>
            )}

            {totalPages > 1 && (
              <div className='text-center mt-4'>
                <p className='text-white/60 text-sm'>
                  Mostrando {startIndex + 1}-{Math.min(endIndex, filteredProducts.length)} de {filteredProducts.length} productos
                </p>
              </div>
            )}
          </div>

          {filteredProducts.length === 0 && (
            <div className='text-center py-20'>
              <p className='text-2xl text-white/60'>
                No hay productos disponibles en esta categoría
              </p>
            </div>
          )}
        </div>
      </div>
    </AnimatedBackground>
  )
}

export default AccesoriosLanding