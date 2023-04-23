import { useEffect, useState } from 'react';
import styles from '../../src/styles/galpoes_css/About.module.css';
import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

export default function About() {
  // const [ifixValue, setIfixValue] = useState(null);

  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await fetch('https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IFIX11.SAO&apikey=LQCIT1QDVJVJ0KCG');
  //     const data = await response.json();
  //     setIfixValue(data['Global Quote']['05. price']);
  //   }

  //   fetchData();
  // }, []);

  return (
    <section>
      <div className={styles.container_count}>
        {/* <p>Cotação IFIX: {ifixValue}</p> */}
        <p>Cotação IFIX: 0</p>
      </div>

      <div className={styles.bg}>
        <div className={styles.container_numbers}>
          <div className={styles.numbers}>
            <p className={styles.number}>77</p>
            <p className={styles.opportunity}>Oportunidades</p>
          </div>
          <div className={styles.numbers}>
            <p className={styles.number}>25</p>
            <p className={styles.opportunity}>Contratos Fechados</p>
          </div>
          <div className={styles.numbers}>
            <p className={styles.number}>15</p>
            <p className={styles.opportunity}>Cotas</p>
          </div>
        </div>

        <div className={styles.container_opportunity}>
          <div>
            <h2>Conheça a Sort</h2>
            <p className={styles.text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ipsam ad, reiciendis deserunt, iste exercitationem, praesenti
              um non laboriosam quasi eum quibusdam maiores quo consectetur quas assumenda minus quis expedita alias!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam consequatur praesentium, sapiente nesciunt corporis voluptatem aliquid vel minima ex delectus qu
              am debitis cum suscipit quisquam tempore ab voluptates cumque. Unde?
            </p>
          </div>
          <div className={styles.teste}>
            <div className={styles.bg_details}></div>
            <Image 
              src={'/background.jpg'}
              alt='Bg'
              width={220}
              height={220}
              className={styles.img}
            />
          </div>
        </div>
      </div>

      <div className={styles.container_logistics}>
          <h2>Porque investir em galpões logísticos com a Sort</h2>
          <div className={styles.container_about}>
            <div className={styles.text_about}> 
              <p>O litoral catarinense cresce em ritmo acelerado e tem demanda reprimida por galpões logísticos</p>
              <a href="">Ler mais...</a>
              <button>conheça nossas oportunidades</button>
            </div>
            <div>
              <Image 
                src={'/background.jpg'}
                alt='Bg'
                width={500}
                height={260}
                className={styles.img_about}
              />
            </div>
          </div>
        </div>

        <div className={styles.container_logistics}>
          <div className={styles.container_about}>
            <div>
              <Image 
                src={'/background.jpg'}
                alt='Bg'
                width={500}
                height={260}
                className={styles.img_about}
              />
            </div>
            <div className={styles.text_about}> 
              <p>O litoral catarinense cresce em ritmo acelerado e tem demanda reprimida por galpões logísticos</p>
              <a href="">Ler mais...</a>
            </div>
          </div>
        </div>


        <div className={styles.container_opportunity_sell}>
          <h2>Oportunidades à venda</h2>

          <div className={styles.container_carousel}>
            <Swiper slidesPerView={3} loop={true} navigation={true} modules={[Navigation]}>
              <SwiperSlide>
                <div className={styles.opportunity_sell}>
                  <div className={styles.bg_opportunity}></div>
                  <div className={styles.opportunity_config}>
                    <p className={styles.opportunity_name}>Galpão Logístico em Condomínio Fechado</p>

                    <p className={styles.opportunity_location}>Itajaí-SC</p>
                    <p className={styles.opportunity_meters}>2.250m úteis</p>
                  </div>
                  <div className={styles.opportunity_price}>
                    <p className={styles.price}>R$11.250.000,00</p>
                    <p className={styles.view}>Ver imóvel</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.opportunity_sell}>
                  <div className={styles.bg_opportunity}></div>
                  <div className={styles.opportunity_config}>
                    <p className={styles.opportunity_name}>Galpão Logístico em Condomínio Fechado</p>

                    <p className={styles.opportunity_location}>Itajaí-SC</p>
                    <p className={styles.opportunity_meters}>2.250m úteis</p>
                  </div>
                  <div className={styles.opportunity_price}>
                    <p className={styles.price}>R$11.250.000,00</p>
                    <p className={styles.view}>Ver imóvel</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.opportunity_sell}>
                  <div className={styles.bg_opportunity}></div>
                  <div className={styles.opportunity_config}>
                    <p className={styles.opportunity_name}>Galpão Logístico em Condomínio Fechado</p>

                    <p className={styles.opportunity_location}>Itajaí-SC</p>
                    <p className={styles.opportunity_meters}>2.250m úteis</p>
                  </div>
                  <div className={styles.opportunity_price}>
                    <p className={styles.price}>R$11.250.000,00</p>
                    <p className={styles.view}>Ver imóvel</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.opportunity_sell}>
                  <div className={styles.bg_opportunity}></div>
                  <div className={styles.opportunity_config}>
                    <p className={styles.opportunity_name}>Galpão Logístico em Condomínio Fechado</p>

                    <p className={styles.opportunity_location}>Itajaí-SC</p>
                    <p className={styles.opportunity_meters}>2.250m úteis</p>
                  </div>
                  <div className={styles.opportunity_price}>
                    <p className={styles.price}>R$11.250.000,00</p>
                    <p className={styles.view}>Ver imóvel</p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div> 
          <button>Ver todas as oportunidades</button>
        </div>

        <div className={styles.container_opportunity_location}>
          <h2>Oportunidades para locação</h2>

          <div className={styles.container_carousel}>
            <Swiper slidesPerView={3} loop={true} navigation={true} modules={[Navigation]}>
              <SwiperSlide>
                <div className={styles.opportunity_sell}>
                  <div className={styles.bg_opportunity}></div>
                  <div className={styles.opportunity_config}>
                    <p className={styles.opportunity_name}>Galpão Logístico em Condomínio Fechado</p>

                    <p className={styles.opportunity_location}>Itajaí-SC</p>
                    <p className={styles.opportunity_meters}>2.250m úteis</p>
                  </div>
                  <div className={styles.opportunity_price}>
                    <p className={styles.price}>R$11.250.000,00</p>
                    <p className={styles.view}>Ver imóvel</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.opportunity_sell}>
                  <div className={styles.bg_opportunity}></div>
                  <div className={styles.opportunity_config}>
                    <p className={styles.opportunity_name}>Galpão Logístico em Condomínio Fechado</p>

                    <p className={styles.opportunity_location}>Itajaí-SC</p>
                    <p className={styles.opportunity_meters}>2.250m úteis</p>
                  </div>
                  <div className={styles.opportunity_price}>
                    <p className={styles.price}>R$11.250.000,00</p>
                    <p className={styles.view}>Ver imóvel</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.opportunity_sell}>
                  <div className={styles.bg_opportunity}></div>
                  <div className={styles.opportunity_config}>
                    <p className={styles.opportunity_name}>Galpão Logístico em Condomínio Fechado</p>

                    <p className={styles.opportunity_location}>Itajaí-SC</p>
                    <p className={styles.opportunity_meters}>2.250m úteis</p>
                  </div>
                  <div className={styles.opportunity_price}>
                    <p className={styles.price}>R$11.250.000,00</p>
                    <p className={styles.view}>Ver imóvel</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.opportunity_sell}>
                  <div className={styles.bg_opportunity}></div>
                  <div className={styles.opportunity_config}>
                    <p className={styles.opportunity_name}>Galpão Logístico em Condomínio Fechado</p>

                    <p className={styles.opportunity_location}>Itajaí-SC</p>
                    <p className={styles.opportunity_meters}>2.250m úteis</p>
                  </div>
                  <div className={styles.opportunity_price}>
                    <p className={styles.price}>R$11.250.000,00</p>
                    <p className={styles.view}>Ver imóvel</p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div> 
          <button>Ver todas as oportunidades</button>
        </div>

        <div className={styles.button_pauta}>
          <div className={styles.pauta}>
            <p>Conheça nosso site e toda nossa pauta</p>
            <button>Clique aqui</button>
          </div>
        </div>
    </section>
  );
}
