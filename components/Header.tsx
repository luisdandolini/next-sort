import styles from '../src/styles/Header.module.css';
import Menu from './Menu';
import { useState, useEffect } from 'react';

export default function Header() {
  const [active, setActive] = useState('Comprar')

  const handleClickButtonBuy = () => {
    setActive('Comprar')
  }

  const handleClickButtonToHire = () => {
    setActive('Alugar')
  }

  return(
    <header className={styles.bg_header}>
      <div className={styles.container_menu}>
        <Menu />
      </div>
      <div className={styles.title}>
        <h1>Imóvel não se compra, se investe.</h1>
        <p>Chamamos isso de consultoria Sort.</p>
      </div>
      <div className={styles.container}>
        <div className={styles.container_buttons}>
          <div className={`${styles.buy} ${active === 'Comprar' ? styles.setBuy : ''}`} onClick={handleClickButtonBuy}>Comprar</div>
          <div className={`${styles.hire} ${active === 'Alugar' ? styles.setHire : ''}`} onClick={handleClickButtonToHire}>Alugar</div>
        </div>
      </div>
    </header>
  )
}
