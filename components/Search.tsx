import styles from '../src/styles/Search.module.css';
import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import Icon from '@mdi/react';
import { mdiMapMarker } from '@mdi/js';
import { mdiSwapVertical } from '@mdi/js';
import { mdiCurrencyUsd } from '@mdi/js';
import { mdiMagnify } from '@mdi/js';
import SearchMobile from './SearchMobile';


export default function Search() {
  const [isMobile, setIsMobile] = useState(false);
  const isMobileQuery = useMediaQuery({ query: `(max-width: 767px)` });
  const [showOptionsLocation, setShowOptions] = useState(false);
  const [showOptionsType, setShowOptionsType] = useState(false);
  const [showOptionsStatus, setShowOptionsStatus] = useState(false);
  const [showValue, setsShowValue]= useState(false);
  const [index, setIndex] = useState(0);
  const words = ['Digite o nome do empreendimento', 'Buscar por código do imóvel'];
  const [typing, setTyping] = useState(false);

  const handleTyping = (e: any) => {
    if (e.target.value === '') {
      setTyping(false);
    } else {
      setTyping(true);
    }
  };

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

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 6000);
    return () => clearTimeout(timeout);
  }, [index, words.length]);

  useEffect(() => {
    setIsMobile(isMobileQuery);
  }, [isMobileQuery]);

  if (isMobile) {
    return <SearchMobile />;
  }

  return(
      <div className={styles.container_inputs}>
        <div onMouseLeave={handleMouseLeaveLocation}>
          <button onClick={handleButtonLocation} className={`${styles.options_button}  ${showOptionsLocation ? styles.first : styles.first_active}`}>
            <span style={{display: 'flex', alignItems: 'center'}}><Icon path={mdiMapMarker} size={.8} color={'#116015'}/></span> Qual a localização?
          </button>
          {showOptionsLocation && (
            <div className={styles.options_container}>
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
        <div onMouseLeave={handleMouseLeaveLocation}>
          <button onClick={handleButtonType} className={styles.options_button}>
            Tipo do imóvel <span style={{display: 'flex', alignItems: 'center'}}><Icon path={mdiSwapVertical} size={.9} color={'#116015'}/></span>
          </button>
          {showOptionsType && (
            <div className={styles.options_container}>
              <label>
                <input type="checkbox" /> Apartamento
              </label>
              <label>
                <input type="checkbox" /> Terreno
              </label>
              <label>
                <input type="checkbox" /> Casa
              </label>
              <label>
                <input type="checkbox" /> Sala Comercial
              </label>
            </div>
          )}
        </div>
        <div onMouseLeave={handleMouseLeaveLocation}>
          <button onClick={handleButtonStatus} className={styles.options_button}>
            Status do imóvel <span style={{display: 'flex', alignItems: 'center'}}><Icon path={mdiSwapVertical} size={.9} color={'#116015'}/></span>
          </button>
          {showOptionsStatus && (
            <div className={styles.options_container}>
              <label>
                <input className={styles.input} type="checkbox" /> Na Planta
              </label>
              <label>
                <input type="checkbox" /> Mobiliado
              </label>
              <label>
                <input type="checkbox" /> Sem mobília
              </label>
              <label>
                <input type="checkbox" /> Todos
              </label>
            </div>
          )}
        </div>
        <div onMouseLeave={handleMouseLeaveLocation}>
          <button onClick={handleButtonValue} className={styles.options_button}>
          <span style={{display: 'flex', alignItems: 'center'}}><Icon path={mdiCurrencyUsd} size={.9} color={'#116015'}/></span> Valor aproximado 
          </button>
          {showValue && (
            <div className={styles.options_container}>
              <label>
                <input type="checkbox" /> Até R$ 1.000.000
              </label>
              <label>
                <input type="checkbox" /> Até R$ 1.500.000
              </label>
              <label>
                <input type="checkbox" /> Até R$ 2.000.000
              </label>
              <label>
                <input type="checkbox" /> Até R$ 2.500.000
              </label>
              <label>
                <input type="checkbox" /> Até R$ 3.500.000
              </label>
              <label>
                <input type="checkbox" /> Até R$ 4.500.000
              </label>
              <label>
                <input type="checkbox" /> Até R$ 6.000.000
              </label>
              <label>
                <input type="checkbox" /> Até R$ 7.500.000
              </label>
              <label>
                <input type="checkbox" /> Acima de R$ 8.000.000
              </label>
            </div>
          )}
        </div>
        <div className={`${styles.input_text} ${styles.text_container}`}>
          <Icon path={mdiMagnify} size={1} color={'#116015'} className={styles.lupa}/>
          <input
            className={`${styles.text_animation} ${typing ? styles.pause_animation : ''}`}
            type="text"
            placeholder={words[index]}
            onChange={handleTyping}
          />
        </div>
        <div className={styles.search}>
          <button>Buscar</button>
        </div>
      </div>
  )
}