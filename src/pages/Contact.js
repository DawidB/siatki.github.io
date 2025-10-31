import React, { useState } from 'react'
import '../styles/Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'general',
    message: '',
    consent: false,
  })

  const [formStatus, setFormStatus] = useState(null)

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!formData.consent) {
      alert('Musisz wyrazić zgodę na przetwarzanie danych osobowych')
      return
    }

    // Symulacja wysłania formularza
    setFormStatus('sending')

    setTimeout(() => {
      setFormStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'general',
        message: '',
        consent: false,
      })

      setTimeout(() => {
        setFormStatus(null)
      }, 5000)
    }, 1000)
  }

  return (
    <div className='contact'>
      <div className='container'>
        <div className='contact-header'>
          <h1>Skontaktuj się z nami</h1>
          <p>Chętnie odpowiemy na wszystkie pytania i przygotujemy indywidualną wycenę</p>
        </div>

        <div className='contact-content'>
          {/* Contact Info */}
          <div className='contact-info'>
            <h2>Dane kontaktowe</h2>

            <div className='contact-item'>
              <div className='contact-icon'>📞</div>
              <div className='contact-details'>
                <h3>Telefon</h3>
                <p>
                  <a href='tel:+48123456789'>+48 123 456 789</a>
                </p>
                <p>
                  <a href='tel:+48987654321'>+48 987 654 321</a>
                </p>
              </div>
            </div>

            <div className='contact-item'>
              <div className='contact-icon'>✉️</div>
              <div className='contact-details'>
                <h3>Email</h3>
                <p>
                  <a href='mailto:kontakt@siatki-ogrodzenia.pl'>kontakt@siatki-ogrodzenia.pl</a>
                </p>
                <p>
                  <a href='mailto:biuro@siatki-ogrodzenia.pl'>biuro@siatki-ogrodzenia.pl</a>
                </p>
              </div>
            </div>

            <div className='contact-item'>
              <div className='contact-icon'>📍</div>
              <div className='contact-details'>
                <h3>Adres</h3>
                <p>
                  ul. Ogrodzeniowa 123
                  <br />
                  00-001 Warszawa
                </p>
              </div>
            </div>

            <div className='contact-item'>
              <div className='contact-icon'>🕒</div>
              <div className='contact-details'>
                <h3>Godziny pracy</h3>
                <p>Poniedziałek - Piątek: 8:00 - 18:00</p>
                <p>Sobota: 9:00 - 14:00</p>
                <p>Niedziela: zamknięte</p>
              </div>
            </div>

            <div className='contact-item'>
              <div className='contact-icon'>🚛</div>
              <div className='contact-details'>
                <h3>Obszar działania</h3>
                <p>Cała Polska</p>
                <p>Transport gratis od 500 zł</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className='contact-form-section'>
            <h2>Wyślij wiadomość</h2>

            <form className='contact-form' onSubmit={handleSubmit}>
              <div className='form-row'>
                <div className='form-group'>
                  <label htmlFor='name'>Imię i nazwisko *</label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='phone'>Telefon</label>
                  <input
                    type='tel'
                    id='phone'
                    name='phone'
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className='form-group'>
                <label htmlFor='email'>Email *</label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className='form-group'>
                <label htmlFor='subject'>Temat</label>
                <select
                  id='subject'
                  name='subject'
                  value={formData.subject}
                  onChange={handleInputChange}
                >
                  <option value='general'>Zapytanie ogólne</option>
                  <option value='quote'>Prośba o wycenę</option>
                  <option value='residential'>Ogrodzenie działkowe</option>
                  <option value='industrial'>Ogrodzenie przemysłowe</option>
                  <option value='repair'>Naprawa ogrodzenia</option>
                  <option value='other'>Inne</option>
                </select>
              </div>

              <div className='form-group'>
                <label htmlFor='message'>Wiadomość *</label>
                <textarea
                  id='message'
                  name='message'
                  rows='5'
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder='Opisz swoje potrzeby, wymiary działki, preferowany typ ogrodzenia...'
                  required
                ></textarea>
              </div>

              <div className='form-group checkbox-group'>
                <label className='checkbox-label'>
                  <input
                    type='checkbox'
                    name='consent'
                    checked={formData.consent}
                    onChange={handleInputChange}
                    required
                  />
                  <span className='checkmark'></span>
                  Wyrażam zgodę na przetwarzanie moich danych osobowych w celu udzielenia odpowiedzi
                  na zapytanie zgodnie z RODO *
                </label>
              </div>

              <button type='submit' className='btn submit-btn' disabled={formStatus === 'sending'}>
                {formStatus === 'sending' ? 'Wysyłanie...' : 'Wyślij wiadomość'}
              </button>

              {formStatus === 'success' && (
                <div className='form-success'>
                  ✅ Wiadomość została wysłana! Skontaktujemy się z Tobą w ciągu 24 godzin.
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className='map-section'>
          <h2>Jak do nas dojechać</h2>
          <div className='map-container'>
            <div className='map-placeholder'>
              <div className='map-content'>
                <h3>🗺️ Mapa dojazdu</h3>
                <p>ul. Ogrodzeniowa 123, 00-001 Warszawa</p>
                <p>W rzeczywistej implementacji tutaj byłaby mapa Google Maps</p>
                <a
                  href='https://maps.google.com/maps?q=Warszawa,Polska'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='btn btn-secondary'
                >
                  Otwórz w Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className='faq-section'>
          <h2>Często zadawane pytania</h2>
          <div className='faq-grid'>
            <div className='faq-item'>
              <h3>Jak długo trwa montaż ogrodzenia?</h3>
              <p>
                Standardowe ogrodzenie działkowe (do 100m) montujemy w 1-2 dni robocze, w zależności
                od warunków terenowych.
              </p>
            </div>
            <div className='faq-item'>
              <h3>Czy robicie bezpłatną wycenę?</h3>
              <p>
                Tak, wycena i pomiar działki są bezpłatne. Korzystając z naszego kalkulatora, możesz
                otrzymać orientacyjną cenę online.
              </p>
            </div>
            <div className='faq-item'>
              <h3>Jaka jest gwarancja na ogrodzenie?</h3>
              <p>
                Udzielamy 5 lat gwarancji na materiały i 2 lata na wykonanie montażu. Wszystkie
                użyte materiały posiadają certyfikaty jakości.
              </p>
            </div>
            <div className='faq-item'>
              <h3>Czy dojeżdżacie poza Warszawę?</h3>
              <p>
                Tak, działamy w całej Polsce. Transport jest bezpłatny dla zamówień powyżej 500 zł.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
