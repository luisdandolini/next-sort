import styles from "../src/styles/Blog.module.css";
import { useMediaQuery } from 'react-responsive';
import { useState, useEffect } from "react";
import BlogMobile from './BlogMobile';

export default function Blog() {
  const [isMobile, setIsMobile] = useState(false);
  const isMobileQuery = useMediaQuery({ query: `(max-width: 767px)` });

  useEffect(() => {
    setIsMobile(isMobileQuery);
  }, [isMobileQuery]);

  if (isMobile) {
    return <BlogMobile />;
  }

  return(
    <section>
      <h1 className={styles.title}>Blog</h1>
      <div className={styles.teste}>
        <div className={styles.container_blog}>
          <div className={styles.bg}></div>
          <div className={styles.bg}></div>
          <div className={styles.bg}></div>
        </div>

      </div>
    </section>
  )
}