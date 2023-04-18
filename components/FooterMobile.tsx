import styles from '../src/styles/FooterMobile.module.css';
import Accordion from '../components/Accordion';
import Icon from '@mdi/react';
import { mdiYoutube, mdiInstagram, mdiFacebook } from '@mdi/js';

export default function FooterMobile() {
  return(
    <section className={styles.bg}>
      <Accordion title='Imóveis' content='Teste'/>
      <Accordion title='Contato' content='Teste'/>
      <div>
        <p className={styles.news}>Newsletter</p>
        <p className={styles.text}>Cadastre-se e fique por dentro das novidades do mercado imobiliário.</p>
        <div className={styles.container_inputs}>
          <input className={styles.name} type="text" placeholder='Seu nome'/>
          <input type="text" placeholder='Seu melhor e-mail'/>
          <button>Enviar</button>
        </div>
        <div className={styles.nets}>
            <span><Icon path={mdiYoutube} size={.9} color={'#FFF'} /></span>
            <span><Icon path={mdiInstagram} size={.9} color={'#FFF'}/></span>
            <span><Icon path={mdiFacebook} size={.9} color={'#FFF'}/></span>
          </div>
      </div>
    </section>
  )
}