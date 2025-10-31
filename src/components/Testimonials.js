import React, { useState } from 'react'
import '../styles/Testimonials.css'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: 'Jan Kowalski',
      location: 'Warszawa',
      rating: 5,
      text: 'Bardzo profesjonalna obsługa! Ogrodzenie zostało zamontowane w ciągu dwóch dni. Jakość materiałów jest świetna, a cena bardzo konkurencyjna. Polecam z całego serca!',
      date: '2024-09-15',
      service: 'Ogrodzenie działkowe - panele 3D',
    },
    {
      id: 2,
      name: 'Anna Nowak',
      location: 'Kraków',
      rating: 5,
      text: 'Fantastyczna ekipa! Doradziło mi najlepsze rozwiązanie, pomogło w wyborze koloru i typu ogrodzenia. Montaż przebiegł szybko i sprawnie. Jestem bardzo zadowolona!',
      date: '2024-08-22',
      service: 'Ogrodzenie z siatki',
    },
    {
      id: 3,
      name: 'Piotr Wiśniewski',
      location: 'Gdańsk',
      rating: 5,
      text: 'Szukałem solidnej firmy do montażu ogrodzenia przemysłowego. Dostałem szczegółową wycenę, terminową realizację i gwarancję. Wszystko na najwyższym poziomie!',
      date: '2024-10-05',
      service: 'Ogrodzenie przemysłowe',
    },
    {
      id: 4,
      name: 'Maria Lewandowska',
      location: 'Wrocław',
      rating: 5,
      text: 'Kalkulator na stronie bardzo mi pomógł w wstępnej wycenie. Faktyczna cena była bardzo zbliżona. Montaż bez zarzutu, pełna kultura osobista. Polecam!',
      date: '2024-07-18',
      service: 'Ogrodzenie z bramą automatyczną',
    },
    {
      id: 5,
      name: 'Tomasz Zieliński',
      location: 'Poznań',
      rating: 5,
      text: 'Rewelacyjna firma! Szybka reakcja na zapytanie, konkurencyjna cena, terminowość. Ogrodzenie wygląda pięknie i jest solidnie wykonane. Na pewno będę polecał!',
      date: '2024-09-30',
      service: 'Panele 3D antracyt',
    },
    {
      id: 6,
      name: 'Katarzyna Dąbrowska',
      location: 'Łódź',
      rating: 5,
      text: 'Wspaniała obsługa od początku do końca. Fachowe doradztwo, uczciwa wycena, terminowa realizacja. Ogrodzenie jest dokładnie takie, jakiego oczekiwałam!',
      date: '2024-08-10',
      service: 'Ogrodzenie działkowe',
    },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  const goToTestimonial = (index) => {
    setCurrentIndex(index)
  }

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <span key={index} className={index < rating ? 'star filled' : 'star'}>
        ★
      </span>
    ))
  }

  return (
    <section className='testimonials-section'>
      <div className='container'>
        <h2 className='section-title'>Co mówią nasi klienci</h2>
        <p className='section-subtitle'>Opinie zadowolonych klientów z całej Polski</p>

        <div className='testimonials-carousel'>
          <button className='carousel-btn prev' onClick={prevTestimonial}>
            ‹
          </button>

          <div className='testimonial-card'>
            <div className='testimonial-header'>
              <div className='client-avatar'>{testimonials[currentIndex].name.charAt(0)}</div>
              <div className='client-info'>
                <h3>{testimonials[currentIndex].name}</h3>
                <p className='location'>📍 {testimonials[currentIndex].location}</p>
                <div className='rating'>{renderStars(testimonials[currentIndex].rating)}</div>
              </div>
            </div>

            <div className='testimonial-body'>
              <p className='testimonial-text'>"{testimonials[currentIndex].text}"</p>
              <div className='testimonial-meta'>
                <span className='service-type'>{testimonials[currentIndex].service}</span>
                <span className='date'>
                  {new Date(testimonials[currentIndex].date).toLocaleDateString('pl-PL')}
                </span>
              </div>
            </div>
          </div>

          <button className='carousel-btn next' onClick={nextTestimonial}>
            ›
          </button>
        </div>

        <div className='carousel-dots'>
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToTestimonial(index)}
            />
          ))}
        </div>

        {/* Stats */}
        <div className='testimonials-stats'>
          <div className='stat'>
            <div className='stat-number'>500+</div>
            <div className='stat-label'>Zadowolonych klientów</div>
          </div>
          <div className='stat'>
            <div className='stat-number'>5.0</div>
            <div className='stat-label'>Średnia ocen</div>
          </div>
          <div className='stat'>
            <div className='stat-number'>98%</div>
            <div className='stat-label'>Poleceń</div>
          </div>
          <div className='stat'>
            <div className='stat-number'>15</div>
            <div className='stat-label'>Lat na rynku</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
