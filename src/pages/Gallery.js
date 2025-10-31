import React, { useState } from 'react'
import '../styles/Gallery.css'

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [lightboxImage, setLightboxImage] = useState(null)

  // Przykładowe dane galerii - w rzeczywistości byłyby to prawdziwe zdjęcia
  const galleryItems = [
    {
      id: 1,
      category: 'residential',
      title: 'Ogrodzenie działkowe - siatka zielona',
      description: 'Siatka ogrodzeniowa 150cm z słupkami betonowymi',
      image: 'placeholder-1',
      location: 'Warszawa',
    },
    {
      id: 2,
      category: 'residential',
      title: 'Panele 3D antracyt',
      description: 'Nowoczesne panele ogrodzeniowe 180cm',
      image: 'placeholder-2',
      location: 'Kraków',
    },
    {
      id: 3,
      category: 'industrial',
      title: 'Ogrodzenie przemysłowe',
      description: 'Wysokie ogrodzenie z drutem kolczastym',
      image: 'placeholder-3',
      location: 'Gdańsk',
    },
    {
      id: 4,
      category: 'residential',
      title: 'Ogrodzenie z bramą automatyczną',
      description: 'Panele z automatyczną bramą wjazdową',
      image: 'placeholder-4',
      location: 'Wrocław',
    },
    {
      id: 5,
      category: 'gates',
      title: 'Brama dwuskrzydłowa',
      description: 'Brama stalowa malowana proszkowo',
      image: 'placeholder-5',
      location: 'Poznań',
    },
    {
      id: 6,
      category: 'industrial',
      title: 'Ogrodzenie zakładu',
      description: 'Zabezpieczenie terenu przemysłowego',
      image: 'placeholder-6',
      location: 'Katowice',
    },
    {
      id: 7,
      category: 'residential',
      title: 'Płot drewniany',
      description: 'Klasyczne ogrodzenie drewniane 150cm',
      image: 'placeholder-7',
      location: 'Lublin',
    },
    {
      id: 8,
      category: 'gates',
      title: 'Furtka z paneli',
      description: 'Furtka dopasowana do ogrodzenia',
      image: 'placeholder-8',
      location: 'Szczecin',
    },
  ]

  const categories = [
    { key: 'all', name: 'Wszystkie', count: galleryItems.length },
    {
      key: 'residential',
      name: 'Działkowe',
      count: galleryItems.filter((item) => item.category === 'residential').length,
    },
    {
      key: 'industrial',
      name: 'Przemysłowe',
      count: galleryItems.filter((item) => item.category === 'industrial').length,
    },
    {
      key: 'gates',
      name: 'Bramy i furtki',
      count: galleryItems.filter((item) => item.category === 'gates').length,
    },
  ]

  const filteredItems =
    selectedCategory === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory)

  const openLightbox = (item) => {
    setLightboxImage(item)
  }

  const closeLightbox = () => {
    setLightboxImage(null)
  }

  const nextImage = () => {
    const currentIndex = filteredItems.findIndex((item) => item.id === lightboxImage.id)
    const nextIndex = (currentIndex + 1) % filteredItems.length
    setLightboxImage(filteredItems[nextIndex])
  }

  const prevImage = () => {
    const currentIndex = filteredItems.findIndex((item) => item.id === lightboxImage.id)
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length
    setLightboxImage(filteredItems[prevIndex])
  }

  return (
    <div className='gallery'>
      <div className='container'>
        <div className='gallery-header'>
          <h1>Galeria Realizacji</h1>
          <p>Przykłady naszych prac - ogrodzenia działkowe i przemysłowe</p>
        </div>

        {/* Category Filter */}
        <div className='gallery-filters'>
          {categories.map((category) => (
            <button
              key={category.key}
              className={`filter-btn ${selectedCategory === category.key ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.key)}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className='gallery-grid'>
          {filteredItems.map((item) => (
            <div key={item.id} className='gallery-item' onClick={() => openLightbox(item)}>
              <div className='gallery-image'>
                <div className='image-placeholder'>📷 {item.title}</div>
                <div className='gallery-overlay'>
                  <div className='gallery-info'>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <span className='location'>📍 {item.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className='no-results'>
            <p>Brak realizacji w tej kategorii</p>
          </div>
        )}

        {/* Stats Section */}
        <div className='gallery-stats'>
          <h2>Nasze Osiągnięcia</h2>
          <div className='stats-grid'>
            <div className='stat-item'>
              <div className='stat-number'>500+</div>
              <div className='stat-label'>Wykonanych ogrodzeń</div>
            </div>
            <div className='stat-item'>
              <div className='stat-number'>15</div>
              <div className='stat-label'>Lat doświadczenia</div>
            </div>
            <div className='stat-item'>
              <div className='stat-number'>50km</div>
              <div className='stat-label'>Ogrodzeń miesięcznie</div>
            </div>
            <div className='stat-item'>
              <div className='stat-number'>100%</div>
              <div className='stat-label'>Zadowolonych klientów</div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <div className='lightbox' onClick={closeLightbox}>
          <div className='lightbox-content' onClick={(e) => e.stopPropagation()}>
            <button className='lightbox-close' onClick={closeLightbox}>
              ×
            </button>
            <button className='lightbox-prev' onClick={prevImage}>
              ‹
            </button>
            <button className='lightbox-next' onClick={nextImage}>
              ›
            </button>

            <div className='lightbox-image'>
              <div className='image-placeholder large'>📷 {lightboxImage.title}</div>
            </div>

            <div className='lightbox-info'>
              <h3>{lightboxImage.title}</h3>
              <p>{lightboxImage.description}</p>
              <span className='location'>📍 {lightboxImage.location}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Gallery
