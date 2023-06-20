import styles from '../../src/styles/todos-imoveis_css/GuideInvestor.module.css';

export default function GuideInvestor() {
  return(
    <section className={styles.container_guide}>
      <p className={styles.guide}>Quer saber qual a melhor opção para você investir?</p>

      <p className={styles.download}>Baixe o nosso</p>
      <h1 className={styles.title}>Guia do Investidor</h1>
      <p>E tenha acesso a informações</p>

      <button className={styles.button}>Baixar agora!</button>
    </section>
  )
}