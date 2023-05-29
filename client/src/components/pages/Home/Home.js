import { Container } from 'react-bootstrap';
import Products from '../Products/Products';
import ProductCarousel from '../../features/ProductCarousel/ProductCarousel';

const Home = () => (
  <div>
    <ProductCarousel />
    <Container>
      <Products />
    </Container>
  </div>
);

export default Home;
