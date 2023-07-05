import styles from '../../src/styles/common/Header.module.css';
import Menu from './Menu';
import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const isMobileQuery = useMediaQuery({ query: `(max-width: 767px)` });

  return(
    <header className={styles.bg_header}>
      <div className={styles.container_menu}>
        <Menu />
      </div>
    </header>
  )
}
