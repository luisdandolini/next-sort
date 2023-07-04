import React, { useState } from 'react';
import styles from '../../src/styles/common/Menu.module.css';
import Image from 'next/image';
import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';
import Link from 'next/link';

function Menu() {
  const [openMenu, setOpenMenu] = useState(false)

  const handleToggle = () => setOpenMenu(!openMenu);

  return (
    <div className={styles.container_header}>
      <Link href="/">
          <Image 
            width={80}
            height={32}
            alt='Logo SORT'
            src={'/logosort.png'}
            className={styles.logo}
          /> 
      </Link>
      <div className={styles.container_menu}>
        <div>
          <Link href="/todos-imoveis">
            <p>Ver imóveis</p>
          </Link>
        </div>
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
                <li><a>Empreendimentos</a></li>
                <li><a>Galpões Logísticos</a></li>
                <li><a>Blog</a></li>
                <li><a>Sobre a Sort</a></li>
              </ul>
            </div>
          }
        </div>
      </div>
    </div>
  );
}

export default Menu;