import React from 'react';
import { Container } from 'react-bootstrap';
import Products from '../Products/Products';
import ProductCarousel from '../../features/ProductCarousel/ProductCarousel';
import InfoBox from '../../common/InfoBox/InfoBox';

const Home = () => (
  <div>
    <ProductCarousel />
    <Container>
      <Products />
      <InfoBox />
    </Container>
  </div>
);

export default Home;
