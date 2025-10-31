import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Services.css'

const Services = () => {
  return (
    <div className='services'>
      {/* Header Section */}
      <section className='services-header'>
        <div className='container'>
          <h1>Nasze Usługi</h1>
          <p>Kompleksowe rozwiązania ogrodzeniowe dla każdego klienta</p>
        </div>
      </section>

      {/* Main Services */}
      <section className='section main-services'>
        <div className='container'>
          <div className='service-detail'>
            <div className='service-content'>
              <h2>🏡 Ogrodzenia Działkowe</h2>
              <p>
                Specjalizujemy się w montażu ogrodzeń dla działek prywatnych. Oferujemy szeroką gamę
                rozwiązań dostosowanych do Twoich potrzeb i budżetu.
              </p>

              <h3>Dostępne materiały:</h3>
              <ul>
                <li>
                  <strong>Siatka ogrodzeniowa</strong> - ekonomiczne rozwiązanie, różne wysokości
                </li>
                <li>
                  <strong>Panele ogrodzeniowe</strong> - nowoczesny wygląd, różne kolory
                </li>
                <li>
                  <strong>Słupki betonowe</strong> - trwałe, odporne na warunki atmosferyczne
                </li>
                <li>
                  <strong>Słupki metalowe</strong> - estetyczne, dostępne w różnych kolorach
                </li>
                <li>
                  <strong>Bramy i furtki</strong> - dopasowane do stylu ogrodzenia
                </li>
              </ul>
            </div>
            <div className='service-image'>
              <div className='image-placeholder'>🏡 Zdjęcie ogrodzenia działkowego</div>
            </div>
          </div>

          <div className='service-detail reverse'>
            <div className='service-content'>
              <h2>🏭 Ogrodzenia Przemysłowe</h2>
              <p>
                Wytrzymałe ogrodzenia dla obiektów przemysłowych, firm, magazynów i innych obiektów
                komercyjnych wymagających wysokiego poziomu bezpieczeństwa.
              </p>

              <h3>Charakterystyka:</h3>
              <ul>
                <li>
                  <strong>Zwiększona wysokość</strong> - do 3 metrów i więcej
                </li>
                <li>
                  <strong>Wzmocniona konstrukcja</strong> - stalowe słupki i panele
                </li>
                <li>
                  <strong>Dodatkowe zabezpieczenia</strong> - druty kolczaste, sensory
                </li>
                <li>
                  <strong>System kontroli dostępu</strong> - bramy automatyczne
                </li>
                <li>
                  <strong>Oświetlenie</strong> - integracja z systemem oświetlenia
                </li>
              </ul>
            </div>
            <div className='service-image'>
              <div className='image-placeholder'>🏭 Zdjęcie ogrodzenia przemysłowego</div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className='section process-section'>
        <div className='container'>
          <h2 className='section-title'>Jak Pracujemy</h2>
          <div className='process-steps'>
            <div className='step'>
              <div className='step-number'>1</div>
              <h3>Konsultacja</h3>
              <p>Bezpłatna konsultacja i pomiar działki. Dobieramy najlepsze rozwiązanie.</p>
            </div>
            <div className='step'>
              <div className='step-number'>2</div>
              <h3>Wycena</h3>
              <p>Szczegółowa wycena z uwzględnieniem wszystkich kosztów. Bez ukrytych opłat.</p>
            </div>
            <div className='step'>
              <div className='step-number'>3</div>
              <h3>Realizacja</h3>
              <p>Profesjonalny montaż przez doświadczony zespół. Gwarancja jakości.</p>
            </div>
            <div className='step'>
              <div className='step-number'>4</div>
              <h3>Odbiór</h3>
              <p>Końcowy odbiór prac i przekazanie dokumentacji gwarancyjnej.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className='section materials-section'>
        <div className='container'>
          <h2 className='section-title'>Materiały</h2>
          <div className='materials-grid'>
            <div className='material-card'>
              <h3>Siatka Ogrodzeniowa</h3>
              <ul>
                <li>Wysokość: 100-200 cm</li>
                <li>Oczko: 50x50 mm, 60x60 mm</li>
                <li>Powłoka: ocynk + plastik</li>
                <li>Kolory: zielony, antracyt</li>
              </ul>
            </div>
            <div className='material-card'>
              <h3>Panele 3D</h3>
              <ul>
                <li>Wysokość: 123-203 cm</li>
                <li>Szerokość: 250 cm</li>
                <li>Drut: 4-6 mm</li>
                <li>Powłoka: proszek RAL</li>
              </ul>
            </div>
            <div className='material-card'>
              <h3>Słupki Betonowe</h3>
              <ul>
                <li>Przekrój: 115x115 mm</li>
                <li>Długość: 240-280 cm</li>
                <li>Klasa betonu: C35/45</li>
                <li>Zbrojenie: stalowe</li>
              </ul>
            </div>
            <div className='material-card'>
              <h3>Słupki Metalowe</h3>
              <ul>
                <li>Przekrój: 60x40 mm</li>
                <li>Grubość: 2-3 mm</li>
                <li>Powłoka: ocynk + proszek</li>
                <li>Kolory: RAL 6005, 7016</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='section cta-section'>
        <div className='container'>
          <h2>Zainteresowany naszymi usługami?</h2>
          <p>Skorzystaj z kalkulatora lub skontaktuj się z nami</p>
          <div className='cta-actions'>
            <Link to='/calculator' className='btn'>
              Oblicz koszt
            </Link>
            <Link to='/contact' className='btn btn-secondary'>
              Kontakt
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
