import styles from '../src/styles/Header.module.css';
import Menu from './Menu';
import { useState, useEffect } from 'react';
import Icon from '@mdi/react';
import { mdiMapMarker } from '@mdi/js';
import { mdiSwapVertical } from '@mdi/js';
import { mdiCurrencyUsd } from '@mdi/js';
import { mdiMagnify } from '@mdi/js';

export default function Header() {
  const [active, setActive] = useState('Comprar')
  const [showOptionsLocation, setShowOptions] = useState(false);
  const [showOptionsType, setShowOptionsType] = useState(false);
  const [showOptionsStatus, setShowOptionsStatus] = useState(false);
  const [showValue, setsShowValue]= useState(false);
  const [placeholderIndex, setPlaceholderIndex] = useState(0);

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

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPlaceholderIndex(prevIndex =>
        prevIndex === placeholders.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(intervalId);
  });

  const placeholders = [
    'Buscar por código do imóvel',
    'Digite o nome do empreendimento',
  ];

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
            <span><Icon path={mdiMapMarker} size={.9} color={'#116015'}/></span> Qual a localização?
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
            Tipo do imóvel <span><Icon path={mdiSwapVertical} size={.9} color={'#116015'}/></span>
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
            Status do imóvel <span><Icon path={mdiSwapVertical} size={.9} color={'#116015'}/></span>
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
            Valor aproximado <span><Icon path={mdiCurrencyUsd} size={.9} color={'#116015'}/></span>
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
            <span><Icon path={mdiMagnify} size={.9} color={'#116015'}/></span><input type="text" placeholder={placeholders[placeholderIndex]} />
          </div>
        </div>
        <div className={styles.search}>
          <button>Buscar</button>
        </div>
      </div>
    </header>
  )
}