import styles from '../../src/styles/imovel_css/ImovelUnicoMobile.module.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import Icon from '@mdi/react';
import { mdiMapMarkerRadius, mdiBedKing, mdiCarBack, mdiRulerSquare, mdiPlusThick, mdiMinusThick } from '@mdi/js';
import { useState } from "react";

export default function ImovelUnicoMobile() {
  const [openDescription, setOpenDescription] = useState(false);
  const [openInfoAp, setOpenInfoAp] = useState(false);
  const [openInfoEmp, setOpenInfoEmp] = useState(false);

  const handleToggleDescription = () => setOpenDescription(!openDescription);
  const handleToggleAp = () => setOpenInfoAp(!openInfoAp);
  const handleToggleEmp = () => setOpenInfoEmp(!openInfoEmp);

  return(
    <section>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper" slidesPerView={1} spaceBetween={10} loop={true}>
        <SwiperSlide>
          <div className={styles.img}></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.img}></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.img}></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.img}></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.img}></div>
        </SwiperSlide>
      </Swiper>

      <div className={styles.container_content}>
        <p>CA021</p>
        <p className={styles.imobile_name}>Casa de alto padrão em condomínio fechado com 3 suítes e 2 vagas de garagem</p>
        <p className={styles.imobile_location}><span><Icon path={mdiMapMarkerRadius} size={.9} /></span> Praia Brava - Itajaí</p>
        <p className={styles.imobile_price}>R$ <span>3.900.000,00</span></p>

        <div className={styles.imobile_config}>
          <p><span><Icon path={mdiBedKing} size={.9} /></span> 3 Quartos</p>
          <p><span><Icon path={mdiCarBack} size={.9} /></span> 3 Vagas</p>
          <p><span><Icon path={mdiRulerSquare} size={.9} /></span> 125 m</p>
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
          <div className={styles.map}></div>
        </div>
      </div>

      <div className={styles.container_buttons}>
        <button>Quero mais informações</button>
        <button>Tirar dúvidas</button>
      </div>
    </section>
  )
}