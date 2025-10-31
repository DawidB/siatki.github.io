import React, { useState } from 'react'
import '../styles/Calculator.css'

const Calculator = () => {
  const [formData, setFormData] = useState({
    perimeter: '',
    cornerPosts: '',
    postType: 'concrete',
    postSpacing: '2.5',
    fenceType: 'mesh',
    fenceHeight: '150',
    hasGate: false,
    hasWicket: false,
    region: 'mazowieckie',
  })

  const [result, setResult] = useState(null)

  // Ceny bazowe (przykładowe)
  const prices = {
    posts: {
      concrete: { price: 45, name: 'Słupek betonowy' },
      metal: { price: 85, name: 'Słupek metalowy' },
      wooden: { price: 35, name: 'Słupek drewniany' },
    },
    fencing: {
      mesh: {
        150: { price: 25, name: 'Siatka 150cm' },
        180: { price: 30, name: 'Siatka 180cm' },
        200: { price: 35, name: 'Siatka 200cm' },
      },
      panels: {
        150: { price: 120, name: 'Panel 3D 150cm' },
        180: { price: 140, name: 'Panel 3D 180cm' },
        200: { price: 160, name: 'Panel 3D 200cm' },
      },
      wooden: {
        150: { price: 80, name: 'Płot drewniany 150cm' },
        180: { price: 95, name: 'Płot drewniany 180cm' },
        200: { price: 110, name: 'Płot drewniany 200cm' },
      },
    },
    extras: {
      gate: 800,
      wicket: 400,
    },
    transport: {
      mazowieckie: 0,
      małopolskie: 150,
      wielkopolskie: 200,
      śląskie: 100,
      dolnośląskie: 250,
      other: 300,
    },
    labor: 15, // zł za metr bieżący
  }

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const calculateCost = () => {
    const perimeter = parseFloat(formData.perimeter)
    const cornerPosts = parseInt(formData.cornerPosts)
    const postSpacing = parseFloat(formData.postSpacing)

    if (!perimeter || !cornerPosts || perimeter <= 0 || cornerPosts < 3) {
      alert('Proszę wypełnić wszystkie wymagane pola poprawnie')
      return
    }

    // Obliczenia
    const totalPosts = Math.ceil(perimeter / postSpacing) + cornerPosts
    const postPrice = prices.posts[formData.postType].price
    const fencingPrice = prices.fencing[formData.fenceType][formData.fenceHeight].price
    const transportCost = prices.transport[formData.region] || prices.transport.other
    const laborCost = perimeter * prices.labor

    // Koszty podstawowe
    const postsTotal = totalPosts * postPrice
    const fencingTotal = perimeter * fencingPrice

    // Dodatki
    let extrasTotal = 0
    if (formData.hasGate) extrasTotal += prices.extras.gate
    if (formData.hasWicket) extrasTotal += prices.extras.wicket

    const subtotal = postsTotal + fencingTotal + extrasTotal + laborCost
    const total = subtotal + transportCost

    setResult({
      perimeter: perimeter,
      totalPosts: totalPosts,
      breakdown: {
        posts: { quantity: totalPosts, unitPrice: postPrice, total: postsTotal },
        fencing: { quantity: perimeter, unitPrice: fencingPrice, total: fencingTotal },
        labor: { quantity: perimeter, unitPrice: prices.labor, total: laborCost },
        extras: extrasTotal,
        transport: transportCost,
      },
      subtotal: subtotal,
      total: total,
    })
  }

  return (
    <div className='calculator'>
      <div className='container'>
        <div className='calculator-header'>
          <h1>Kalkulator Kosztów Ogrodzenia</h1>
          <p>Oblicz orientacyjny koszt ogrodzenia Twojej działki</p>
        </div>

        <div className='calculator-content'>
          <div className='calculator-form'>
            <h2>Parametry ogrodzenia</h2>

            <div className='form-group'>
              <label htmlFor='perimeter'>Obwód działki (metry) *</label>
              <input
                type='number'
                id='perimeter'
                name='perimeter'
                value={formData.perimeter}
                onChange={handleInputChange}
                placeholder='np. 120'
                required
              />
            </div>

            <div className='form-group'>
              <label htmlFor='cornerPosts'>Liczba punktów narożnych *</label>
              <input
                type='number'
                id='cornerPosts'
                name='cornerPosts'
                value={formData.cornerPosts}
                onChange={handleInputChange}
                placeholder='np. 4'
                min='3'
                required
              />
            </div>

            <div className='form-group'>
              <label htmlFor='postType'>Rodzaj słupków</label>
              <select
                id='postType'
                name='postType'
                value={formData.postType}
                onChange={handleInputChange}
              >
                <option value='concrete'>Słupki betonowe (45 zł/szt)</option>
                <option value='metal'>Słupki metalowe (85 zł/szt)</option>
                <option value='wooden'>Słupki drewniane (35 zł/szt)</option>
              </select>
            </div>

            <div className='form-group'>
              <label htmlFor='postSpacing'>Rozstaw słupków (metry)</label>
              <select
                id='postSpacing'
                name='postSpacing'
                value={formData.postSpacing}
                onChange={handleInputChange}
              >
                <option value='2'>2 metry</option>
                <option value='2.5'>2.5 metra</option>
                <option value='3'>3 metry</option>
              </select>
            </div>

            <div className='form-group'>
              <label htmlFor='fenceType'>Rodzaj wypełnienia</label>
              <select
                id='fenceType'
                name='fenceType'
                value={formData.fenceType}
                onChange={handleInputChange}
              >
                <option value='mesh'>Siatka ogrodzeniowa</option>
                <option value='panels'>Panele 3D</option>
                <option value='wooden'>Płot drewniany</option>
              </select>
            </div>

            <div className='form-group'>
              <label htmlFor='fenceHeight'>Wysokość ogrodzenia</label>
              <select
                id='fenceHeight'
                name='fenceHeight'
                value={formData.fenceHeight}
                onChange={handleInputChange}
              >
                <option value='150'>150 cm</option>
                <option value='180'>180 cm</option>
                <option value='200'>200 cm</option>
              </select>
            </div>

            <div className='form-group checkbox-group'>
              <label>
                <input
                  type='checkbox'
                  name='hasGate'
                  checked={formData.hasGate}
                  onChange={handleInputChange}
                />
                Brama wjazdowa (+800 zł)
              </label>
            </div>

            <div className='form-group checkbox-group'>
              <label>
                <input
                  type='checkbox'
                  name='hasWicket'
                  checked={formData.hasWicket}
                  onChange={handleInputChange}
                />
                Furtka (+400 zł)
              </label>
            </div>

            <div className='form-group'>
              <label htmlFor='region'>Województwo (dla kosztów transportu)</label>
              <select
                id='region'
                name='region'
                value={formData.region}
                onChange={handleInputChange}
              >
                <option value='mazowieckie'>Mazowieckie (transport gratis)</option>
                <option value='śląskie'>Śląskie (+100 zł)</option>
                <option value='małopolskie'>Małopolskie (+150 zł)</option>
                <option value='wielkopolskie'>Wielkopolskie (+200 zł)</option>
                <option value='dolnośląskie'>Dolnośląskie (+250 zł)</option>
                <option value='other'>Inne (+300 zł)</option>
              </select>
            </div>

            <button onClick={calculateCost} className='btn calculate-btn'>
              Oblicz koszt
            </button>
          </div>

          {result && (
            <div className='calculator-result'>
              <h2>Wycena dla {result.perimeter}m ogrodzenia</h2>

              <div className='result-breakdown'>
                <div className='result-item'>
                  <span>
                    Słupki ({result.breakdown.posts.quantity} szt ×{' '}
                    {result.breakdown.posts.unitPrice} zł)
                  </span>
                  <span>{result.breakdown.posts.total.toLocaleString('pl-PL')} zł</span>
                </div>

                <div className='result-item'>
                  <span>
                    Wypełnienie ({result.breakdown.fencing.quantity}m ×{' '}
                    {result.breakdown.fencing.unitPrice} zł)
                  </span>
                  <span>{result.breakdown.fencing.total.toLocaleString('pl-PL')} zł</span>
                </div>

                <div className='result-item'>
                  <span>
                    Robocizna ({result.breakdown.labor.quantity}m ×{' '}
                    {result.breakdown.labor.unitPrice} zł)
                  </span>
                  <span>{result.breakdown.labor.total.toLocaleString('pl-PL')} zł</span>
                </div>

                {result.breakdown.extras > 0 && (
                  <div className='result-item'>
                    <span>Dodatki (brama/furtka)</span>
                    <span>{result.breakdown.extras.toLocaleString('pl-PL')} zł</span>
                  </div>
                )}

                {result.breakdown.transport > 0 && (
                  <div className='result-item'>
                    <span>Transport</span>
                    <span>{result.breakdown.transport.toLocaleString('pl-PL')} zł</span>
                  </div>
                )}
              </div>

              <div className='result-total'>
                <strong>Łączny koszt: {result.total.toLocaleString('pl-PL')} zł</strong>
              </div>

              <div className='result-note'>
                <p>
                  <strong>Uwaga:</strong> To jest orientacyjna wycena. Ostateczna cena może się
                  różnić w zależności od warunków terenowych, dostępu do działki i indywidualnych
                  wymagań.
                </p>
                <p>Skontaktuj się z nami po dokładną wycenę!</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Calculator
