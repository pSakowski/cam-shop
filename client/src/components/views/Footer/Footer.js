import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';

const Footer = () => (
  <footer id="sticky-footer" className={`${styles.footer} py-4 mt-5`}>
    <Container>
      <Row>
        <Col md="6">
          <div className={styles.footerSection}>
            <h5 className={styles.footerSectionTitle}>Dołącz do nas</h5>
            <p className={styles.footerSectionText}>
              Bądź częścią naszej społeczności i otrzymuj najnowsze
              aktualizacje, oferty i wiadomości.
            </p>
            <Link to="/register" className={styles.footerButton}>
              Dołącz teraz!
            </Link>
          </div>
        </Col>
        <Col md="6">
          <div className={styles.footerSection}>
            <h5 className={styles.footerSectionTitle}>Obserwuj nas</h5>
            <ul className={`list-inline ${styles.socialIcons}`}>
              <li className={styles.socialIcon}>
                <a href="https://www.instagram.com">
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
              <li className={styles.socialIcon}>
                <a href="https://www.facebook.com">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li className={styles.socialIcon}>
                <a href="https://twitter.com/">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
            </ul>
          </div>
        </Col>
      </Row>

      <Row>
        <Col md="12" className={styles.footerText}>
          <small className={styles.footerCopyright}>
            &copy; 2023 LOGO Sklep. Wszelkie prawa zastrzeżone. |{' '}
            <Link to="/rules">Regulamin</Link> |{' '}
            <Link to="/privacy-policy">Polityka prywatności</Link> |{' '}
            <Link to="/returns">Zwroty</Link> |{' '}
            <Link to="/contact">Kontakt</Link>
          </small>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
