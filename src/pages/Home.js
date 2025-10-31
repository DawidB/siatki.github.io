import React from 'react'
import { Link } from 'react-router-dom'
import Testimonials from '../components/Testimonials'
import '../styles/Home.css'

const Home = () => {
  return (
    <div className='home'>
      {/* Hero Section */}
      <section className='hero'>
        <div className='container'>
          <div className='hero-content'>
            <h1>Profesjonalne Ogrodzenia Działkowe</h1>
            <p className='hero-subtitle'>
              Wysokiej jakości siatki i panele ogrodzeniowe z profesjonalnym montażem. Zabezpiecz
              swoją działkę z gwarancją jakości.
            </p>
            <div className='hero-actions'>
              <Link to='/calculator' className='btn'>
                Oblicz koszt ogrodzenia
              </Link>
              <Link to='/contact' className='btn btn-secondary'>
                Skontaktuj się z nami
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className='section services-preview'>
        <div className='container'>
          <h2 className='section-title'>Nasze Usługi</h2>
          <div className='services-grid'>
            <div className='service-card'>
              <div className='service-icon'>🏡</div>
              <h3>Ogrodzenia Działkowe</h3>
              <p>
                Siatki ogrodzeniowe, panele, słupki betonowe i metalowe. Idealne dla działek
                prywatnych.
              </p>
            </div>
            <div className='service-card'>
              <div className='service-icon'>🏭</div>
              <h3>Ogrodzenia Przemysłowe</h3>
              <p>Wytrzymałe ogrodzenia dla firm, fabryk i obiektów przemysłowych.</p>
            </div>
            <div className='service-card'>
              <div className='service-icon'>🔧</div>
              <h3>Profesjonalny Montaż</h3>
              <p>Doświadczony zespół zapewnia solidny i trwały montaż w całej Polsce.</p>
            </div>
            <div className='service-card'>
              <div className='service-icon'>📊</div>
              <h3>Wycena Online</h3>
              <p>Skorzystaj z naszego kalkulatora i otrzymaj orientacyjną wycenę w kilka minut.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className='section about-section'>
        <div className='container'>
          <div className='about-content'>
            <div className='about-text'>
              <h2>O Naszej Firmie</h2>
              <p>
                Od ponad 15 lat specjalizujemy się w zakładaniu ogrodzeń działkowych i
                przemysłowych. Nasze doświadczenie, wysokiej jakości materiały i profesjonalna
                obsługa sprawiają, że jesteśmy liderem w branży ogrodzeniowej.
              </p>
              <ul className='about-features'>
                <li>✓ Ponad 15 lat doświadczenia</li>
                <li>✓ Wysokiej jakości materiały</li>
                <li>✓ Profesjonalny montaż</li>
                <li>✓ Gwarancja na wykonane prace</li>
                <li>✓ Transport gratis od 500 zł</li>
                <li>✓ Działamy w całej Polsce</li>
              </ul>
              <Link to='/services' className='btn'>
                Poznaj nasze usługi
              </Link>
            </div>
            <div className='about-image'>
              <div className='image-placeholder'>Zdjęcie zespołu / realizacji</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* CTA Section */}
      <section className='section cta-section'>
        <div className='container'>
          <div className='cta-content'>
            <h2>Potrzebujesz wyceny?</h2>
            <p>Skorzystaj z naszego kalkulatora lub skontaktuj się bezpośrednio</p>
            <div className='cta-actions'>
              <Link to='/calculator' className='btn'>
                Kalkulator kosztów
              </Link>
              <a href='tel:+48123456789' className='btn btn-secondary'>
                📞 +48 123 456 789
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
