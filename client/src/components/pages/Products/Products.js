import React, { useEffect } from 'react';
import { Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, loadProductsRequest } from '../../../redux/productsRedux';
import ProductBox from '../../common/ProductBox/ProductBox';

const Product = () => {
  const products = useSelector(getProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProductsRequest());
  }, [dispatch]);

  return (
    <Row>
      {products.map((prod) => (
          <div key={prod.id} className='col-12 col-md-6 col-lg-4'>
          <ProductBox {...prod} />
        </div>
      ))}
    </Row>
  );
};

export default Product;
