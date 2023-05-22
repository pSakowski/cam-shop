import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './ProductBox.module.scss';
import { getUser } from '../../../redux/usersRedux';

const ProductBox = ({ id, name, price, oldPrice, image }) => {
  const loggedInUser = useSelector(getUser);
  const isLoggedIn = !!loggedInUser;

  return (
    <Link to={`/product/${id}`}>
      <div className={styles.adBox}>
      <img src={image} alt={image} />
        <div className={styles.adBox__info}>
          <h2>{name}</h2>
          <p>
            {price}zł <b>{oldPrice} zł</b>
          </p>
          
          <div className={styles.adBox__buttons}>
            {/* <>
            <Link to={`/ad/edit/${id}`}>
              <Button className="me-2" color="warning">
                Edit
              </Button>
            </Link>
            <Link to={`/ad/remove/${id}`}>
              <Button className="me-2" color="danger">
                Remove
              </Button>
            </Link>
          </> */}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductBox;
