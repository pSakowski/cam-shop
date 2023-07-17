

import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';

const Footer = () => (
  <footer className={styles.footer}>
    <Row className={styles.newsletterRow}>
      <Col md="1">
        <h5>Subscribe to our newsletter:</h5>
        <form>
          <Row>
            <Col md="4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className={styles.newsletterInput}
              />
            </Col>
            <Col md="4">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className={styles.newsletterInput}
              />
            </Col>
            <Col md="4">
              <button type="submit" className={styles.newsletterButton}>
                Send
              </button>
            </Col>
          </Row>
        </form>
      </Col>
    </Row>
    <Row>
      <Col md="3">
        <div className={styles.footerSection}>
          <h5 className={styles.footerSectionTitle}>Help</h5>
          <ul className={styles.footerList}>
            <li>
              <Link to="/contact" className={styles.footerLink}>
                Contact
              </Link>
            </li>
            <li>
              <Link to="/how-to-buy" className={styles.footerLink}>
                How to Buy?
              </Link>
            </li>
            <li>
              <Link to="/regulations" className={styles.footerLink}>
                Regulations
              </Link>
            </li>
            <li>
              <Link to="/copyright" className={styles.footerLink}>
                Copyright
              </Link>
            </li>
            <li>
              <Link to="/privacy-policy" className={styles.footerLink}>
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/cookies" className={styles.footerLink}>
                Cookies
              </Link>
            </li>
          </ul>
        </div>
      </Col>
      <Col md="3">
        <div className={styles.footerSection}>
          <h5 className={styles.footerSectionTitle}>Information</h5>
          <ul className={styles.footerList}>
            <li>
              <Link to="/costs-delivery" className={styles.footerLink}>
                Costs and Delivery Method
              </Link>
            </li>
            <li>
              <Link to="/payment-methods" className={styles.footerLink}>
                Payment Methods
              </Link>
            </li>
            <li>
              <Link to="/exchanges-returns" className={styles.footerLink}>
                Exchanges and Returns
              </Link>
            </li>
            <li>
              <Link to="/complaints" className={styles.footerLink}>
                Complaints
              </Link>
            </li>
            <li>
              <Link to="/order-status" className={styles.footerLink}>
                Order Status
              </Link>
            </li>
          </ul>
        </div>
      </Col>
      <Col md="3">
        <div className={styles.footerSection}>
          <h5 className={styles.footerSectionTitle}>My account</h5>
          <ul className={styles.footerList}>
            <li>
              <Link to="/costs-delivery" className={styles.footerLink}>
                Costs and Delivery Method
              </Link>
            </li>
            <li>
              <Link to="/payment-methods" className={styles.footerLink}>
                Payment Methods
              </Link>
            </li>
            <li>
              <Link to="/exchanges-returns" className={styles.footerLink}>
                Exchanges and Returns
              </Link>
            </li>
            <li>
              <Link to="/complaints" className={styles.footerLink}>
                Complaints
              </Link>
            </li>
            <li>
              <Link to="/order-status" className={styles.footerLink}>
                Order Status
              </Link>
            </li>
          </ul>
        </div>
      </Col>
      <Col md="3">
        <div className={styles.footerSection}>
          <div className={styles.footerIconText}>
            <i className={`${styles.footerIcon} fa fa-phone`} />
            <p className={styles.footerText}>
              Helpline: +123456789
            </p>
          </div>
          <p className={styles.footerText}>
            Monday - Friday from 8:00 am - 4:00 pm
          </p>
        </div>
      </Col>
    </Row>

    <Row>
      <Col md="12">
        <ul className={styles.socialIcons}>
          <li>
            <a href="https://www.instagram.com">
              <i className="fa fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com">
              <i className="fa fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/">
              <i className="fa fa-twitter"></i>
            </a>
          </li>
        </ul>
      </Col>
    </Row>

    <Row>
      <Col md="12" className={styles.footerText}>
        <small className={styles.footerCopyright}>
          &copy; 2023 camON Store. All rights reserved.
        </small>
      </Col>
    </Row>

  </footer>
);

export default Footer;
