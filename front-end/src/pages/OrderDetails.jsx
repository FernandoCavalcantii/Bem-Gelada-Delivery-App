import React, { useCallback, useState, useEffect, useContext } from 'react';
// import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import GenericContext from '../context/GenericContext';
import API from '../services/API';

function OrderDetails() {
  const [order, setOrder] = useState([]);
  const { hadleGetItemLocaStorage } = useContext(GenericContext);
  // const {iduser} = useParams();
  const getAllSalesById = useCallback(async () => {
    const { token } = hadleGetItemLocaStorage('user');
    const id = 3;
    // IMPLEMENTAR ID DINÂMICO PARA O QUE FOR CLICADO NA PÁGINA ANTERIOR
    try {
      const response = await API.getSalesById(id, token);
      setOrder([response]);
    } catch (error) {
      throw new Error(error.message);
    }
  }, [hadleGetItemLocaStorage]);

  console.log('order', order);

  useEffect(() => {
    getAllSalesById();
  }, [getAllSalesById]);

  return (
    <>
      <Header />
      <div>Detalhe do Pedido</div>
      {/* Fazer logica de finalizar pedido e mudar estado do pedido */}
      <button
        data-testid="seller_order_details__
        button-preparing-check"
        type="button"
      >
        Preparar Pedido
      </button>
      <button
        data-testid="seller_order_details__
        button-dispatch-check"
        type="button"
      >
        Saiu pra Entrega
      </button>
      <div>
        {
          order.map((item, index) => (
            <div key={ index }>
              <h3
                data-testid="seller_order_details__element-order-details-label-order-id"
              >
                {`Pedidos ${item.id}`}
              </h3>
              <h3
                data-testid="seller_order_details__element-order-details-label-order-date"
              >
                {`${item.saleDate}`}
                {/* CONVERTER A DATA */}
              </h3>
              <h3
                data-testid="seller_order_details__element
                -order-details-label-delivery-status"
              >
                {`${item.status}`}
              </h3>
              {item.products.map((beer, id) => (
                <>
                  <tr key={ id }>
                    <td
                      data-testid={ `seller_order_details__element
                      -order-table-item-number-${id}` }
                    >
                      {beer.id}
                    </td>
                    <td
                      data-testid={ `seller_order_details__element
                    -order-table-name-${id}` }
                    >
                      {beer.name}
                    </td>
                    <td
                      data-testid={ `seller_order_details__element
                      -order-table-quantity-${id}` }
                    >
                      {beer.SaleProduct.quantity}
                    </td>
                    <td
                      data-testid={ `seller_order_details__element
                      -order-table-unit-price-${id}` }
                    >
                      {beer.price}
                    </td>
                    <td
                      data-testid={ `seller_order_details__element
                      -order-table-sub-total-${id}` }
                    >
                      {(beer.SaleProduct.quantity * beer.price)
                        .toFixed(2).replace('.', ',')}
                    </td>
                  </tr>
                  <h2>
                    {`Total: ${item.totalPrice}`}
                  </h2>
                </>
              ))}
            </div>
          ))
        }
      </div>
    </>
  );
}

export default OrderDetails;
