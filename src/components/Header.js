import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [language, setLanguage] = useState('pl')

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleLanguage = () => {
    setLanguage(language === 'pl' ? 'en' : 'pl')
  }

  const menuItems = {
    pl: {
      home: 'Strona Główna',
      services: 'Usługi',
      calculator: 'Kalkulator',
      gallery: 'Galeria',
      contact: 'Kontakt',
    },
    en: {
      home: 'Home',
      services: 'Services',
      calculator: 'Calculator',
      gallery: 'Gallery',
      contact: 'Contact',
    },
  }

  return (
    <header className='header'>
      <div className='container'>
        <div className='nav-brand'>
          <Link to='/' className='logo'>
            <img src='/logo.svg' alt='Siatki Ogrodzenia' className='logo-icon' />
            <h2>Siatki Ogrodzenia</h2>
          </Link>
        </div>

        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className='nav-menu'>
            <li>
              <Link to='/' onClick={() => setIsMenuOpen(false)}>
                {menuItems[language].home}
              </Link>
            </li>
            <li>
              <Link to='/services' onClick={() => setIsMenuOpen(false)}>
                {menuItems[language].services}
              </Link>
            </li>
            <li>
              <Link to='/calculator' onClick={() => setIsMenuOpen(false)}>
                {menuItems[language].calculator}
              </Link>
            </li>
            <li>
              <Link to='/gallery' onClick={() => setIsMenuOpen(false)}>
                {menuItems[language].gallery}
              </Link>
            </li>
            <li>
              <Link to='/contact' onClick={() => setIsMenuOpen(false)}>
                {menuItems[language].contact}
              </Link>
            </li>
          </ul>
        </nav>

        <div className='header-actions'>
          <button className='lang-toggle' onClick={toggleLanguage}>
            {language === 'pl' ? 'EN' : 'PL'}
          </button>
          <button className='menu-toggle' onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
