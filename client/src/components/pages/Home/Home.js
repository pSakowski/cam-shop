import { Container } from 'react-bootstrap';
import PromoCarousel from '../../features/PromoCarousel/PromoCarousel';
import Products from '../Products/Products';

const Home = () => (
  <div>
    <PromoCarousel />
    <Container>
      <Products />
    </Container>
  </div>
);

export default Home;
