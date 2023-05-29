import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './NavBar.module.scss';
import { getUser } from '../../../redux/usersRedux';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchPhrase, setSearchPhrase] = useState('');

  const isLoggedIn = useSelector(getUser);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`${styles.navbar} navbar navbar-expand-lg navbar-light bg-light`}>
      <div className="container">
        <button
          className={`${styles.menuToggler} navbar-toggler`}
          type="button"
          onClick={toggle}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`${styles.logoContainer} navbar-brand`}>
          <h1 className={styles.logo}><a href="/">camON</a></h1>
        </div>
        <div className={`${styles.menu} ${isOpen ? 'show' : ''} collapse navbar-collapse`}>
          <ul className={`${styles.navMenu} navbar-nav mr-auto`}>
            <li className={`${styles.navItem} nav-item`}>
              <a href="/cameras" className={`${styles.navLink} nav-link`}>
                Aparaty
              </a>
            </li>
            <li className={`${styles.navItem} nav-item`}>
              <a href="/lenses" className={`${styles.navLink} nav-link`}>
                Obiektywy
              </a>
            </li>
            <li className={`${styles.navItem} nav-item`}>
              <a href="/accessories" className={`${styles.navLink} nav-link`}>
                Akcesoria
              </a>
            </li>
            <li className={`${styles.navItem} nav-item`}>
              <a href="/sale" className={`${styles.navLink} nav-link ${styles.saleLink}`}>
                <b>WYPRZEDAŻ</b>
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.searchBox}>
          <input
            type="text"
            className="form-control"
            placeholder="Szukaj..."
            value={searchPhrase}
            onChange={(e) => setSearchPhrase(e.target.value)}
          />
        </div>
        <div className={styles.iconContainer}>
          <a href="/favorite" className={styles.iconLink}>
            <i className={`fa fa-heart ${styles.icon}`}></i>
          </a>
          <a href="/cart" className={styles.iconLink}>
            <i className={`fa fa-shopping-cart ${styles.icon}`}></i>
          </a>
          {!isLoggedIn && (
            <a href="/login" className={styles.iconLink}>
              <i className={`fa fa-user ${styles.icon}`}></i>
            </a>
          )}
          {isLoggedIn && (
            <a href="/logout" className={styles.iconLink}>
              <i className={`fa fa-sign-out ${styles.icon}`}></i>
            </a>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
