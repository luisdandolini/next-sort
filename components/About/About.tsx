import styles from '../../src/styles/about/About.module.css';

const About = () => {
  return(
    <section>
      <div className={styles.bg_about}>
        <h1 className={styles.title}>Sobre a Sort</h1>
      </div>
      <div className={styles.container_about}>
        <h2>Maior boutique de investimentos imobiliários do sul do Brasil</h2>
        <div className={styles.container_first}>
          <div className={styles.bg_photo_first}></div>
          <p className={styles.text}>
            Desde 2017 a Sort Investimentos atual no mercado imobiliário com foco em investidores de diferentes perfis e gestão de imóveis , tendo a inovação, a tecnologia e a 
            parceria como pilares. Sediada em Balneário Camboriú, possui atendimento em Miami e Nova Iorque, nos Estados Unidos. Conta com mais de R$7 bilhões em ativos sob assessoria 
            é a única empresa boutique especializada em imóveis que geram lucro para investidores. Além disso, a Sort Investimentos também possui um dos maiores maiores
            marketplaces de imóveis do Brasil, a Fast Sale Imóveis.
          </p>
        </div>
        <div>
          <p className={styles.text_second}>
            Oferece serviços completos no processo de compra, locação, administração e venda de imóveis e terrenos residenciais, comerciais e industriais, além de consultoria e suporte jurídico.
          </p>
          <br />
          <p className={styles.text_second}>
            Atualmente, apenas sob a assessoria da Sort Investimentos, existem mais de R$400 milhões em galpões alugados, 
            com taxa de ocupação de 98,4% e mais de 10 milhões de metros quadrados de terrenos disponíveis para construção de galpões logísticos.
          </p>
          <br />
          <p className={styles.text_second}>
            Tem como compromisso proporcionar uma experiência única na hora do cliente encontrar o imóvel ideal, por meio de ferramentas exclusivas de pesquisas online e o auxílio de uma rede de corretores parceiros. 
            Desta forma, garante ao investidor o esgotamento de todas as opções de imóveis disponíveis no mercado antes da tomada de decisão.
          </p>
          <br />
          <p className={styles.text_second}>
            A Sort Investimentos foi fundada por Renato Monteiro, que carrega 12 anos de notória experiência no mercado imobiliário e de luxo internacional. 
            Atualmente é comandada pelo CEO e especialista em galpões logísticos, Douglas Curi. 
          </p>
        </div>
        <div className={styles.bg_photo_second}></div>
      </div>
    </section>
  )
}

export default About