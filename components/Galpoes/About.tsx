import { useEffect, useState } from 'react';
import styles from '../../src/styles/galpoes_css/About.module.css';
import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import Icon from '@mdi/react';
import { mdiArrowUp, mdiArrowDown } from '@mdi/js';
import { fetchIfix } from '../../services/ifix';
import { fetchBrco11 } from '../../services/brco'

export default function About() {
  const [ifix, setIfix] = useState<number | null>(null);
  const [brco11, setBrco11] = useState<number | null>(null);
  const [ifixVariation, setIfixVariation] = useState<number | null>(null);
  const [brco11Variation, setBrco11Variation] = useState<number | null>(null);
  const [slidesPerView, setSlidesPerView] = useState<number>(3);

  useEffect(() => {
    fetchIfix().then((data) => {
        setIfix(data.value);
        setIfixVariation(data.variation);
    });

    fetchBrco11().then((data) => {
      setBrco11(data.value);
      setBrco11Variation(data.variation);
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
        const bgSort = document.querySelector('.bg_sort');
        if (bgSort) {
            bgSort.style.backgroundPositionY = `${window.scrollY * 0.5}px`;
        }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
}, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 980) {
        setSlidesPerView(1); 
      } else {
        setSlidesPerView(3); 
      }
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section>
      <div className={styles.container_count}>
        <p>Cotações</p>
        <p className={styles.values}>
          IFIX: 
          <span className={styles.value}>
            {ifixVariation !== null && (ifixVariation > 0 ? <Icon path={mdiArrowUp} size={.9} color={'#25db25'} /> : <Icon path={mdiArrowDown} size={.9} color={'#ff0000'} />)}
            {ifix}

            <span className={styles.percentage}>
            {ifixVariation !== null && (ifixVariation > 0 ? '+' : '-')}
            {ifixVariation !== null && <span className={ifixVariation > 0 ? styles.variationUp : styles.variationDown}>{ifixVariation.toFixed(2)}%</span>}
            </span>
          </span>
        </p>
        <p className={styles.values}>
          BRCO11: 
          <span className={styles.value}>
            {brco11Variation !== null && (brco11Variation > 0 ? <Icon path={mdiArrowUp} size={.9} color={'#25db25'} /> : <Icon path={mdiArrowDown} size={.9} color={'#ff0000'} />)}
            {brco11}

            <span className={styles.percentage}>
            {brco11Variation !== null && (brco11Variation > 0 ? '+' : '-')}
            {brco11Variation !== null && <span className={brco11Variation > 0 ? styles.variationUp : styles.variationDown}>{brco11Variation.toFixed(2)}%</span>}
            </span>
          </span>
        </p>
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
      </div>

      <div className={styles.bg_sort}>
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
          <div>
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
          <div className={styles.container_about_second}>
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
            <Swiper slidesPerView={slidesPerView} loop={true} navigation={true} modules={[Navigation]}>
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
            <Swiper slidesPerView={slidesPerView} loop={true} navigation={true} modules={[Navigation]}>
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
