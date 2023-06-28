import React from 'react';
import { Carousel } from 'react-bootstrap';
import styles from './ProductCarousel.module.scss';


const items = [
  {
    src: '/img/promo/cameras.jpg',
    header: 'Cameras',
    caption: 'Explore our wide range of high-quality cameras.',
    buttonLabel: 'Buy now',
    buttonUrl: '/cameras',
  },
  {
    src: '/img/promo/lenses.jpg',
    header: 'Lenses',
    caption: 'Enhance your photos with our exceptional lenses.',
    buttonLabel: 'Buy now',
    buttonUrl: '/lenses',
  },
  {
    src: '/img/promo/accessories.jpg',
    header: 'Accessories',
    caption: 'Discover the perfect accessories for your photography needs.',
    buttonLabel: 'Buy now',
    buttonUrl: '/accessories',
  },
  {
    src: '/img/promo/sale.jpg',
    buttonLabel: 'View',
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
