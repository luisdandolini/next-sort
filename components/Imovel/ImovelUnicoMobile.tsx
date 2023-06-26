import styles from '../../src/styles/imovel_css/ImovelUnicoMobile.module.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import Icon from '@mdi/react';
import { mdiMapMarkerRadius, mdiBedKing, mdiCarBack, mdiRulerSquare, mdiPlusThick, mdiMinusThick } from '@mdi/js';
import { useState, useEffect } from "react";
import api from '../../services/api';
import { useRouter } from 'next/router';
import Maps from '../Common/Maps';

interface ImovelData {
  sku: string;
  title: string;
  price: string;
  city: string;
  media: any;
  rooms: number;
  zone_full: string;
  suites: number;
  price_offer: string;
  zone: string;
}

export default function ImovelUnicoMobile() {
  const [openDescription, setOpenDescription] = useState(false);
  const [openInfoAp, setOpenInfoAp] = useState(false);
  const [openInfoEmp, setOpenInfoEmp] = useState(false);
  const [imovelData, setImovelData] = useState<ImovelData | null>(null);
  const [priceOfferNumber, setPriceOfferNumber] = useState<number>(0);
  const [priceNumber, setPriceNumber] = useState<number>(0);
  const router = useRouter();

  const handleToggleDescription = () => setOpenDescription(!openDescription);
  const handleToggleAp = () => setOpenInfoAp(!openInfoAp);
  const handleToggleEmp = () => setOpenInfoEmp(!openInfoEmp);
  
  useEffect(() => {
    const { slug } = router.query;

    if (slug) {
      api
        .get(`/property/${slug}`)
        .then((response) => {
          console.log(response.data)
          const imovelData = response.data; 
          setImovelData(imovelData);

          if (imovelData.price_offer) {
            const formattedPriceOffer = imovelData.price_offer.replace(/\./g, '').replace(',', '.');
            setPriceOfferNumber(Number(formattedPriceOffer));
          }

          if (imovelData.price) {
            const formattedPrice = imovelData.price.replace(/\./g, '').replace(',', '.');
            setPriceNumber(Number(formattedPrice));
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [router.query]);;

  return(
    <section>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper" slidesPerView={1} spaceBetween={10} loop={true}>
        {
          imovelData && imovelData.media && imovelData.media.map((image: any, index: any) => (
            <SwiperSlide key={index}>
              <div className={styles.img} style={{ backgroundImage: `url(${image.url})` }}></div>
            </SwiperSlide>
          ))
        }
      </Swiper>

      {
        imovelData && (
          <div className={styles.container_content}>
            <p>{imovelData.sku}</p>
            <p className={styles.imobile_name}>{imovelData?.title}</p>
            <p className={styles.imobile_location}><span><Icon path={mdiMapMarkerRadius} size={.9} /></span>{imovelData?.city}</p>
            <p className={styles.imobile_price}>
              {
                imovelData && imovelData.price_offer && imovelData.price_offer !== "0" ?
                  <>
                    R$ <span>{priceOfferNumber.toLocaleString('pt-BR', {minimumFractionDigits: 2})}</span>
                  </>
                :
                  <>
                    R$ <span>{priceNumber.toLocaleString('pt-BR', {minimumFractionDigits: 2})}</span>
                  </>
              }
            </p>

            <div className={styles.imobile_config}>
              <p><span><Icon path={mdiBedKing} size={.9} /></span> {imovelData?.rooms} Quartos</p>
              <p><span><Icon path={mdiCarBack} size={.9} /></span> {imovelData?.suites} Vagas</p>
              <p><span><Icon path={mdiRulerSquare} size={.9} /></span> {imovelData?.zone_full ? imovelData?.zone_full : imovelData?.zone}</p>
            </div>

            <div className={styles.container_description}>
              <div className={styles.tooltip} onClick={handleToggleDescription}>
                <p>Descrição</p> 
                {openDescription ? <Icon path={mdiMinusThick} size={.9} /> : <Icon path={mdiPlusThick} size={.9} />}
              </div>
                {openDescription && <div>Oi</div>}
            </div>

            <div className={styles.container_description}>
              <div className={styles.tooltip} onClick={handleToggleAp}>
                <p>Informações do Apartamento</p> 
                {openInfoAp ? <Icon path={mdiMinusThick} size={.9} /> : <Icon path={mdiPlusThick} size={.9} />}
              </div>
                {openInfoAp && <div>Oi</div>}
            </div>

            <div className={styles.container_description}>
              <div className={styles.tooltip} onClick={handleToggleEmp}>
                <p>Informações do Empreendimento</p> 
                {openInfoEmp ? <Icon path={mdiMinusThick} size={.9} /> : <Icon path={mdiPlusThick} size={.9} />}
              </div>
                {openInfoEmp && <div>Oi</div>}
            </div>

            <div className={styles.container_map}>
              <p>Localização</p>
              <div className={styles.map}>
                <Maps latI={-23.550520} lngI={-46.633308} zoomLevel={13}/>  
              </div>
            </div>
          </div>
        )
      }

      <div className={styles.container_buttons}>
        <button>Quero mais informações</button>
        <button>Tirar dúvidas</button>
      </div>
    </section>
  )
}