import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ADD_PRODUCT } from '../actions';

function ProductCard({ product }) {
  const [qtdProduct, setQtdproduct] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: ADD_PRODUCT,
      payload: {
        productId: product.id,
        name: product.name,
        unitPrice: Number(product.price),
        quantity: qtdProduct,
        subTotal: (product.price * qtdProduct),
      },
    });
  }, [qtdProduct, dispatch, product.id, product.name, product.price]);

  return (
    <div key={ product.id }>
      <h3
        data-testid={ `customer_products__element-card-price-${product.id}` }
      >
        {product.price.replace('.', ',')}
      </h3>
      <img
        style={ { width: '30%' } }
        data-testid={ `customer_products__img-card-bg-image-${product.id}` }
        src={ product.url_image }
        alt={ product.name }
      />
      <h5
        data-testid={ `customer_products__element-card-title-${product.id}` }
      >
        {product.name}
      </h5>
      <button
        data-testid={ `customer_products__button-card-add-item-${product.id}` }
        type="button"
        onClick={ () => {
          setQtdproduct(qtdProduct + 1);
        } }
      >
        +
      </button>
      <input
        data-testid={ `customer_products__input-card-quantity-${product.id}` }
        value={ qtdProduct }
        onChange={ ({ target }) => setQtdproduct(target.value) }
      />
      <button
        data-testid={ `customer_products__button-card-rm-item-${product.id}` }
        type="button"
        onClick={ () => {
          if (qtdProduct > 0) { setQtdproduct(qtdProduct - 1); }
        } }
      >
        -
      </button>
    </div>
  );
}

export default ProductCard;

ProductCard.propTypes = {
  product: PropTypes.objectOf({
    id: PropTypes.number,
    price: PropTypes.string,
    url_image: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};
