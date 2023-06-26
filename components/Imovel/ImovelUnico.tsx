import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import styles from '../../src/styles/imovel_css/ImovelUnico.module.css';
import Icon from '@mdi/react';
import { mdiMapMarkerRadius, mdiBedKing, mdiCarBack, mdiRulerSquare, mdiPlusThick, mdiMinusThick } from '@mdi/js';
import { useState, useEffect } from "react";
import { useMediaQuery } from 'react-responsive';
import ImovelUnicoMobile from "./ImovelUnicoMobile";
import { useRouter } from 'next/router';
import api from "../../services/api";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Maps from "../Common/Maps";

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

export default function ImovelUnico() {
  const [isMobile, setIsMobile] = useState(false);
  const isMobileQuery = useMediaQuery({ query: `(max-width: 767px)` });
  const [openDescription, setOpenDescription] = useState(false);
  const [openInfoAp, setOpenInfoAp] = useState(false);
  const [openInfoEmp, setOpenInfoEmp] = useState(false);
  const [selectedYears, setSelectedYears] = useState(3);
  const [imovelData, setImovelData] = useState<ImovelData | null>(null);
  const [modalMap, setModalMap] = useState(false);
  const router = useRouter();
  const openModal = () => setModalMap(!modalMap);

  const handleToggleDescription = () => setOpenDescription(!openDescription);
  const handleToggleAp = () => setOpenInfoAp(!openInfoAp);
  const handleToggleEmp = () => setOpenInfoEmp(!openInfoEmp);
  const handleSelectYears = (years: any) => {
    setSelectedYears(years);
  };

  useEffect(() => {
    const { slug } = router.query;

    if (slug) {
      api
        .get(`/property/${slug}`)
        .then((response) => {
          console.log(response.data)
          const imovelData = response.data; 
          setImovelData(imovelData);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [router.query]);;

  useEffect(() => {
    setIsMobile(isMobileQuery);
  }, [isMobileQuery]);

  if (isMobile) {
    return <ImovelUnicoMobile />;
  }

  return(
    <section id="imovel">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper" slidesPerView={3} spaceBetween={10} loop={true}>
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
          <div>
            <div className={styles.container_infos}>
              <div>
                <p className={styles.imobile_code}>{imovelData.sku}</p>
                <p className={styles.imobile_name}>{imovelData.title}</p>  
                <div className={styles.imobile_location}>
                  <p><span><Icon path={mdiMapMarkerRadius} size={.9} /></span> {imovelData.city}</p>
                  <button onClick={openModal}>Mapa</button>
                </div>
                <div className={styles.imobile_config}>
                  <p><span><Icon path={mdiBedKing} size={.9} /></span> {imovelData.rooms} Quartos</p>
                  <p><span><Icon path={mdiCarBack} size={.9} /></span> {imovelData.suites} Vagas</p>
                  <p><span><Icon path={mdiRulerSquare} size={.9} /></span> {imovelData.zone_full ? imovelData.zone_full : imovelData.zone}</p>
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
              </div>

              <div>
                <div>
                  <div className={styles.imobile_price}>
                  <p className={styles.price}>R$ <span>{Number(imovelData.price).toLocaleString('pt-BR', {minimumFractionDigits: 2})}</span></p>
                    <p>Condições de pagamento</p>
                    <button className={styles.information}>Quero mais informações</button>
                    <button className={styles.doubts}>Tirar dúvidas</button>
                  </div>
                </div>

                <div>
                  <div className={styles.valuation}>
                    <p className={styles.simulation}>Simulação de Valorização</p>
                    <div className={styles.continer_pricce}>
                      <div onClick={() => handleSelectYears(3)}>
                        <p className={selectedYears === 3 ? styles.selected : ''}>3 anos</p>
                      </div>
                      <div onClick={() => handleSelectYears(5)}>
                        <p className={selectedYears === 5 ? styles.selected : ''}>5 anos</p>
                      </div>
                      <div onClick={() => handleSelectYears(10)}>
                        <p className={selectedYears === 10 ? styles.selected : ''}>10 anos</p>
                      </div>
                    </div>
                    <div className={styles.price_value}>
                      R$ {selectedYears * 1_000_000}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }
      <Modal isOpen={modalMap} toggle={openModal} className="modal-dialog-centered">
        <ModalHeader toggle={openModal}>Mapa</ModalHeader>
        <ModalBody>
          <Maps latI={-23.550520} lngI={-46.633308} zoomLevel={13}/>  
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={openModal}>
            Fecar
          </Button>
        </ModalFooter>
      </Modal>
    </section>
  )
}
