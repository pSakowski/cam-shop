import React, { useEffect, useState } from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, loadProductsRequest } from '../../../redux/productsRedux';
import ProductBox from '../../common/ProductBox/ProductBox';
import styles from './Products.module.scss';

const Products = () => {
  const products = useSelector(getProducts);
  const dispatch = useDispatch();

  const [category, setCategory] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [sortOption, setSortOption] = useState('');
  const [productNameFilter, setProductNameFilter] = useState('');

  useEffect(() => {
    dispatch(loadProductsRequest());
  }, [dispatch]);

  const filteredProducts = products.filter((product) => {
    // Filter by category
    if (category && product.category !== category) {
      return false;
    }

    // Filter by price range
    if (minPrice && product.price < parseInt(minPrice)) {
      return false;
    }

    if (maxPrice && product.price > parseInt(maxPrice)) {
      return false;
    }

    // Filter by product name
    if (
      productNameFilter &&
      !product.name.toLowerCase().includes(productNameFilter.toLowerCase())
    ) {
      return false;
    }

    return true;
  });

  let sortedProducts = filteredProducts;

  if (sortOption === 'asc') {
    sortedProducts = sortedProducts.sort((a, b) => a.price - b.price);
  } else if (sortOption === 'desc') {
    sortedProducts = sortedProducts.sort((a, b) => b.price - a.price);
  }

  const handleChange = (e, setter) => {
    const { value } = e.target;
    if (value !== '' && parseInt(value) < 0) {
      return; // Do not update state if the value is negative
    }
    setter(value);
  };


  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  return (
    <Row>
      <Col md={3}>
        <div className={styles.productFilters}>
          {/* Category column */}
          <Form.Group controlId="categorySelect">
            <Form.Label>Category:</Form.Label>
            <Form.Control as="select" defaultValue="" onChange={handleCategoryChange}>
              <option value="">All</option>
              <option value="cameras">Cameras</option>
              <option value="lenses">Lenses</option>
              <option value="accessories">Accessories</option>
            </Form.Control>
          </Form.Group>

          {/* Price range selection */}
          <Form.Group controlId="priceRangeSelect">
            <Form.Label>Price Range:</Form.Label>
            <div className="d-flex">
              <Form.Control
                type="number"
                placeholder="Min Price"
                value={minPrice}
                onChange={(e) => handleChange(e, setMinPrice)}
              />
              {' - '}
              <Form.Control
                type="number"
                placeholder="Max Price"
                value={maxPrice}
                onChange={(e) => handleChange(e, setMaxPrice)}
              />
            </div>
          </Form.Group>

          {/* Product name filter */}
          <Form.Group controlId="productNameFilter">
            <Form.Label>Product Name:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Product Name"
              value={productNameFilter}
              onChange={(e) => setProductNameFilter(e.target.value)}
            />
          </Form.Group>

          {/* Sorting selection */}
          <Form.Group controlId="sortSelect">
            <Form.Label>Sort By:</Form.Label>
            <Form.Control as="select" defaultValue="" onChange={handleSortChange}>
              <option value="">None</option>
              <option value="asc">Lowest Price</option>
              <option value="desc">Highest Price</option>
            </Form.Control>
          </Form.Group>
        </div>
      </Col>
      <Col md={9}>
        <div className={styles.productList}>
          <Row>
            {sortedProducts.map((prod) => (
              <Col key={prod.id} xs={6} md={3}>
                <div className={styles.productItem}>
                  <ProductBox {...prod} />
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Col>
    </Row>
  );
};

export default Products;
