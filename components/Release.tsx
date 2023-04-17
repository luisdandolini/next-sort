import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import styles from "../src/styles/Release.module.css";
import api from "../services/api";
import Icon from '@mdi/react';
import { mdiChevronLeft, mdiChevronRight } from '@mdi/js';
import formatPrice from '../functions/formatPrice';
import { useProductImageSlider } from '../functions/changeImage'

interface Release {
  id: any;
  price: string;
  product_media: Array<{ url: string, position: number }>;
  image: string;
  name: string;
  zone: string;
  suites: number;
  city: string;
}

export default function Release() {
  const [releases, setReleases] = useState<Release[]>([]);
  const { currentImageIndices, changeImage } = useProductImageSlider(releases);

  useEffect(() => {
    api
      .get('/guest/products-status')
      .then((response) => {
        console.log(response, 'RELEASE')
        const formattedData = response.data.map((item: Release) => {
          const imageUrl = item.product_media && item.product_media[0] ? item.product_media[0].url : '';
          return {
            ...item,
            image: imageUrl,
          };
        });
        setReleases(formattedData);
      })
      .catch((error) => {
        if (error.response && error.response.status === 429) {
          setTimeout(() => {
            api.get('/guest/products-status')
              .then((response) => {
                setReleases(response.data)
              })
              .catch((error) => {
                console.log(error)
              })
          }, 5000) 
        }
      })
  }, []);

  return (
    <section>
      <h1 className={styles.title}>Pré - Lançamentos</h1>
      <div className={styles.container_carousel}>
        <Swiper slidesPerView={3} loop={true} navigation={true} modules={[Navigation]}>
          {releases.map((release) => (
            <SwiperSlide key={release.id}>
              <div className={styles.opportunity}>
                <div className={styles.carousel}>
                  {release.product_media
                    .sort((a, b) => a.position - b.position)
                    .map((media, index) => (
                      <div key={index} className={styles.carouselItem} style={{ display: index === (currentImageIndices[release.id] || 0) ? 'block' : 'none' }}>
                        <div className={styles.bg} style={{ backgroundImage: `url(${media.url})` }}>
                          <p className={styles.sell}>Venda</p>
                          <div className={styles.navigation}>
                            <div onClick={() => changeImage(release.id, "left")}>
                              <Icon path={mdiChevronLeft} size={1} className={styles.arrow}/>
                            </div>
                            <div onClick={() => changeImage(release.id, "right")}>
                              <Icon path={mdiChevronRight} size={1} className={styles.arrow}/>
                            </div>
                          </div>
                          <div className={styles.container_mobile}>
                            <p className={styles.name}>{release.name}</p> 
                            <div className={styles.config}>
                              <span> {release.zone} úteis</span> 
                              <span>{release.suites} Suítes</span> 
                            </div>
                            <p className={styles.price}>{formatPrice(release.price)}</p> 
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
                <div className={styles.location}>
                  <span>{release.city}</span> <span className={styles.view}>Ver imóvel</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}