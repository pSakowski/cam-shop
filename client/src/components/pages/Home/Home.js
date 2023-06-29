import { Container } from 'react-bootstrap';
import Products from '../Products/Products';
import ProductCarousel from '../../features/ProductCarousel/ProductCarousel';

const Home = () => (
  <div>
    <h1>elo</h1>
    <ProductCarousel />
    <Container>
      <Products />
    </Container>
  </div>
);

export default Home;
