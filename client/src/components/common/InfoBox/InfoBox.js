import React from 'react';
import { Row, Col } from 'react-bootstrap';
import styles from './InfoBox.module.scss';

const InfoBox = () => {
  return (
    <Row className={styles.infoBox}>
      <Col>
        <div className={styles.infoItem}>
          <i className="fa fa-rotate-left"></i>
          <p>30 Days Return</p>
        </div>
      </Col>
      <Col>
        <div className={styles.infoItem}>
          <i className="fa fa-truck"></i>
          <p>Free Delivery</p>
        </div>
      </Col>
      <Col>
        <div className={styles.infoItem}>
          <i className="fa fa-check-circle"></i>
          <p>Verified Opinions</p>
        </div>
      </Col>
    </Row>
  );
};

export default InfoBox;
