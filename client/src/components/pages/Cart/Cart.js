import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { removeFromCart } from '../../../redux/cartRedux';
import styles from './Cart.module.scss';

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const products = useSelector((state) => state.products);

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const totalPrice = cart.reduce((total, item) => {
    const product = products.find((p) => p.id === item.productId);
    return total + product.price;
  }, 0);

  if (cart.length === 0) {
    return (
      <div className={styles.cartContainer}>
        <i className={`fa fa-cart-arrow-down ${styles.cartIcon}`}></i>
        <div className={styles.emptyCartMessage}>
          <h1>
            <b>Your shopping cart is empty.</b>
          </h1>
          <p>Add products to it to be able to start placing an order.</p>
          <Button className={styles.startShoppingButton}>
            <Link to="/">START SHOPPING</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.cartContainer}>
      <h1>
        <b>Your Shopping Cart</b>
      </h1>
      <ul className={styles.productList}>
        {cart.map((item, index) => {
          const product = products.find((p) => p.id === item.productId);
          return (
            <li key={product.id} className={styles.productItem}>
              <span className={styles.itemNumber}>{index + 1}</span>
              <img
                src={product.image}
                alt={product.name}
                className={styles.productImage}
              />
              <div className={styles.productInfo}>
                <h2 className={styles.productName}>{product.name}</h2>
                <p className={styles.productPrice}>{product.price} zł</p>
              </div>
              <Button
                onClick={() => handleRemoveFromCart(product.id)}
                className={styles.removeButton}
              >
                <b>X</b>
              </Button>
            </li>
          );
        })}
      </ul>
      <div className={styles.totalPrice}>
        <h2>Total Price:</h2>
        <p>{totalPrice} zł</p>
      </div>
      <Button className={styles.orderButton}>
        <Link to="/order">Go to Order Summary</Link>
      </Button>
    </div>
  );
};

export default Cart;
