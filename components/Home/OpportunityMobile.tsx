import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from '../../src/styles/home/OpportunityMobile.module.css';
import api from "../../services/api";
import { useProductImageSlider } from '../../functions/changeImage';
import formatPrice from '../../functions/formatPrice';
import Icon from '@mdi/react';
import { mdiChevronLeft, mdiChevronRight, mdiMapMarker } from '@mdi/js';
import { translateObjective } from "../../functions/translateObjective";

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

const OpportunityMobile = () => {
  const [activeIndex, setActiveIndex] = useState(0);

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
  
  const settings = {
    dots: false,
    infinite: true,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "40px",
    responsive: [
      {
        breakpoint: 414,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          beforeChange: (current: any, next: any) => setActiveIndex(next),
        }
      }
    ]
  };

  const handleAfterChange = (current: any) => {
    setActiveIndex(current);
  };

  return (
    <section>
      <h1 className={styles.title}>Oportunidades da semana</h1>
      <Slider {...settings} afterChange={handleAfterChange}>
        {opportunities.map((opportunity, index) => (
          <div key={opportunity.id} className={`${styles.container_immobile} ${activeIndex === index ? styles.activeSlide : styles.inactiveSlide}`}>
            <div className={styles.immobile_bg} style={{backgroundImage: `url(${opportunity.product_media[currentImageIndices[opportunity.id] || 0]?.url || ''})`,}}>
              <div className={styles.objective}>
                <p>{translateObjective(opportunity.objective)}</p>
              </div>
              <div className={styles.buttons}>
                <div className={styles.prevImageButton} onClick={() => changeImage(opportunity.id, 'left')}>
                  <Icon path={mdiChevronLeft} size={1} className={styles.arrow}/>
                </div>
                <div className={styles.nextImageButton} onClick={() => changeImage(opportunity.id, 'right')}>
                  <Icon path={mdiChevronRight} size={1} className={styles.arrow}/>
                </div>
              </div>
              <div className={styles.config_immobile}>
                <p>{opportunity.title}</p>
                <span>{opportunity.zone} úteis</span> <span>{opportunity.suites} Suítes</span>
              </div>
              <div className={styles.container_price_immobile}>
                <div className={styles.price_immobile}>
                  <p>{formatPrice(opportunity.price)}</p>
                </div>
                <div className={styles.location_immobile}>
                  <span><Icon path={mdiMapMarker} size={.7} color={'#116015'}/>{opportunity.city}</span>
                  <span className={styles.view_immobile}>Ver imóvel</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default OpportunityMobile;