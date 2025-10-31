import React from 'react';
import '../styles/About.css';

const About = () => {
  const values = [
    {
      icon: '🎯',
      title: 'Jakość',
      description: 'Używamy tylko sprawdzonych materiałów najwyższej jakości od renomowanych producentów.'
    },
    {
      icon: '🤝',
      title: 'Zaufanie',
      description: 'Budujemy długoterminowe relacje z klientami oparte na uczciwości i transparentności.'
    },
    {
      icon: '⚡',
      title: 'Terminowość',
      description: 'Dotrzymujemy ustalonych terminów i szanujemy czas naszych klientów.'
    },
    {
      icon: '💼',
      title: 'Profesjonalizm',
      description: 'Doświadczony zespół zapewnia najwyższy poziom obsługi i wykonania.'
    },
    {
      icon: '🌱',
      title: 'Rozwój',
      description: 'Stale rozwijamy się i inwestujemy w nowe technologie i szkolenia.'
    },
    {
      icon: '✅',
      title: 'Gwarancja',
      description: 'Oferujemy pełną gwarancję na materiały i wykonane prace montażowe.'
    }
  ];

  const timeline = [
    {
      year: '2010',
      title: 'Początek działalności',
      description: 'Założenie firmy i pierwsze realizacje w województwie mazowieckim.'
    },
    {
      year: '2013',
      title: 'Rozszerzenie działalności',
      description: 'Rozpoczęcie działalności w całej Polsce, pierwsze duże projekty przemysłowe.'
    },
    {
      year: '2016',
      title: 'Certyfikaty jakości',
      description: 'Uzyskanie certyfikatów ISO i nagrody "Firma Roku" w branży ogrodzeniowej.'
    },
    {
      year: '2020',
      title: 'Transformacja cyfrowa',
      description: 'Uruchomienie kalkulatora online i nowoczesnej platformy obsługi klienta.'
    },
    {
      year: '2025',
      title: 'Lider rynku',
      description: 'Ponad 500 zadowolonych klientów rocznie, rozbudowany zespół specjalistów.'
    }
  ];

  return (
    <div className="about-page">
      {/* Header */}
      <section className="about-header">
        <div className="container">
          <h1>O Naszej Firmie</h1>
          <p>Poznaj naszą historię, misję i wartości, którymi się kierujemy</p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section mission-vision">
        <div className="container">
          <div className="mission-vision-grid">
            <div className="mission-box">
              <div className="box-icon">🎯</div>
              <h2>Nasza Misja</h2>
              <p>
                Naszą misją jest dostarczanie najwyższej jakości ogrodzeń, które łączą funkcjonalność, 
                estetykę i trwałość. Dążymy do tego, aby każdy klient czuł się bezpiecznie i zadowolony 
                z naszych usług. Stawiamy na profesjonalizm, uczciwość i terminowość w każdym projekcie.
              </p>
            </div>
            <div className="vision-box">
              <div className="box-icon">🌟</div>
              <h2>Nasza Wizja</h2>
              <p>
                Chcemy być najbardziej zaufaną firmą ogrodzeniową w Polsce, rozpoznawalną za innowacyjne 
                podejście, doskonałą obsługę klienta i niezawodność. Dążymy do ciągłego rozwoju, 
                wprowadzania nowoczesnych rozwiązań i budowania długoterminowych relacji z klientami.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section values-section">
        <div className="container">
          <h2 className="section-title">Nasze Wartości</h2>
          <p className="section-subtitle">Fundamenty, na których budujemy naszą firmę</p>
          
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section timeline-section">
        <div className="container">
          <h2 className="section-title">Nasza Historia</h2>
          <p className="section-subtitle">15 lat doświadczenia i ciągłego rozwoju</p>
          
          <div className="timeline">
            {timeline.map((event, index) => (
              <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                <div className="timeline-content">
                  <div className="timeline-year">{event.year}</div>
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section team-section">
        <div className="container">
          <h2 className="section-title">Nasz Zespół</h2>
          <p className="section-subtitle">Doświadczeni specjaliści z pasją do swojej pracy</p>
          
          <div className="team-stats">
            <div className="team-stat">
              <div className="stat-number">25+</div>
              <div className="stat-label">Członków zespołu</div>
            </div>
            <div className="team-stat">
              <div className="stat-number">15</div>
              <div className="stat-label">Lat średniego stażu</div>
            </div>
            <div className="team-stat">
              <div className="stat-number">100%</div>
              <div className="stat-label">Wykwalifikowanych monterów</div>
            </div>
            <div className="team-stat">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Wsparcie techniczne</div>
            </div>
          </div>

          <div className="team-description">
            <p>
              Nasz zespół składa się z doświadczonych monterów, projektantów i konsultantów, 
              którzy łączą wiedzę techniczną z pasją do swojej pracy. Regularnie uczestniczą 
              w szkoleniach i certyfikacjach, aby zapewnić najwyższą jakość usług.
            </p>
            <p>
              Każdy projekt traktujemy indywidualnie, dostosowując rozwiązania do potrzeb i 
              oczekiwań klienta. Nasz zespół jest gotowy doradzić, zaprojektować i zrealizować 
              ogrodzenie marzeń dla każdej działki.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section why-us-section">
        <div className="container">
          <h2 className="section-title">Dlaczego My?</h2>
          <div className="why-us-grid">
            <div className="why-us-item">
              <div className="why-us-number">01</div>
              <h3>Doświadczenie</h3>
              <p>15 lat na rynku, ponad 5000 zrealizowanych projektów w całej Polsce.</p>
            </div>
            <div className="why-us-item">
              <div className="why-us-number">02</div>
              <h3>Najlepsze materiały</h3>
              <p>Współpracujemy tylko z renomowanymi producentami, gwarantującymi jakość.</p>
            </div>
            <div className="why-us-item">
              <div className="why-us-number">03</div>
              <h3>Konkurencyjne ceny</h3>
              <p>Bezpośrednie zakupy od producentów pozwalają nam oferować najlepsze ceny.</p>
            </div>
            <div className="why-us-item">
              <div className="why-us-number">04</div>
              <h3>Gwarancja</h3>
              <p>5 lat gwarancji na materiały i 2 lata na montaż - pracujemy na jakości!</p>
            </div>
            <div className="why-us-item">
              <div className="why-us-number">05</div>
              <h3>Terminowość</h3>
              <p>Dotrzymujemy ustalonych terminów, Twój czas jest dla nas ważny.</p>
            </div>
            <div className="why-us-item">
              <div className="why-us-number">06</div>
              <h3>Kompleksowa obsługa</h3>
              <p>Od wyceny, przez doradztwo, po montaż i serwis pogwarancyjny.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;