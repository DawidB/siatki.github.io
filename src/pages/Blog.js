import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Blog.css'

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const blogPosts = [
    {
      id: 1,
      title: 'Jak wybrać idealne ogrodzenie dla swojej działki?',
      excerpt:
        'Kompleksowy przewodnik po wyborze najlepszego ogrodzenia. Dowiedz się, na co zwrócić uwagę przy wyborze materiałów, wysokości i stylu ogrodzenia.',
      category: 'poradnik',
      date: '2024-10-15',
      readTime: '5 min',
      image: 'placeholder-blog-1',
    },
    {
      id: 2,
      title: 'Konserwacja ogrodzeń - co robić wiosną?',
      excerpt:
        'Wiosna to idealny czas na przegląd i konserwację ogrodzenia. Zobacz, jakie czynności należy wykonać, aby przedłużyć żywotność ogrodzenia.',
      category: 'konserwacja',
      date: '2024-09-28',
      readTime: '4 min',
      image: 'placeholder-blog-2',
    },
    {
      id: 3,
      title: 'Panele 3D vs. siatka - co wybrać?',
      excerpt:
        'Porównanie najpopularniejszych rozwiązań ogrodzeniowych. Zalety i wady paneli 3D oraz siatek ogrodzeniowych w praktycznym zestawieniu.',
      category: 'poradnik',
      date: '2024-10-01',
      readTime: '6 min',
      image: 'placeholder-blog-3',
    },
    {
      id: 4,
      title: 'Ogrodzenie przemysłowe - wymagania i normy',
      excerpt:
        'Wszystko, co musisz wiedzieć o ogrodzenich przemysłowych. Przepisy, normy bezpieczeństwa i najlepsze praktyki przy zabezpieczaniu obiektów.',
      category: 'przemyslowe',
      date: '2024-09-20',
      readTime: '7 min',
      image: 'placeholder-blog-4',
    },
    {
      id: 5,
      title: 'Jak przygotować teren pod montaż ogrodzenia?',
      excerpt:
        'Przygotowanie terenu to kluczowy etap przed montażem. Sprawdź, jakie kroki należy podjąć, aby montaż przebiegł sprawnie i bez problemów.',
      category: 'montaz',
      date: '2024-10-10',
      readTime: '5 min',
      image: 'placeholder-blog-5',
    },
    {
      id: 6,
      title: 'Zabezpieczanie ogrodzenia przed korozją',
      excerpt:
        'Korozja to główny wróg metalowych ogrodzeń. Poznaj skuteczne metody zabezpieczania i przedłużania żywotności Twojego ogrodzenia.',
      category: 'konserwacja',
      date: '2024-08-15',
      readTime: '4 min',
      image: 'placeholder-blog-6',
    },
    {
      id: 7,
      title: 'Automatyczne bramy - rodzaje i zastosowanie',
      excerpt:
        'Przegląd dostępnych systemów automatyki bramowej. Dowiedz się, która brama będzie najlepsza dla Twojej posesji.',
      category: 'automatyka',
      date: '2024-09-05',
      readTime: '6 min',
      image: 'placeholder-blog-7',
    },
    {
      id: 8,
      title: 'Ogrodzenie a przepisy budowlane - co musisz wiedzieć',
      excerpt:
        'Przewodnik po przepisach dotyczących budowy ogrodzeń. Kiedy potrzebujesz pozwolenia, a kiedy wystarczy zgłoszenie?',
      category: 'prawne',
      date: '2024-08-25',
      readTime: '8 min',
      image: 'placeholder-blog-8',
    },
    {
      id: 9,
      title: 'Najczęstsze błędy przy montażu ogrodzeń',
      excerpt:
        'Unikaj typowych pułapek! Zobacz, jakie błędy najczęściej popełnia się podczas montażu ogrodzeń i jak ich uniknąć.',
      category: 'montaz',
      date: '2024-10-20',
      readTime: '5 min',
      image: 'placeholder-blog-9',
    },
  ]

  const categories = [
    { key: 'all', name: 'Wszystkie', count: blogPosts.length },
    {
      key: 'poradnik',
      name: 'Poradniki',
      count: blogPosts.filter((p) => p.category === 'poradnik').length,
    },
    {
      key: 'konserwacja',
      name: 'Konserwacja',
      count: blogPosts.filter((p) => p.category === 'konserwacja').length,
    },
    {
      key: 'montaz',
      name: 'Montaż',
      count: blogPosts.filter((p) => p.category === 'montaz').length,
    },
    {
      key: 'przemyslowe',
      name: 'Przemysłowe',
      count: blogPosts.filter((p) => p.category === 'przemyslowe').length,
    },
    {
      key: 'automatyka',
      name: 'Automatyka',
      count: blogPosts.filter((p) => p.category === 'automatyka').length,
    },
    {
      key: 'prawne',
      name: 'Przepisy',
      count: blogPosts.filter((p) => p.category === 'prawne').length,
    },
  ]

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className='blog'>
      {/* Header */}
      <section className='blog-header'>
        <div className='container'>
          <h1>Blog i Porady</h1>
          <p>Praktyczne wskazówki dotyczące ogrodzeń i ich konserwacji</p>
        </div>
      </section>

      <div className='container'>
        <div className='blog-content'>
          {/* Sidebar */}
          <aside className='blog-sidebar'>
            {/* Search */}
            <div className='search-widget'>
              <h3>Szukaj</h3>
              <div className='search-box'>
                <input
                  type='text'
                  placeholder='Szukaj artykułów...'
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button className='search-btn'>🔍</button>
              </div>
            </div>

            {/* Categories */}
            <div className='categories-widget'>
              <h3>Kategorie</h3>
              <ul className='categories-list'>
                {categories.map((category) => (
                  <li key={category.key}>
                    <button
                      className={`category-btn ${
                        selectedCategory === category.key ? 'active' : ''
                      }`}
                      onClick={() => setSelectedCategory(category.key)}
                    >
                      <span>{category.name}</span>
                      <span className='count'>{category.count}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Posts */}
            <div className='popular-widget'>
              <h3>Popularne Artykuły</h3>
              <ul className='popular-list'>
                {blogPosts.slice(0, 4).map((post) => (
                  <li key={post.id}>
                    <Link to={`/blog/${post.id}`} className='popular-item'>
                      <h4>{post.title}</h4>
                      <span className='post-date'>
                        {new Date(post.date).toLocaleDateString('pl-PL')}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Main Content */}
          <main className='blog-main'>
            <div className='results-info'>
              <p>
                Znaleziono {filteredPosts.length}{' '}
                {filteredPosts.length === 1 ? 'artykuł' : 'artykułów'}
              </p>
            </div>

            {filteredPosts.length === 0 ? (
              <div className='no-results'>
                <p>Nie znaleziono artykułów spełniających kryteria.</p>
                <button
                  className='btn'
                  onClick={() => {
                    setSelectedCategory('all')
                    setSearchTerm('')
                  }}
                >
                  Pokaż wszystkie
                </button>
              </div>
            ) : (
              <div className='blog-grid'>
                {filteredPosts.map((post) => (
                  <article key={post.id} className='blog-card'>
                    <div className='blog-image'>
                      <div className='image-placeholder'>📝 {post.title}</div>
                      <span className='blog-category'>
                        {categories.find((c) => c.key === post.category)?.name}
                      </span>
                    </div>
                    <div className='blog-body'>
                      <div className='blog-meta'>
                        <span className='blog-date'>
                          📅 {new Date(post.date).toLocaleDateString('pl-PL')}
                        </span>
                        <span className='blog-read-time'>⏱️ {post.readTime}</span>
                      </div>
                      <h2>{post.title}</h2>
                      <p>{post.excerpt}</p>
                      <Link to={`/blog/${post.id}`} className='read-more'>
                        Czytaj więcej →
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  )
}

export default Blog
