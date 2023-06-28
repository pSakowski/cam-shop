import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
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
    <>
      <div className='container'>
        <nav className={styles.navbar}>
          <div className={styles.logoContainer}>
            <Link to="/">
              <h1 className={styles.logo}>cam<span className={styles.logoEnding}>ON</span></h1>
            </Link>
          </div>
          <div className={styles.contactInfo}>
            <p className={styles.phoneNumber}>
              <i className="fa fa-phone"></i> +1 123-456-7890
            </p>
            <p className={styles.liveChat}>
              <i className="fa fa-comment"></i> Live Chat Now
            </p>
          </div>

          <div className={styles.iconContainer}>
            <Link to="/favorite" className={styles.iconLink}>
              <i className='fa fa-heart'></i>
            </Link>
            <Link to="/cart" className={styles.iconLink}>
              <i className='fa fa-shopping-cart'></i>
            </Link>
            {!isLoggedIn && (
              <Link to="/login" className={styles.iconLink}>
                <i className='fa fa-user'></i>
              </Link>
            )}
            {isLoggedIn && (
              <a href="/logout" className={styles.iconLink}>
                <i className='fa fa-sign-out'></i>
              </a>
            )}
          </div>
          <div className={`${styles.searchBox} ${styles.navItem}`}>
            <input
              type="text"
              className="form-control"
              placeholder="Search..."
              value={searchPhrase}
              onChange={(e) => setSearchPhrase(e.target.value)}
            />
          </div>
        </nav>
      </div>
      <div className={styles.mobileMenu} onClick={toggle}>
        <i className={isOpen ? 'fa fa-times' : 'fa fa-bars'}></i>
      </div>
      {isOpen && (
        <div className={styles.menu}>
          <ul className={styles.navMenu}>
            <li className={styles.navItem}>
              <Link to="/cameras" className={styles.navLink}>
                CAMERAS
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/lenses" className={styles.navLink}>
                LENSES
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/accessories" className={styles.navLink}>
                ACCESSORIES
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/sale" className={styles.saleLink}>
                SALE
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default NavBar;
