import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import styles from "../src/styles/Opportunity.module.css";
import api from "../services/api";

interface Opportunity {
  id: any; 
  name: any;
  zone: any;
  zone_full: any;
  suites: any;
  price: any; 
  city: any;
  image: any;
  product_media: Array<{ url: string }>; 
}


export default function Opportunity() {
  const [opportunities, setOpportunities] = useState<Opportunity[]>([]);

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
  

  function formatPrice(price: any) {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);
  }


  return (
    <section>
      <h1 className={styles.title}>Oportunidades da semana</h1>
      <div className={styles.container_carousel}>
        <Swiper
          slidesPerView={3}
          spaceBetween={0}
          loop={true}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {opportunities.map((opportunity) => (
            <SwiperSlide key={opportunity.id}> 
              <div className={styles.opportunity}>
                <div className={styles.bg}  style={{ backgroundImage: `url(${opportunity.image})` }}>
                  <p className={styles.sell}>Venda</p>
                  <div className={styles.container_mobile}>
                    <p className={styles.name}>{opportunity.name}</p> 
                    <div className={styles.config}>
                      <span style={{position: 'relative', left: '14px'}}>{opportunity.zone}{opportunity.zone_full} úteis</span> <span>{opportunity.suites} Suítes</span> 
                    </div>
                    <p className={styles.price}>{formatPrice(opportunity.price)}</p> 
                  </div>
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