import React from 'react';
import PropTypes from 'prop-types';

import { useNavigate } from 'react-router-dom';

function OrderCard({ order }) {
  const navigate = useNavigate();
  const d = new Date(order.saleDate);
  const dataCerta = `${d.getDate()}/0${d.getMonth() + 1}/${d.getFullYear()}`;
  return (
    <button
      type="button"
      onClick={ () => navigate(`/customer/orders/${order.id}`) }
      key={ order.id }
      className="orderCard"
    >
      <p
        data-testid={ `customer_orders__element-order-id-${order.id}` }
      >
        {order.id}
      </p>
      <p
        data-testid={ `customer_orders__element-delivery-status-${order.id}` }
      >
        {order.status}
      </p>
      <p
        data-testid={ `customer_orders__element-order-date-${order.id}` }
      >
        {dataCerta}
      </p>
      <p
        data-testid={ `customer_orders__element-card-price-${order.id}` }
      >
        {(order.totalPrice).replace('.', ',')}
      </p>
    </button>
  );
}

OrderCard.propTypes = {
  order: PropTypes.shape({
    index: PropTypes.number,
    status: PropTypes.string,
    saleDate: PropTypes.string,
    totalPrice: PropTypes.number,
    subTotal: PropTypes.number,
    id: PropTypes.number,
  }).isRequired,
};

export default OrderCard;
