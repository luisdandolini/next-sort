import styles from '../../src/styles/todos-imoveis_css/GuideInvestor.module.css';
import Guide from './../../public/mockup guia 1.png';
import Image from 'next/image';

export default function GuideInvestor() {
  return(
    <section className={styles.container_guide}>
      <div className={styles.container}>
        <div className={styles.photo}>
          <p className={styles.guide}>Quer saber qual a melhor opção para você investir?</p>

          <p className={styles.download}>Baixe o nosso</p>
          <h1 className={styles.title}>Guia do Investidor</h1>
          <p>E tenha acesso a informações</p>
          <button className={styles.button}>Baixar agora!</button>
        </div>
        <div>
          <Image 
            src={Guide}
            className={styles.img_guide}
          />
        </div>
      </div>

    </section>
  )
}