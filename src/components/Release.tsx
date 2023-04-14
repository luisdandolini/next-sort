import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import styles from "../styles/Release.module.css";

export default function Release() {
  return (
    <section>
      <h1 className={styles.title}>Pré - Lançamentos</h1>
      <div className={styles.container_carousel}>
        <Swiper
          slidesPerView={3}
          spaceBetween={0}
          loop={true}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className={styles.opportunity}>
              <div className={styles.bg}>
                <p className={styles.sell}>Venda</p>
                <div className={styles.container_mobile}>
                  <p className={styles.name}>Apartamento</p>
                  <div className={styles.config}>
                  <span>330m úteis</span> <span>4 Suítes</span>
                  </div>
                  <p className={styles.price}>R$ 14.500.000,00</p>
                </div>
              </div>
              <div className={styles.location}>
                <span>Balneário Camboriú</span> <span className={styles.view}>Ver imóvel</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.opportunity}>
              <div className={styles.bg}>
                <p className={styles.sell}>Venda</p>
                <div className={styles.container_mobile}>
                  <p className={styles.name}>Apartamento</p>
                  <div className={styles.config}>
                  <span>330m úteis</span> <span>4 Suítes</span>
                  </div>
                  <p className={styles.price}>R$ 14.500.000,00</p>
                </div>
              </div>
              <div className={styles.location}>
                <span>Balneário Camboriú</span> <span className={styles.view}>Ver imóvel</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.opportunity}>
              <div className={styles.bg}>
                <p className={styles.sell}>Venda</p>
                <div className={styles.container_mobile}>
                  <p className={styles.name}>Apartamento</p>
                  <div className={styles.config}>
                  <span>330m úteis</span> <span>4 Suítes</span>
                  </div>
                  <p className={styles.price}>R$ 14.500.000,00</p>
                </div>
              </div>
              <div className={styles.location}>
                <span>Balneário Camboriú</span> <span className={styles.view}>Ver imóvel</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.opportunity}>
              <div className={styles.bg}>
                <p className={styles.sell}>Venda</p>
                <div className={styles.container_mobile}>
                  <p className={styles.name}>Apartamento</p>
                  <div className={styles.config}>
                  <span>330m úteis</span> <span>4 Suítes</span>
                  </div>
                  <p className={styles.price}>R$ 14.500.000,00</p>
                </div>
              </div>
              <div className={styles.location}>
                <span>Balneário Camboriú</span> <span className={styles.view}>Ver imóvel</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.opportunity}>
              <div className={styles.bg}>
                <p className={styles.sell}>Venda</p>
                <div className={styles.container_mobile}>
                  <p className={styles.name}>Apartamento</p>
                  <div className={styles.config}>
                  <span>330m úteis</span> <span>4 Suítes</span>
                  </div>
                  <p className={styles.price}>R$ 14.500.000,00</p>
                </div>
              </div>
              <div className={styles.location}>
                <span>Balneário Camboriú</span> <span className={styles.view}>Ver imóvel</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.opportunity}>
              <div className={styles.bg}>
                <p className={styles.sell}>Venda</p>
                <div className={styles.container_mobile}>
                  <p className={styles.name}>Apartamento</p>
                  <div className={styles.config}>
                  <span>330m úteis</span> <span>4 Suítes</span>
                  </div>
                  <p className={styles.price}>R$ 14.500.000,00</p>
                </div>
              </div>
              <div className={styles.location}>
                <span>Balneário Camboriú</span> <span className={styles.view}>Ver imóvel</span>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}