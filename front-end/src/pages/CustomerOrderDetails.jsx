import React, { useEffect, useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from '../services/API';
import GenericContext from '../context/GenericContext';
import Header from '../components/Header';
import helpers from '../helpers';

function CustomerOrderDetails() {
  const { id } = useParams();
  const { hadleGetItemLocaStorage } = useContext(GenericContext);
  const { token, name } = hadleGetItemLocaStorage('user');
  const [orderDetails, setOrderDetails] = useState([]);
  const [orderProducts, setOrderProducts] = useState([]);
  const getOrder = async () => {
    const response = await API.getSaleById(id, token);
    setOrderDetails([response]);
    setOrderProducts(response.products);
  };
  const s = 'customer_order_details__element-order-details-label-delivery-status';

  useEffect(() => {
    getOrder();
  }, []);
  //   const substringEndIndex = 10;
  //   const date = orderDetails.saleDate.substring(0, substringEndIndex);
  return (
    <main>
      <Header userName={ name } />
      <h1>Detalhe do Pedido</h1>
      {orderDetails.map(({ seller, saleDate, status, totalPrice }) => (
        <section className="order-details" key={ `${id}, ${seller}` }>
          <h3 data-testid="customer_order_details__element-order-details-label-order-id">
            {id}
          </h3>
          <h3
            data-testid="customer_order_details__element-order-details-label-seller-name"
          >
            {seller.name}
          </h3>
          <h3
            data-testid="customer_order_details__element-order-details-label-order-date"
          >
            {helpers.getDate(saleDate)}
          </h3>
          <h3
            data-testid={ s }
          >
            {status}

          </h3>
          <button
            data-testid="customer_order_details__button-delivery-check"
            type="button"
            disabled="true"
          >
            Marcar como entregue
          </button>
          <h3 data-testid="customer_order_details__element-order-total-price">
            {totalPrice.replace('.', ',')}
          </h3>
        </section>
      ))}
      {orderProducts.map(({ name: productName, price, SaleProduct }, i) => (
        <section className="order-products" key={ `${id}${name}${price}` }>
          <h3
            data-testid={ `customer_order_details__element-order-table-item-number-${i}` }
          >
            {i}
          </h3>
          <h3
            data-testid={ `customer_order_details__element-order-table-name-${i}` }
          >
            {productName}
          </h3>
          <h3
            data-testid={ `customer_order_details__element-order-table-quantity-${i}` }
          >
            {SaleProduct.quantity}
          </h3>
          <h3
            data-testid={ `customer_order_details__element-order-table-unit-price-${i}` }
          >
            {price.replace('.', ',')}
          </h3>
          <h3
            data-testid={ `customer_order_details__element-order-table-sub-total-${i}` }
          >
            {(Number(price) * SaleProduct.quantity)
              .toFixed(2)
              .replace('.', ',')}
          </h3>
        </section>
      ))}
    </main>
  );
}

export default CustomerOrderDetails;
