import { useEffect, useState } from 'react';
import styles from '../../src/styles/todos-imoveis_css/Instagram.module.css';
import axios from 'axios'

interface IFeedItem {
  id: string;
  media_type: "IMAGE" | "VIDEO";
  media_url: string;
  permalink: string;
  caption: string;
  thumbnail_url: string;
}

export default function Instagram() {
  const [feedList, setFeedList] = useState<IFeedItem[]>([])

  async function getInstaFeed() {
    const token = process.env.NEXT_PUBLIC_INSTA_TOKEN
    const fields = "media_url,media_type,permalink,id,caption,thumbnail_url";
    const url = `https://graph.instagram.com/me/media?access_token=${token}&fields=${fields}`

    const { data } = await axios.get(url)
    setFeedList(data.data)
  }

  useEffect(() => {
    getInstaFeed()
  }, [])

  return(
    <section className={styles.container_instagram}>
      <h1 className={styles.title}>Confira todas as novidades do mercardo imobiliário <br /> em nosso instagram</h1>
        <div className={styles.instagram_content}>
          <div className={styles.insta_grid}>
            {feedList?.slice(0, 3).map((post, i) => 
                post.media_type == "VIDEO" ?
                  <a key={post.id} href={post.permalink} target="_blank" rel="noopener noreferrer" style={{width: 400, height: 400}}>
                    <div className={styles.insta_card} key={i} style={{
                      backgroundImage: 'url(' + post.thumbnail_url + ')',
                      backgroundPosition: 'center center',
                      backgroundSize: 'cover',
                      maxWidth: '400px',
                      width: '95%',
                      height: '400px',
                      borderRadius: '6px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      overflow: 'hidden',
                      margin: 'auto'
                    }}>
                      <div className={styles.play_instagram}></div>
                    </div>
                  </a>
              :
                  <a key={post.id} href="https://www.instagram.com/fastsale.br/" target="_blank" rel="noopener noreferrer">
                    <div className={styles.insta_card} key={i} style={{backgroundImage:'url(' + post.media_url + ')',
                      backgroundPosition:'center center',
                      backgroundSize:'cover',
                      width:'400px',
                      height:'400px',
                      borderRadius: '6px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      overflow: 'hidden'
                    }}>
                      <div className={styles.hovered_card}>
                        <p>{post?.caption}</p>
                      </div>    
                    </div>
                  </a>
            )}
          </div>
        </div>
    </section>
  )
}