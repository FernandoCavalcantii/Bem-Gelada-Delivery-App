import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { REMOVE_PRODUCT } from '../actions';

function CheckoutCard({ product, index }) {
  const dispatch = useDispatch();
  return (
    <div>
      <p
        data-testid={ `customer_checkout__element-order-table-item-number-${index}` }
      >
        {index + 1}
      </p>
      <p
        data-testid={ `customer_checkout__element-order-table-name-${index}` }
      >
        {product.name}
      </p>
      <span
        data-testid={ `customer_checkout__element-order-table-quantity-${index}` }
      >
        {product.quantity}
      </span>
      <span
        data-testid={ `customer_checkout__element-order-table-unit-price-${index}` }
      >
        {product.unitPrice.toFixed(2).replace('.', ',')}
      </span>
      <span
        data-testid={ `customer_checkout__element-order-table-sub-total-${index}` }
      >
        {product.subTotal.toFixed(2).replace('.', ',')}
      </span>
      <button
        type="button"
        data-testid={ `customer_checkout__element-order-table-remove-${index}` }
        onClick={ () => {
          dispatch({
            type: REMOVE_PRODUCT,
            payload: {
              productId: product.productId,
              name: product.name,
              unitPrice: 0,
              quantity: 0,
              subTotal: 0,
            },
          });
        } }
      >
        Remover
      </button>
    </div>
  );
}

CheckoutCard.propTypes = {
  index: PropTypes.number.isRequired,
  product: PropTypes.shape({
    index: PropTypes.number,
    name: PropTypes.string,
    productId: PropTypes.number,
    quantity: PropTypes.number,
    subTotal: PropTypes.number,
    unitPrice: PropTypes.number,
    id: PropTypes.number,
    price: PropTypes.string,
  }).isRequired,
};

export default CheckoutCard;
