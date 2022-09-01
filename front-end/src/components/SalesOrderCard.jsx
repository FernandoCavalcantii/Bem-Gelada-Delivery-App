import React from 'react';
import PropTypes from 'prop-types';

function SalesOrderCard({ sale }) {
  const substringEndIndex = 10;
  const date = sale.saleDate.substring(0, substringEndIndex);

  return (
    <main>
      <h3
        data-testid={ `seller_orders__element-order-id-${sale.id}` }
      >
        {`Pedido ${sale.id}`}
      </h3>
      <h3
        data-testid={ `seller_orders__element-delivery-status-${sale.id}` }
      >
        {`${sale.status}`}
      </h3>
      <h3 data-testid={ `seller_orders__element-order-date-${sale.id}` }>{`${date}`}</h3>
      <h3
        data-testid={ `seller_orders__element-card-price-${sale.id}` }
      >
        {`${sale.totalPrice}`}
      </h3>
      <h3 data-testid={ `seller_orders__element-card-address-${sale.id}` }>
        {`${sale.deliveryAddress}, ${sale.deliveryNumber}`}
      </h3>
    </main>
  );
}

export default SalesOrderCard;

SalesOrderCard.propTypes = {
  sale: PropTypes.objectOf({
    id: PropTypes.number,
    status: PropTypes.string,
    saleDate: PropTypes.string,
    totalPrice: PropTypes.string,
    deliveryAddress: PropTypes.string,
    deliveryNumber: PropTypes.string,
  }).isRequired,
};
