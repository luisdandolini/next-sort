import styles from '../../src/styles/common/Header.module.css';
import Menu from './Menu';
import { useState, useEffect } from 'react';

export default function Header() {

  return(
    <header className={styles.bg_header}>
      <div className={styles.container_menu}>
        <Menu />
      </div>
    </header>
  )
}
