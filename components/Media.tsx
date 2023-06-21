/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import styles from '../src/styles/Media.module.css';
import Image from 'next/image';
import api from "../services/api";

interface Media {
  id: any;
  media: string;
  title: string;
  content: string;
}

export default function Midia() {
  const [media, setMedia] = useState<Media[]>([])
  const selectedIds = [25, 26, 27, 82];

  useEffect(() => {
    api
      .get('/blog-posts')
      .then((response) => {
        const postsMedia = response.data
        console.log(postsMedia)
        setMedia(postsMedia)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  const selectedPosts = media.filter(post => selectedIds.includes(post.id));

  return(
    <section>
      <h1 className={styles.title}>Sort na mídia</h1>
      <div id={styles.id} className={styles.media}>
        <div className={styles.container_carousel}>
          <Swiper navigation={true} loop={true} modules={[Navigation]} className="mySwiper">
            {selectedPosts.map((post) => (
              <SwiperSlide key={post.id}>
                <div className={styles.container_media}>
                  <div className={styles.description}>
                    {/* <img 
                      style={{width: '170px', height: '60px'}}
                      src={`https://sort.vps-kinghost.net/media/blog/${post.media}`} 
                      alt={post.title || "Blog post"}
                      className={styles.img}
                    /> */}
                    <p className={styles.title_news}>{post.title}</p>
                    <p className={styles.text} dangerouslySetInnerHTML={{ __html: post.content }}></p>
                  </div>
                  <img 
                      style={{width: '250px', height: '250px', objectFit: 'cover'}}
                      className={styles.people}
                      src={`https://sort.vps-kinghost.net/media/blog/${post.media}`} 
                      alt={post.title || "Blog post"}
                    />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}
