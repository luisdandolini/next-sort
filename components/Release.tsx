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
import { useMediaQuery } from 'react-responsive';
import ReleseaseMobile from "./ReleaseMobile";
import { translateObjective } from "../functions/translateObjective";
import { mdiMapMarker } from '@mdi/js';

interface Release {
  id: any;
  product_media: Array<{ url: string, position: number }>;
  objective: string;
  image: string;
  title: string;
  zone: string;
  suites: number;
  price: string;
  city: string;
  media: any;
}

export default function Release() {
  const [isMobile, setIsMobile] = useState(false);
  const isMobileQuery = useMediaQuery({ query: `(max-width: 767px)` });

  const [releases, setReleases] = useState<Release[]>([]);
  const { currentImageIndices, changeImage } = useProductImageSlider(releases);

  useEffect(() => {
    api
      .get('/best-property')
      .then((response) => {
        const formattedData = (Object.values(response.data) as Release[]).map((item: Release) => {
          const sortedMedia = item.media
            .sort((a: any, b: any) => a.position - b.position)
          const imageUrl = sortedMedia && sortedMedia[0] ? sortedMedia[0].url : '';
          return {
            ...item,
            product_media: sortedMedia,
            image: imageUrl,
          };
        });
        setReleases(formattedData);
      });
  }, []);

  useEffect(() => {
    setIsMobile(isMobileQuery);
  }, [isMobileQuery]);

  if (isMobile) {
    return <ReleseaseMobile />;
  }

  return (
    <section>
      <h1 className={styles.title}>Pré - Lançamentos</h1>
      <div className={styles.container_carousel}>
        <Swiper slidesPerView={3} loop={true} navigation={true} modules={[Navigation]}>
          {releases.map((release) => (
            <SwiperSlide key={release.id}>
              <div className={styles.opportunity}>
                <div className={styles.carousel}>
                  {release.product_media.map((media, index) => (
                      <div key={index} className={styles.carouselItem} style={{ display: index === (currentImageIndices[release.id] || 0) ? 'block' : 'none' }}>
                        <div className={styles.bg} style={{ backgroundImage: `url(${media.url})` }}>
                          <p className={styles.sell}>{translateObjective(release.objective)}</p>
                          <div className={styles.navigation}>
                            <div onClick={() => changeImage(release.id, "left")}>
                              <Icon path={mdiChevronLeft} size={1} className={styles.arrow}/>
                            </div>
                            <div onClick={() => changeImage(release.id, "right")}>
                              <Icon path={mdiChevronRight} size={1} className={styles.arrow}/>
                            </div>
                          </div>
                          <div className={styles.container_mobile}>
                            <p className={styles.name}>{release.title}</p> 
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
                  <span className={styles.icon_location}><Icon path={mdiMapMarker} size={.7} color={'#116015'}/>{release.city}</span> 
                  <span className={styles.view}>Ver imóvel</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}