import React, { useEffect, useState } from "react";
import styles from '../../src/styles/todos-imoveis_css/AllImoveis.module.css';
import api from '../../services/api';
import Icon from '@mdi/react';
import { mdiChevronLeft, mdiChevronRight, mdiMapMarker } from '@mdi/js';
import { useProductImageSlider } from '../../functions/changeImage';
import { translateObjective } from "../../functions/translateObjective";
import formatPrice from "../../functions/formatPrice";

interface AllImoveis {
  id: any;
  product_media: Array<{ url: string, position: number }>;
  objective: string;
  image: string;
  title: string;
  zone: string;
  zone_full: string;
  suites: number;
  price: string;
  city: string;
  media: any;
}

export default function AllImoveis() {
  const [allImoveis, setAllImoveis] = useState<AllImoveis[]>([]);
  const { currentImageIndices, changeImage } = useProductImageSlider(allImoveis);
  const [page, setPage] = useState(1);

  useEffect(() => {
    api
    .get(`/property-paginate?page=${page}`)
    .then((response) => {
        const formattedData = response.data.data.map((item: AllImoveis) => {
          const sortedMedia = item.media
            ? item.media.sort((a: any, b: any) => a.position - b.position)
            : [];
          const imageUrl = sortedMedia && sortedMedia[0] ? sortedMedia[0].url : '';
          return {
            ...item,
            product_media: sortedMedia,
            image: imageUrl,
          };
        });
        setAllImoveis(formattedData);
      });
  }, [page]);


  return(
    <section>
      <h1 className={styles.title}>Todos os Imóveis</h1>
      <div className={styles.gridContainer}>
        {allImoveis.map((allImoveis) => (
          <div key={allImoveis.id} className={styles.gridItem}>
            <div className={styles.opportunity}>
              <div className={styles.carousel}>
                {allImoveis.product_media.map((media, index) => (
                    <div key={index} className={styles.carouselItem} style={{ display: index === (currentImageIndices[allImoveis.id] || 0) ? 'block' : 'none' }}>
                      <div className={styles.bg} style={{ backgroundImage: `url(${media.url})` }}>
                        <p className={styles.sell}>{translateObjective(allImoveis.objective)}</p>
                        <div className={styles.navigation}>
                          <div onClick={() => changeImage(allImoveis.id, "left")}>
                            <Icon path={mdiChevronLeft} size={1} className={styles.arrow}/>
                          </div>
                          <div onClick={() => changeImage(allImoveis.id, "right")}>
                            <Icon path={mdiChevronRight} size={1} className={styles.arrow}/>
                          </div>
                        </div>
                        <div className={styles.container_mobile}>
                          <p className={styles.name}>{allImoveis.title}</p> 
                          <div className={styles.config}>
                            <span>{allImoveis.zone_full && allImoveis.zone_full !== '0' && allImoveis.zone_full !== 'm²' ? allImoveis.zone_full.replace('m²', '') : allImoveis.zone.replace('m²', '')}m² úteis</span> 
                            <span>{allImoveis.suites} Suítes</span> 
                          </div>
                          <p className={styles.price}>{formatPrice(allImoveis.price)}</p> 
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
              <div className={styles.location}>
                <span className={styles.icon_location}><Icon path={mdiMapMarker} size={.7} color={'#116015'}/>{allImoveis.city}</span> 
                <span className={styles.view}>Ver imóvel</span>
              </div>
            </div>
          </div>
        ))}
        <button onClick={() => setPage(page => page - 1)}>Página Anterior</button> 
        <button onClick={() => setPage(page => page + 1)}>Próxima Página</button> 
      </div>
    </section>
  ) 
}
