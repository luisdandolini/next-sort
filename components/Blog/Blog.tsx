/* eslint-disable @next/next/no-img-element */
import api from "../../services/api";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from '../../src/styles/blog/Blog.module.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

interface BlogData {
  id: any;
  title: string;
  sub_title: string;
  media: any;
  content: any;
  category: string; 
}

interface BlogMore {
  id: any;
  title: string;
  sub_title: string;
  media: any;
  content: any;
  category: string;
}[]


export default function Blog() {
  const router = useRouter();
  const [blogData, setBlogData] = useState<BlogData | null>(null);
  const [blogMore, setBlogMore] = useState<BlogMore[] | null>(null);
  let formattedContent = blogData?.content.replace(/<p>/g, '').replace(/<\/p>/g, '<br /><br />');

  useEffect(() => {
    api.get('/blog-posts').then((response) => {
      console.log('BLOG', response.data)
      setBlogMore(response.data)
    })
  }, [])

  useEffect(() => {
    const { id } = router.query;

    if (id) {
      api
        .get(`/blog-posts-id/${id}`)
        .then((response) => {
          console.log(response.data)
          const blogData = response.data; 
          setBlogData(blogData);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [router.query]);;

  const handleViewBlog = (blogId: any) => {
    router.push(`/post/${blogId}`)
  }

  return(
    <section>
      {
        blogData && (
          <section>
            <div className={styles.container_blog}>
              <div className={styles.container}>
                <div className={styles.container_photo}>
                  <img
                    src={`https://sort.vps-kinghost.net/media/blog/${blogData.media}`}
                    alt={blogData.title}
                    className={styles.photo}
                  />
                </div>
                <h1 className={styles.title}>{blogData.title}</h1>
                <p className={styles.subtitle}>{blogData.sub_title}</p>
                <div className={styles.divider}></div>
                <div>
                <p className={styles.content} dangerouslySetInnerHTML={{ __html: formattedContent.replace(/&nbsp;/g, ' ') }}></p>
                </div>
              </div>
            </div>

            <div className={styles.container_more_swiper}>
              <Swiper slidesPerView={2} loop={true} navigation={true} modules={[Navigation]}>
                    {blogMore && blogMore
                      .filter(blogItem => blogItem.category === blogData.category)
                      .map((blogItem) => (
                    <SwiperSlide key={blogItem.id}>
                      <div className={styles.container_more}>
                        <div>
                          <img 
                            src={`https://sort.vps-kinghost.net/media/blog/${blogItem.media}`}
                            alt=""
                            className={styles.other_photo}
                          />
                        </div>
                        <div>
                          <h1 className={styles.title_more}>{blogItem.title}</h1>
                          <div>
                            <p className={styles.text_more} dangerouslySetInnerHTML={{ __html: formattedContent.replace(/&nbsp;/g, ' ') }}></p>
                          </div>
                        </div>
                        <div className={styles.link_more}>
                          <p onClick={() => handleViewBlog(blogItem.id)}>Ler mais...</p>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>
          </section>
        )
      }
    </section>
  )
}