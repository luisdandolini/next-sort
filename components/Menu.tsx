import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import styles from '../src/styles/Menu.module.css';

function Menu() {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div className={styles.container}>
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="me-auto">
          <Image 
            width={72}
            height={28}
            alt='Logo SORT'
            src={'/logosort.png'}
          /> 
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className={styles.me_2}>
          <Image 
            width={24}
            height={24}
            src={'/menuburger.png'}
            alt='Menu'
          />
        </NavbarToggler>
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Menu;