import { Button, NavLink } from 'reactstrap';

const Cart = () => (
  <div>
    <i className="fa fa-cart-arrow-down"></i>
    <h1>
      <b>Twój koszyk jest pusty.</b>
    </h1>
    <p>Dodaj do niego produkty, aby móc rozpocząć składanie zamówienia.</p>
    <Button>
      <NavLink href="/">ZACZNIJ ZAKUPY</NavLink>
    </Button>
  </div>
);

export default Cart;
