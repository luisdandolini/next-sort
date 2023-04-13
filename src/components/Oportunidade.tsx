// import React, { Component } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
import styles from '../styles/Oportunidade.module.css'

// function SampleNextArrow(props: any) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "red" }}
//       onClick={onClick}
//     />
//   );
// }

// function SamplePrevArrow(props: any) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "green" }}
//       onClick={onClick}
//     />
//   );
// }

// export default class CustomArrows extends Component {
//   render() {
//     const settings = {
//       dots: true,
//       infinite: true,
//       slidesToShow: 3,
//       slidesToScroll: 1,
//       nextArrow: <SampleNextArrow />,
//       prevArrow: <SamplePrevArrow />
//     };
//     return (
//       <div className={styles.oportunidade}>
//         <h2>Custom Arrows</h2>
//         <Slider {...settings}>
//           <div className={styles.teste}>
//             <div className={styles.bg}>
//             <p className={styles.sell}>Teste</p>
//             <p className={styles.name}>Teste</p>
//             <div className={styles.config}>
//                 <span>Teste</span>
//             </div>
//             <p className={styles.price}>teste</p>
//             </div>
//             <div className={styles.location}>
//               <span>Balneário</span> <span className={styles.view}>Ver imóvel</span>
//             </div>
//           </div>

//           <div className={styles.teste}>
//             <div className={styles.bg}>
//               <p className={styles.sell}>Teste</p>
//               <p className={styles.name}>Teste</p>
//               <div className={styles.config}>
//                   <span>Teste</span>
//               </div>
//               <p className={styles.price}>teste</p>
//             </div>
//             <div className={styles.location}>
//               <span>Balneário</span> <span className={styles.view}>Ver imóvel</span>
//             </div>
//           </div>

//           <div className={styles.teste}>
//             <div className={styles.bg}>
//               <p className={styles.sell}>Teste</p>
//               <p className={styles.name}>Teste</p>
//               <div className={styles.config}>
//                   <span>Teste</span>
//               </div>
//               <p className={styles.price}>teste</p>
//             </div>
//             <div className={styles.location}>
//               <span>Balneário</span> <span className={styles.view}>Ver imóvel</span>
//             </div>
//           </div>

//           <div className={styles.teste}>
//             <div className={styles.bg}>
//               <p className={styles.sell}>Teste</p>
//               <p className={styles.name}>Teste</p>
//               <div className={styles.config}>
//                   <span>Teste</span>
//               </div>
//               <p className={styles.price}>teste</p>
//             </div>
//             <div className={styles.location}>
//               <span>Balneário</span> <span className={styles.view}>Ver imóvel</span>
//             </div>
//           </div>

//           <div className={styles.teste}>
//             <div className={styles.bg}>
//               <p className={styles.sell}>Teste</p>
//               <p className={styles.name}>Teste</p>
//               <div className={styles.config}>
//                   <span>Teste</span>
//               </div>
//               <p className={styles.price}>teste</p>
//             </div>
//             <div className={styles.location}>
//               <span>Balneário</span> <span className={styles.view}>Ver imóvel</span>
//             </div>
//           </div>

//           <div className={styles.teste}>
//             <div className={styles.bg}>
//               <p className={styles.sell}>Teste</p>
//               <p className={styles.name}>Teste</p>
//               <div className={styles.config}>
//                   <span>Teste</span>
//               </div>
//               <p className={styles.price}>teste</p>
//             </div>
//             <div className={styles.location}>
//               <span>Balneário</span> <span className={styles.view}>Ver imóvel</span>
//             </div>
//           </div>
//         </Slider>
//       </div>
//     );
//   }
// }


import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          769: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
        }}
        scrollbar={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className={styles.teste}>
            <div className={styles.bg}>
              <p className={styles.sell}>Teste</p>
              <p className={styles.name}>Teste</p>
              <div className={styles.config}>
                  <span>Teste</span>
              </div>
              <p className={styles.price}>teste</p>
            </div>
            <div className={styles.location}>
              <span>Balneário</span> <span className={styles.view}>Ver imóvel</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className={styles.teste}>
             <div className={styles.bg}>
               <p className={styles.sell}>Teste</p>
               <p className={styles.name}>Teste</p>
               <div className={styles.config}>
                   <span>Teste</span>
               </div>
               <p className={styles.price}>teste</p>
             </div>
             <div className={styles.location}>
               <span>Balneário</span> <span className={styles.view}>Ver imóvel</span>
             </div>
           </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.teste}>
            <div className={styles.bg}>
              <p className={styles.sell}>Teste</p>
              <p className={styles.name}>Teste</p>
              <div className={styles.config}>
                  <span>Teste</span>
              </div>
              <p className={styles.price}>teste</p>
            </div>
            <div className={styles.location}>
              <span>Balneário</span> <span className={styles.view}>Ver imóvel</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.teste}>
            <div className={styles.bg}>
              <p className={styles.sell}>Teste</p>
              <p className={styles.name}>Teste</p>
              <div className={styles.config}>
                  <span>Teste</span>
              </div>
              <p className={styles.price}>teste</p>
            </div>
            <div className={styles.location}>
              <span>Balneário</span> <span className={styles.view}>Ver imóvel</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.teste}>
            <div className={styles.bg}>
              <p className={styles.sell}>Teste</p>
              <p className={styles.name}>Teste</p>
              <div className={styles.config}>
                  <span>Teste</span>
              </div>
              <p className={styles.price}>teste</p>
            </div>
            <div className={styles.location}>
              <span>Balneário</span> <span className={styles.view}>Ver imóvel</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.teste}>
            <div className={styles.bg}>
              <p className={styles.sell}>Teste</p>
              <p className={styles.name}>Teste</p>
              <div className={styles.config}>
                  <span>Teste</span>
              </div>
              <p className={styles.price}>teste</p>
            </div>
            <div className={styles.location}>
              <span>Balneário</span> <span className={styles.view}>Ver imóvel</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.teste}>
            <div className={styles.bg}>
              <p className={styles.sell}>Teste</p>
              <p className={styles.name}>Teste</p>
              <div className={styles.config}>
                  <span>Teste</span>
              </div>
              <p className={styles.price}>teste</p>
            </div>
            <div className={styles.location}>
              <span>Balneário</span> <span className={styles.view}>Ver imóvel</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.teste}>
            <div className={styles.bg}>
              <p className={styles.sell}>Teste</p>
              <p className={styles.name}>Teste</p>
              <div className={styles.config}>
                  <span>Teste</span>
              </div>
              <p className={styles.price}>teste</p>
            </div>
            <div className={styles.location}>
              <span>Balneário</span> <span className={styles.view}>Ver imóvel</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.teste}>
            <div className={styles.bg}>
              <p className={styles.sell}>Teste</p>
              <p className={styles.name}>Teste</p>
              <div className={styles.config}>
                  <span>Teste</span>
              </div>
              <p className={styles.price}>teste</p>
            </div>
            <div className={styles.location}>
              <span>Balneário</span> <span className={styles.view}>Ver imóvel</span>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
