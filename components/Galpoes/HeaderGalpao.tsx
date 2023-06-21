import Menu from "../Common/Menu"
import styles from '../../src/styles/galpoes_css/HeaderGalpao.module.css'

export default function HeaderGalpao() {
  return(
    <header className={styles.bg}>
      <div className={styles.container_menu}>
        <Menu />
      </div>
      <div className={styles.container}>
        <h1>Somos especialistas em <br /> ativos logísticos</h1>
        <div>
          <button>nosso portifólio</button>
        </div>
      </div>
    </header> 
  )
}