import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import styles from "../src/styles/Opportunity.module.css";
import api from "../services/api";
import Icon from '@mdi/react';
import { mdiChevronLeft, mdiChevronRight } from '@mdi/js';
import formatPrice from "../functions/formatPrice";
import { useProductImageSlider } from '../functions/changeImage'
import { useMediaQuery } from 'react-responsive';
import OpportunityMobile from './OpportunityMobile';
import { translateObjective } from "../functions/translateObjective";
import { mdiMapMarker } from '@mdi/js';


interface Opportunity {
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

export default function Opportunity() {
  const [isMobile, setIsMobile] = useState(false);
  const isMobileQuery = useMediaQuery({ query: `(max-width: 767px)` });

  const [opportunities, setOpportunities] = useState<Opportunity[]>([]);
  const { currentImageIndices, changeImage } = useProductImageSlider(opportunities);

  useEffect(() => {
    api
      .get('/best-property')
      .then((response) => {
        const formattedData = (Object.values(response.data) as Opportunity[]).map((item: Opportunity) => {
          const sortedMedia = item.media
            .sort((a: any, b: any) => a.position - b.position)
          const imageUrl = sortedMedia && sortedMedia[0] ? sortedMedia[0].url : '';
          return {
            ...item,
            product_media: sortedMedia,
            image: imageUrl,
          };
        });
        setOpportunities(formattedData);
      });
  }, []);

  useEffect(() => {
    setIsMobile(isMobileQuery);
  }, [isMobileQuery]);

  if (isMobile) {
    return <OpportunityMobile />;
  }

  return (
    <section>
      <h1 className={styles.title}>Oportunidades da semana</h1>
      <div className={styles.container_carousel}>
        <Swiper slidesPerView={3} loop={true} navigation={true} modules={[Navigation]}>
          {opportunities.map((opportunity) => (
            <SwiperSlide key={opportunity.id}> 
              <div className={styles.opportunity}>
                <div className={styles.carousel}>
                  {opportunity.product_media.map((media, index) => (
                      <div key={index} className={styles.carouselItem} style={{ display: index === (currentImageIndices[opportunity.id] || 0) ? 'block' : 'none' }}>
                        <div className={styles.bg} style={{ backgroundImage: `url(${media.url})` }}>
                          <p className={styles.sell}>{translateObjective(opportunity.objective)}</p>
                          <div className={styles.navigation}>
                            <div onClick={() => changeImage(opportunity.id, "left")}>
                              <Icon path={mdiChevronLeft} size={1} className={styles.arrow}/>
                            </div>
                            <div onClick={() => changeImage(opportunity.id, "right")}>
                              <Icon path={mdiChevronRight} size={1} className={styles.arrow}/>
                            </div>
                          </div>
                          <div className={styles.container_mobile}>
                            <p className={styles.name}>{opportunity.title}</p> 
                            <div className={styles.config}>
                              <span> {opportunity.zone} úteis</span> 
                              <span>{opportunity.suites} Suítes</span> 
                            </div>
                            <p className={styles.price}>{formatPrice(opportunity.price)}</p> 
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
                <div className={styles.location}>
                  <span className={styles.icon_location}><Icon path={mdiMapMarker} size={.7} color={'#116015'}/>{opportunity.city}</span> 
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