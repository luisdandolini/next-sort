import React, { useState } from 'react';
import styles from '../src/styles/Menu.module.css';
import Image from 'next/image';
import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';

function Menu() {
  const [openMenu, setOpenMenu] = useState(false)

  const handleToggle = () => setOpenMenu(!openMenu);

  return (
    <div className={styles.container_header}>
      <Image 
       width={80}
       height={32}
       alt='Logo SORT'
       src={'/logosort.png'}
       className={styles.logo}
      /> 
      <div className={styles.menu}>
        <div onClick={handleToggle} className={styles.toggle}>
          <span className={styles.details}></span>
          <span className={styles.details}></span>
          <span className={styles.details}></span>
        </div>

        {openMenu && 
          <div  className={styles.menu_itens}>
            <div className={styles.close} onClick={handleToggle}>
              <Icon path={mdiClose} size={.9} className={styles.icon}/>
            </div>
            <ul className={styles.links} onClick={handleToggle}>
              <li><a>Blog</a></li>
              <li><a>Ver Imóveis</a></li>
            </ul>
          </div>
        }
      </div>
    </div>
  );
}

export default Menu;