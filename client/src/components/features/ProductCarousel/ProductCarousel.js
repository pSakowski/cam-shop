import React from 'react';
import { Carousel } from 'react-bootstrap';
import styles from './ProductCarousel.module.scss';

const items = [
  {
    src: '/img/promo/cameras.jpg',
    header: 'Aparaty',
    caption: 'Zapoznaj się z naszą szeroką gamą wysokiej jakości aparatów.',
    buttonLabel: 'Kup teraz',
    buttonUrl: '/cameras',
  },
  {
    src: '/img/promo/lenses.jpg',
    header: 'Obiektywy',
    caption: 'Ulepsz swoje zdjęcia dzięki naszym wyjątkowym obiektywom.',
    buttonLabel: 'Kup teraz',
    buttonUrl: '/lenses',
  },
  {
    src: '/img/promo/accessories.jpg',
    header: 'Akcesoria',
    caption: 'Odkryj idealne akcesoria do swoich potrzeb fotograficznych.',
    buttonLabel: 'Kup teraz',
    buttonUrl: '/accessories',
  },
  {
    src: '/img/promo/sale.jpg',
    buttonLabel: 'Zobacz',
    buttonUrl: '/sale',
  },
];

const ProductCarousel = () => (
  <div className={styles.carouselWrapper}>
    <Carousel
      className={styles.productCarousel}
      keyboard={true}
      indicators={false}
    >
      {items.map((item, index) => (
        <Carousel.Item key={index}>
          <div className={styles.carouselImageWrapper}>
            <img
              className={`d-block w-100 ${styles.carouselImage}`}
              src={item.src}
              alt={item.header}
            />
            <div className={styles.carouselOverlay}>
              <div className={styles.carouselContent}>
                <h3 className={styles.carouselTitle}>{item.header}</h3>
                <p className={styles.carouselCaption}>{item.caption}</p>
                <button
                  className={styles.carouselButton}
                  onClick={() => {
                    window.location.href = item.buttonUrl;
                  }}
                  aria-label={item.buttonLabel}
                  tabIndex={index === 0 ? '0' : '-1'}
                >
                  {item.buttonLabel}
                </button>
              </div>
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  </div>
);

export default ProductCarousel;
