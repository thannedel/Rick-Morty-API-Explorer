import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css'

export default function NavBar() {
  return (
    <nav className={styles.navbar}>
      <h1>
        <NavLink to='/' >Rick and Morty</NavLink>
      </h1>
      <div className={styles.links}>
        <NavLink exact to='/' activeClassName={styles.selectedLink}>Characters</NavLink>
        <NavLink
        strict to='/episodes'
        activeClassName={styles.selectedLink}>
          Episodes
        </NavLink>
        <NavLink
          to='/locations'
        activeClassName={styles.selectedLink}>
          Locations
        </NavLink>
      </div>
    </nav>
  );
}
