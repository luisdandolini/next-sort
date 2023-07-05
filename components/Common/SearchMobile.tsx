import styles from '../../src/styles/common/SearchMobile.module.css';
import Accordion from './Accordion';
import Icon from '@mdi/react';
import { mdiMapMarker, mdiSwapVertical, mdiCurrencyUsd, mdiMagnify } from '@mdi/js';
import { useState, useEffect } from 'react';

export default function SearchMobile({ title, subtitle }: { title: string, subtitle: string }) {
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

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 6000);
    return () => clearTimeout(timeout);
  }, [index, words.length]);

  const customAccordion = {
    paddingTop: '0rem',
    paddingRight: '0rem',
    marginBottom: '0rem',
    marginTop: '-15px',
    color: '#0000008a',
    fontWeight: '600'
  };

  const customAccordionHeader = {
    padding: '.3rem .8rem .8rem 3rem',
    fontSize: '.9rem'
  }

  const customAccordionContent = {
    border: 'none',
    borderBottom: '1px solid #0000008a'
  }

  return(
    <div className={styles.bg}>
      <span className={styles.icon_location}>
        <Icon path={mdiMapMarker} size={.9} color={'#116015'}/>
      </span>
      <Accordion 
        title='Qual a localização?' 
        content={
          <div className={styles.container_input}>
            <div className="checkbox-wrapper-19">
              <input type="checkbox" id="balneario" /> 
              <label htmlFor='balneario' className="check-box" />
              <span id='camboriu'>Bal. Camboriú</span> 
            </div>
            <div className="checkbox-wrapper-19">
              <input type="checkbox" id="bombinhas" /> 
              <label htmlFor='bombinhas' className="check-box" />
              Bombinhas
            </div>
            <div className="checkbox-wrapper-19">
              <input type="checkbox" id="camboriu" /> 
              <label htmlFor="camboriu" className="check-box" />
              Camboriú
            </div>
            <div className="checkbox-wrapper-19">
              <input type="checkbox" id="itajai" /> 
              <label htmlFor="itajai" className="check-box" />
              Itajaí 
            </div>
            <div className="checkbox-wrapper-19">
              <input type="checkbox" id="itapema" /> 
              <label htmlFor="itapema" className="check-box" />
              Itapema
            </div>
            <div className="checkbox-wrapper-19">
              <input type="checkbox" id="porto-belo" /> 
              <label htmlFor="porto-belo" className="check-box" />
              Porto Belo
            </div>
          </div>
        }
        accordionContainer={customAccordion}
        accordionHeader={customAccordionHeader}
        accordionContent={customAccordionContent}
      />
      <span className={styles.icon_firstArrow}>
        <Icon path={mdiSwapVertical} size={1} color={'#116015'}/>
      </span>
      <Accordion title='Tipo do imóvel' 
        content={
          <div className={styles.container_input}>
            <div className="checkbox-wrapper-19">
              <input type="checkbox" id="cbtest-19" /> 
              <label htmlFor="cbtest-19" className="check-box" />
              Apartamento
            </div>
            <div className="checkbox-wrapper-19">
              <input type="checkbox" id="cbtest-19" /> 
              <label htmlFor="cbtest-19" className="check-box" />
              Terreno
            </div>
            <div className="checkbox-wrapper-19">
              <input type="checkbox" id="cbtest-19" /> 
              <label htmlFor="cbtest-19" className="check-box" />
              Casa
            </div>
            <div className="checkbox-wrapper-19">
              <input type="checkbox" id="cbtest-19" /> 
              <label htmlFor="cbtest-19" className="check-box" />
              Sala Comercial
            </div>
          </div>
        }
        accordionContainer={customAccordion}
        accordionHeader={customAccordionHeader}
        accordionContent={customAccordionContent}
      />
      <span className={styles.icon_secondArrow}>
        <Icon path={mdiSwapVertical} size={1} color={'#116015'} />
      </span>
      <Accordion title='Status do imóvel' 
        content={
          <div className={styles.container_input}>
            <div className="checkbox-wrapper-19">
              <input type="checkbox" id="planta" /> 
              <label htmlFor="planta" className="check-box" />
              Na Planta
            </div>
            <div className="checkbox-wrapper-19">
              <input type="checkbox" id="mobiliado" /> 
              <label htmlFor="mobiliado" className="check-box" />
              Mobiliado
            </div>
            <div className="checkbox-wrapper-19">
              <input type="checkbox" id="sem-mobilia" /> 
              <label htmlFor="sem-mobilia" className="check-box" />
              Sem mobília
            </div>
            <div className="checkbox-wrapper-19">
              <input type="checkbox" id="todos" /> 
              <label htmlFor="todos" className="check-box" />
              Todos
            </div>
          </div>
        }
        accordionContainer={customAccordion}
        accordionHeader={customAccordionHeader}
        accordionContent={customAccordionContent}
      />
      <span className={styles.icon_dollar}>
        <Icon path={mdiCurrencyUsd} size={.9} color={'#116015'} />
      </span>
      <Accordion title='Valor aproximado?' 
        content={
          <div className={styles.container_input}>
            <div className="checkbox-wrapper-19">
              <input type="checkbox" id="um" /> 
              <label htmlFor="um" className="check-box" />
              Até R$ 1.000.000
            </div>
            <div className="checkbox-wrapper-19">
              <input type="checkbox" id="dois" /> 
              <label htmlFor="dois" className="check-box" />
              Até R$ 1.500.000
            </div>
            <div className="checkbox-wrapper-19">
              <input type="checkbox" id="tres" /> 
              <label htmlFor="tres" className="check-box" />
              Até R$ 2.000.000
            </div>
            <div className="checkbox-wrapper-19">
              <input type="checkbox" id="quatro" /> 
              <label htmlFor="quatro" className="check-box" />
              Até R$ 2.500.000
            </div>
            <div className="checkbox-wrapper-19">
              <input type="checkbox" id="cinco" /> 
              <label htmlFor="cinco" className="check-box" />
              Até R$ 3.500.000
            </div>
            <div className="checkbox-wrapper-19">
              <input type="checkbox" id="seis" /> 
              <label htmlFor="seis" className="check-box" />
              Até R$ 4.500.000
            </div>
            <div className="checkbox-wrapper-19">
              <input type="checkbox" id="sete" /> 
              <label htmlFor="sete" className="check-box" />
              Até R$ 6.000.000
            </div>
            <div className="checkbox-wrapper-19">
              <input type="checkbox" id="oito" /> 
              <label htmlFor="oito" className="check-box" />
              Até R$ 7.500.000
            </div>
            <div className="checkbox-wrapper-19">
              <input type="checkbox" id="nove" /> 
              <label htmlFor="nove" className="check-box" />
              Até R$ 8.000.000
            </div>
          </div>
        }
        accordionContainer={customAccordion}
        accordionHeader={customAccordionHeader}
        accordionContent={customAccordionContent}
      />
      <div className={`${styles.input_text} ${styles.text_container}`}>
       <Icon path={mdiMagnify} size={1} color={'#116015'} className={styles.lupa}/>
      <input
          className={`${styles.text_animation} ${typing ? styles.pause_animation : ''}`}
          type="text"
          placeholder={words[index]}
          onChange={handleTyping}
      />
      </div>
      <div className={styles.container_button}>
        <button className={styles.button}>
          Buscar
        </button>
      </div>
    </div>
  )
}