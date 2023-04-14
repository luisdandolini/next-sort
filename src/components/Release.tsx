import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import styles from "../styles/Release.module.css";
import api from "@/services/api";

interface Release {
  id: any;
  price: any;
  product_media: Array<{ url: string }>; 
  image: any;
  name: any;
  zone: any;
  zone_full: any;
  suites: any;
  city: any;
}

export default function Release() {
  const [releases, setReleases] = useState<Release[]>([]);

  useEffect(() => {
    api
      .get('/guest/products-status')
      .then((response) => {
        const formattedData = response.data.map((item: Release) => {
          const imageUrl = item.product_media && item.product_media[0] ? item.product_media[0].url : '';
          return {
            ...item,
            image: imageUrl,
          };
        });
        setReleases(formattedData); // atualiza com os dados formatados
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

  function formatPrice(price: any) {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);
  }

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
          {releases.map((release) => (
            <SwiperSlide key={release.id}>
              <div className={styles.opportunity}>
                <div className={styles.bg}  style={{ backgroundImage: `url(${release.image})` }}>
                  <p className={styles.sell}>Venda</p>
                  <div className={styles.container_mobile}>
                    <p className={styles.name}>{release.name}</p> 
                    <div className={styles.config}>
                      <span style={{position: 'relative', left: '14px'}}>{release.zone}{release.zone_full} úteis</span> <span>{release.suites} Suítes</span> 
                    </div>
                    <p className={styles.price}>{formatPrice(release.price)}</p> 
                  </div>
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