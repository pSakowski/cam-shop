import { useState } from 'react';
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
  Collapse,
  Container,
} from 'reactstrap';
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
    <Navbar color="light" light expand="md" className={styles.navbar}>
      <Container>
        <Navbar className={styles.logoContainer}>
          <NavbarBrand href="/">
            <h1 className={styles.logo}>LOGO</h1>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} className={styles.menuToggler} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className={`${styles.menu} ml-auto`} navbar>
              <NavLink href="/cameras">Cameras</NavLink>
              <NavLink href="/lenses">Lenses</NavLink>
              <NavLink href="/accessories">Accessories</NavLink>
              <NavLink href="/sale"><b>Sale</b></NavLink>
            </Nav>
          </Collapse>
          <div className={styles.searchBox}>
            <input
              type="text"
              className="form-control"
              placeholder="Szukaj produktu.."
              value={searchPhrase}
              onChange={(e) => setSearchPhrase(e.target.value)}
            />
          </div>
          <div className={styles.iconContainer}>
            <NavLink href="/favorite">
              <i className={`fa fa-heart ${styles.icon}`}></i>
            </NavLink>
            <NavLink href="/cart">
              <i className={`fa fa-shopping-cart ${styles.icon}`}></i>
            </NavLink>
            {!isLoggedIn && (
              <NavLink href="/login">
                <i className={`fa fa-user ${styles.icon}`}></i>
              </NavLink>
            )}
            {isLoggedIn && (
              <NavLink href="/logout">
                <i className={`fa fa-sign-out ${styles.icon}`}></i>
              </NavLink>
            )}
          </div>
        </Navbar>
      </Container>
    </Navbar>
  );
};

export default NavBar;
