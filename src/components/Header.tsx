import styles from '../styles/Header.module.css';
import Menu from './Menu';
import { useState } from 'react';

export default function Header() {
  const [active, setActive] = useState('Comprar')
  const [showOptionsLocation, setShowOptions] = useState(false);
  const [showOptionsType, setShowOptionsType] = useState(false);
  const [showOptionsStatus, setShowOptionsStatus] = useState(false);
  const [showValue, setsShowValue]= useState(false);

  const handleButtonLocation = () => {
    setShowOptions(!showOptionsLocation);
  };

  const handleButtonType = () => {
    setShowOptionsType(!showOptionsType);
  };

  const handleButtonStatus = () => {
    setShowOptionsStatus(!showOptionsStatus);
  };

  const handleButtonValue = () => {
    setsShowValue(!showValue);
  };

  const handleMouseLeaveLocation = () => {
    setShowOptions(false);
    setShowOptionsType(false);
    setShowOptionsStatus(false);
    setsShowValue(false);
  };

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
      <div className={styles.container_inputs}>
        <div>
          <button onClick={handleButtonLocation} className={`${styles.options_button}  ${showOptionsLocation ? styles.first : styles.first_active}`}>
            Qual a localização?
          </button>
          {showOptionsLocation && (
            <div className={styles.options_container} onMouseLeave={handleMouseLeaveLocation}>
              <label>
                <input type="checkbox" /> Opção 1
              </label>
              <label>
                <input type="checkbox" /> Opção 2
              </label>
              <label>
                <input type="checkbox" /> Opção 3
              </label>
            </div>
          )}
        </div>
        <div>
          <button onClick={handleButtonType} className={styles.options_button}>
            Tipo do imóvel
          </button>
          {showOptionsType && (
            <div className={styles.options_container} onMouseLeave={handleMouseLeaveLocation}>
              <label>
                <input type="checkbox" /> Opção 1
              </label>
              <label>
                <input type="checkbox" /> Opção 2
              </label>
              <label>
                <input type="checkbox" /> Opção 3
              </label>
            </div>
          )}
        </div>
        <div>
          <button onClick={handleButtonStatus} className={styles.options_button}>
            Status do imóvel
          </button>
          {showOptionsStatus && (
            <div className={styles.options_container} onMouseLeave={handleMouseLeaveLocation}>
              <label>
                <input type="checkbox" /> Opção 1
              </label>
              <label>
                <input type="checkbox" /> Opção 2
              </label>
              <label>
                <input type="checkbox" /> Opção 3
              </label>
            </div>
          )}
        </div>
        <div>
          <button onClick={handleButtonValue} className={styles.options_button}>
            Valor aproximado
          </button>
          {showValue && (
            <div className={styles.options_container} onMouseLeave={handleMouseLeaveLocation}>
              <label>
                <input type="checkbox" /> Opção 1
              </label>
              <label>
                <input type="checkbox" /> Opção 2
              </label>
              <label>
                <input type="checkbox" /> Opção 3
              </label>
            </div>
          )}
        </div>
        <div>
          <div className={styles.container_search}>
              <input type="text" placeholder='Buscar por código do imóvel'/>
          </div>
        </div>
        <div className={styles.search}>
          <button>Buscar</button>
        </div>
      </div>
    </header>
  )
}