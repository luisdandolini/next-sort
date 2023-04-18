import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from '../src/styles/BlogMobile.module.css';

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const settings = {
    dots: false,
    infinite: true,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "45px",
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
      <h1 className={styles.title}>Blog</h1>
      <Slider {...settings} afterChange={handleAfterChange}>
        <div className={`${styles.container_blog} ${activeIndex === 0 ? styles.activeSlide : styles.inactiveSlide}`}>
          <div className={styles.bg}></div>
        </div>

        <div className={`${styles.container_blog} ${activeIndex === 1 ? styles.activeSlide : styles.inactiveSlide}`}>
          <div className={styles.bg}></div>
        </div>

        <div className={`${styles.container_blog} ${activeIndex === 2 ? styles.activeSlide : styles.inactiveSlide}`}>
          <div className={styles.bg}></div>
        </div>
      </Slider>
    </section>
  );
};

export default Carousel;