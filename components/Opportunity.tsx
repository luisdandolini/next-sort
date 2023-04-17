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

interface Opportunity {
  id: any;
  price: string;
  product_media: Array<{ url: string, position: number }>;
  image: string;
  name: string;
  zone: string;
  suites: number;
  city: string;
}

export default function Opportunity() {
  const [opportunities, setOpportunities] = useState<Opportunity[]>([]);
  const { currentImageIndices, changeImage } = useProductImageSlider(opportunities);

  useEffect(() => {
    api
      .get('/guest/products-best')
      .then((response) => {
        console.log(response);
        const formattedData = response.data.map((item: Opportunity) => {
          const imageUrl = item.product_media && item.product_media[0] ? item.product_media[0].url : '';
          return {
            ...item,
            image: imageUrl,
          };
        });
        setOpportunities(formattedData);
      });
  }, []);

  return (
    <section>
      <h1 className={styles.title}>Oportunidades da semana</h1>
      <div className={styles.container_carousel}>
        <Swiper slidesPerView={3} loop={true} navigation={true} modules={[Navigation]}>
          {opportunities.map((opportunity) => (
            <SwiperSlide key={opportunity.id}> 
              <div className={styles.opportunity}>
              <div className={styles.carousel}>
                  {opportunity.product_media
                    .sort((a, b) => a.position - b.position)
                    .map((media, index) => (
                      <div key={index} className={styles.carouselItem} style={{ display: index === (currentImageIndices[opportunity.id] || 0) ? 'block' : 'none' }}>
                        <div className={styles.bg} style={{ backgroundImage: `url(${media.url})` }}>
                          <p className={styles.sell}>Venda</p>
                          <div className={styles.navigation}>
                            <div onClick={() => changeImage(opportunity.id, "left")}>
                              <Icon path={mdiChevronLeft} size={1} className={styles.arrow}/>
                            </div>
                            <div onClick={() => changeImage(opportunity.id, "right")}>
                              <Icon path={mdiChevronRight} size={1} className={styles.arrow}/>
                            </div>
                          </div>
                          <div className={styles.container_mobile}>
                            <p className={styles.name}>{opportunity.name}</p> 
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
                  <span>{opportunity.city}</span> <span className={styles.view}>Ver imóvel</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}