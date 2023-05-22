import { Route, Routes } from 'react-router-dom';

// import routes
import NavBar from './components/views/NavBar/NavBar';
import Footer from './components/views/Footer/Footer';
import Home from './components/pages/Home/Home';
import ProductBox from './components/common/ProductBox/ProductBox';
import Cart from './components/pages/Cart/Cart';
import Order from './components/pages/Order/Order';
import Summary from './components/pages/Summary/Summary'
import Login from './components/pages/Login/Login';
import Logout from './components/pages/Logout/Logout';
import Register from './components/pages/Register/Register';
import NotFound from './components/pages/NotFound/NotFound';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductBox />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<Order />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
