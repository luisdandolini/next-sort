import styles from '../../src/styles/common/Header.module.css';
import Menu from './Menu';

export default function Header() {

  return(
    <header className={styles.bg_header}>
      <div className={styles.container_menu}>
        <Menu />
      </div>
    </header>
  )
}
