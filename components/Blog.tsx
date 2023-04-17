import styles from "../src/styles/Blog.module.css";

export default function Blog() {
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