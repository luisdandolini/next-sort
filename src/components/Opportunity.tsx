import { useState } from 'react';
import styles from '../styles/Opportunity.module.css';

export default function Opportunity() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const opportunities = [
    {
      id: 1,
      type: 'VENDA',
      name: 'Apartamento Infinity Coast',
      location: 'Balneário Camboriú',
      specs: ['330m', '4 Suítes'],
      price: 'R$ 14.500.000,00'
    },
    {
      id: 2,
      type: 'VENDA',
      name: 'Apartamento',
      location: 'Balneário Camboriú',
      specs: ['330m', '4 Suítes'],
      price: 'R$ 14.500.000,00'
    },
    {
      id: 3,
      type: 'VENDA',
      name: 'Meia Praia',
      location: 'Balneário Camboriú',
      specs: ['330m', '4 Suítes'],
      price: 'R$ 14.500.000,00'
    },
    {
      id: 4,
      type: 'VENDA',
      name: 'Balneário',
      location: 'Balneário Camboriú',
      specs: ['330m', '4 Suítes'],
      price: 'R$ 14.500.000,00'
    },
    {
      id: 5,
      type: 'VENDA',
      name: 'Apartamento Infinity Coast',
      location: 'Balneário Camboriú',
      specs: ['330m', '4 Suítes'],
      price: 'R$ 14.500.000,00'
    },
    {
      id: 6,
      type: 'VENDA',
      name: 'Apartamento Infinity Coast',
      location: 'Balneário Camboriú',
      specs: ['330m', '4 Suítes'],
      price: 'R$ 14.500.000,00'
    }
  ];

  const numSlides = opportunities.length - 2; // Atualizado

  function prevSlide() {
    setCurrentSlide(currentSlide === 0 ? numSlides - 1 : currentSlide - 1);
  }

  function nextSlide() {
    setCurrentSlide(currentSlide === numSlides - 1 ? 0 : currentSlide + 1);
  }

  return (
    <section className={styles.teste}>
      <h1 className={styles.title}>Oportunidades da semana</h1>
      <div className={styles.container}>
        <div onClick={prevSlide} className={styles.prev}>Prev</div>
        <div className={styles.carousel}>
        {opportunities.slice(currentSlide, currentSlide + 3).map(opportunity => (
            <div className={styles.opportunity} key={opportunity.id}>
              <div className={styles.bg}>
                <p className={styles.sell}>{opportunity.type}</p>
                <p className={styles.name}>{opportunity.name}</p>
                <div className={styles.config}>
                  {opportunity.specs.map(spec => (
                    <span key={spec}>{spec}</span>
                  ))}
                </div>
                <p className={styles.price}>{opportunity.price}</p>
              </div>
              <div className={styles.location}>
                <span>{opportunity.location}</span> <span className={styles.view}>Ver imóvel</span>
              </div>
            </div>
          ))}
        </div>
        <div onClick={nextSlide}>Next</div>
      </div>
    </section>
  );
}
