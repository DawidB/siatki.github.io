import React from 'react'
import '../styles/Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer-content'>
          <div className='footer-section'>
            <h3>Siatki Ogrodzenia</h3>
            <p>Profesjonalne ogrodzenia działkowe i przemysłowe</p>
            <div className='contact-info'>
              <p>📞 +48 123 456 789</p>
              <p>✉️ kontakt@siatki-ogrodzenia.pl</p>
            </div>
          </div>

          <div className='footer-section'>
            <h4>Usługi</h4>
            <ul>
              <li>Ogrodzenia działkowe</li>
              <li>Ogrodzenia przemysłowe</li>
              <li>Siatki ogrodzeniowe</li>
              <li>Panele ogrodzeniowe</li>
              <li>Montaż ogrodzeń</li>
            </ul>
          </div>

          <div className='footer-section'>
            <h4>Obszar działania</h4>
            <ul>
              <li>Cała Polska</li>
              <li>Transport gratis od 500 zł</li>
              <li>Bezpłatna wycena</li>
            </ul>
          </div>

          <div className='footer-section'>
            <h4>Godziny pracy</h4>
            <ul>
              <li>Pon-Pt: 8:00 - 18:00</li>
              <li>Sobota: 9:00 - 14:00</li>
              <li>Niedziela: zamknięte</li>
            </ul>
          </div>
        </div>

        <div className='footer-bottom'>
          <p>&copy; 2025 Siatki Ogrodzenia. Wszystkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
