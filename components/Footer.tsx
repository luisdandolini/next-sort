import styles from '../src/styles/Footer.module.css'
import Icon from '@mdi/react';
import { mdiYoutube, mdiInstagram, mdiFacebook, mdiChartTimelineVariant, mdiMapMarker, mdiEmailNewsletter, mdiPhoneOutline, mdiWhatsapp, mdiAccountBox, mdiHome } from '@mdi/js';

export default function Footer() {
  return(
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div>
          <div className={styles.imobile}>
            <span><Icon path={mdiHome} size={.9} color={'#116015'}/></span> <p>Imóveis</p>
          </div>
          <p className={styles.text}>Na Planta</p>
          <p className={styles.text}>Frente mar</p>
          <p className={styles.text}>Quadra mar</p>
          <p className={styles.text}>Diferenciados</p>
          <p className={styles.text}>Coberturas</p>
          <p className={styles.text}>Terreno e Galpões</p>
          <p className={styles.text}>Casas</p>
          <p className={styles.text}>Locação</p>
        </div>

        <div>
          <div className={styles.imobile}>
            <span><Icon path={mdiAccountBox} size={.9} color={'#116015'}/></span> <p>Contato</p>
          </div>
          <div className={styles.contact}>
            <span><Icon path={mdiWhatsapp} size={.9} color={'#FFF'}/></span> <p>(47) 99733-5093</p>
          </div>
          <div className={styles.contact}>
            <span><Icon path={mdiPhoneOutline} size={.9} color={'#FFF'} /></span> <p>(47) 2033-1116</p>
          </div>
          <p className={styles.text}>contato@sortinvestimentos.com.br</p>
          <div className={styles.location}>
            <span><Icon path={mdiMapMarker} size={.9} color={'#FFF'} /></span><p>Bevenutti Business Center</p>
          </div>
          <p className={styles.text_location}>Rua 700, n 489, sala 2002</p>
          <p className={styles.text_location}>Balneário Camboriú/SC</p>
          <p className={styles.text}>CRECI 5517-J</p>
        </div>
        
        <div>
          <div>
            <div className={styles.imobile}>
              <span><Icon path={mdiEmailNewsletter} size={.9} color={'#116015'} /></span><p>Newsletter</p>
            </div>
            <p className={styles.text_news}>Cadastre-se e fique por dentro das novidades do mercado imobiliário.</p>
            <div>
              <input type="text" placeholder='Seu nome' className={styles.name}/>
              <input type="text" placeholder='Seu melhor e-mail' className={styles.email}/>
              <button className={styles.button}>Enviar</button>
            </div>
          </div>
          <div className={styles.imobile}>
              <span><Icon path={mdiChartTimelineVariant} size={.9} color={'#116015'} /></span><p>Nossas redes</p>
          </div>
          <div className={styles.nets}>
            <span><Icon path={mdiYoutube} size={.9} color={'#FFF'} /></span>
            <span><Icon path={mdiInstagram} size={.9} color={'#FFF'}/></span>
            <span><Icon path={mdiFacebook} size={.9} color={'#FFF'}/></span>
          </div>
        </div>
      </div>
    </footer>
  )
}