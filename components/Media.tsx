import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import styles from '../src/styles/Media.module.css';
import Image from 'next/image';

export default function Midia() {
  return(
    <section>
      <h1 className={styles.title}>Sort na mídia</h1>
      <div className={styles.media}>
        <div className={styles.container_carousel}>
          <Swiper navigation={true} loop={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide>
              <div className={styles.container_media}>
                <div className={styles.description}>
                  <Image
                    src={'/Logo Forbes.png'}
                    alt={'Logo Forbes'}
                    width={170}
                    height={60}
                    className={styles.img}
                  />
                  <p>Fast Sale é destaque na Forbes</p>
                  <p className={styles.text}>
                    A plataforma digital de venda de imóveis Fast Sale, idealizada pela Sort Investimentos, já é 
                    destaque na mídia nacional. Com previsão de lançamento para setembro de 2021.
                  </p>
                </div>
                <Image
                    src={'/renatosite.png'}
                    alt={'Logo Forbes'}
                    width={250}
                    height={250}
                    className={styles.people}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.container_media}>
                <div className={styles.description}>
                  <Image
                    src={'/Logo Forbes.png'}
                    alt={'Logo Forbes'}
                    width={170}
                    height={60}
                    className={styles.img}
                  />
                  <p>Fast Sale é destaque na Forbes</p>
                  <p className={styles.text}>
                    A plataforma digital de venda de imóveis Fast Sale, idealizada pela Sort Investimentos, já é 
                    destaque na mídia nacional. Com previsão de lançamento para setembro de 2021.
                  </p>
                </div>
                <Image
                    src={'/Logo Forbes.png'}
                    alt={'Logo Forbes'}
                    width={200}
                    height={200}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.container_media}>
                <div className={styles.description}>
                  <Image
                    src={'/Logo Forbes.png'}
                    alt={'Logo Forbes'}
                    width={170}
                    height={60}
                    className={styles.img}
                  />
                  <p>Fast Sale é destaque na Forbes</p>
                  <p className={styles.text}>
                    A plataforma digital de venda de imóveis Fast Sale, idealizada pela Sort Investimentos, já é 
                    destaque na mídia nacional. Com previsão de lançamento para setembro de 2021.
                  </p>
                </div>
                <Image
                    src={'/Logo Forbes.png'}
                    alt={'Logo Forbes'}
                    width={200}
                    height={200}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.container_media}>
                <div className={styles.description}>
                  <Image
                    src={'/Logo Forbes.png'}
                    alt={'Logo Forbes'}
                    width={170}
                    height={60}
                    className={styles.img}
                  />
                  <p>Fast Sale é destaque na Forbes</p>
                  <p className={styles.text}>
                    A plataforma digital de venda de imóveis Fast Sale, idealizada pela Sort Investimentos, já é 
                    destaque na mídia nacional. Com previsão de lançamento para setembro de 2021.
                  </p>
                </div>
                <Image
                    src={'/Logo Forbes.png'}
                    alt={'Logo Forbes'}
                    width={200}
                    height={200}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.container_media}>
                <div className={styles.description}>
                  <Image
                    src={'/Logo Forbes.png'}
                    alt={'Logo Forbes'}
                    width={170}
                    height={60}
                    className={styles.img}
                  />
                  <p>Fast Sale é destaque na Forbes</p>
                  <p className={styles.text}>
                    A plataforma digital de venda de imóveis Fast Sale, idealizada pela Sort Investimentos, já é 
                    destaque na mídia nacional. Com previsão de lançamento para setembro de 2021.
                  </p>
                </div>
                <Image
                    src={'/Logo Forbes.png'}
                    alt={'Logo Forbes'}
                    width={200}
                    height={200}
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  )
}