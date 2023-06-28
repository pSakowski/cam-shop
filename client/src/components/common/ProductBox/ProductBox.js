import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './ProductBox.module.scss';
import { getUser } from '../../../redux/usersRedux';
import { addCart } from '../../../redux/cartRedux';


const ProductBox = ({ id, name, price, oldPrice, image }) => {
  const dispatch = useDispatch();
  const loggedInUser = useSelector(getUser);
  const isLoggedIn = !!loggedInUser;

  const handleAddToCart = () => {
    if (isLoggedIn) {
      const payload = {
        userId: loggedInUser.userId,
        productId: id,
      };
      dispatch(addCart(payload));
    }
  };

  return (
    <div className={styles.adBox}>
      <Link to={`/product/${id}`} className={styles.adBox__imgLink}>
        <img src={image} alt={image} className={styles.adBox__img} />
      </Link>
      <div className={styles.adBox__info}>
        <h2>{name}</h2>
        <p>
          {price}zł
        </p>
        <p className={styles.adBox__oldPrice}>
          <s>
            {oldPrice} 
          </s>zł
        </p>


        {isLoggedIn ? (
          <button className={styles.adBox__button} onClick={handleAddToCart}>
            Add to Cart
          </button>
        ) : (
          <Link to="/login" className={styles.adBox__loginLink}>
            <p className={styles.adBox__logIn}>Log in to shop!</p>
          </Link>
        )}

      </div>
    </div>
  );
};

export default ProductBox;
