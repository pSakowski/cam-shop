import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';

const Footer = () => (
  <footer id="sticky-footer" className={`${styles.footer} py-3`}>
    <Container>
      <Row>
        <Col md="6">
          <div className={styles.footerSection}>
            <h5 className={styles.footerSectionTitle}>Join us</h5>
            <p className={styles.footerSectionText}>
              Be part of our community and receive the latest updates, offers, and news.
            </p>
            <Link to="/register" className={styles.footerButton}>
              Join now!
            </Link>
          </div>
        </Col>
        <Col md="6">
          <div className={styles.footerSection}>
            <h5 className={styles.footerSectionTitle}>Follow us</h5>
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
            &copy; 2023 camON Store. All rights reserved. |{' '}
            <Link to="/rules">Terms and Conditions</Link> |{' '}
            <Link to="/privacy-policy">Privacy Policy</Link> |{' '}
            <Link to="/returns">Returns</Link> |{' '}
            <Link to="/contact">Contact</Link>
          </small>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
