import React, { useState, useCallback, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import verify from 'jwt-decode';
import CheckoutCard from '../components/CheckoutCard';
import Header from '../components/Header';
import GenericContext from '../context/GenericContext';
import API from '../services/API';

function Checkout() {
  const [sallers, setSallers] = useState([]);
  const [sellerId, setSellerId] = useState(2);
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [deliveryNumber, setDeliveryNumber] = useState('');
  const { hadleGetItemLocaStorage } = useContext(GenericContext);
  const { totalValue, shoppingCart } = useSelector((state) => state.shoppingCart);
  const { token, name } = hadleGetItemLocaStorage('user');
  const navigate = useNavigate();

  const getAllSallers = useCallback(async () => {
    try {
      const response = await API.getAllSalesMan(token);
      setSallers(response);
    } catch (error) {
      throw new Error(error);
    }
  }, [token]);

  const createSale = async () => {
    const { data: { id } } = verify(token);
    const itemsSold = shoppingCart.map(({ productId, quantity }) => (
      { productId, quantity }));
    const body = {
      userId: id,
      sellerId,
      totalPrice: totalValue,
      deliveryAddress,
      deliveryNumber,
      itemsSold: [...itemsSold],
    };
    const response = await API.createOrder(body, token);
    navigate(`/customer/orders/${response.id}`);
  };

  useEffect(() => {
    getAllSallers();
  }, [getAllSallers]);

  return (
    <main>
      <Header userName={ name } />
      <div>
        <div>
          <span>Item</span>
          <span>descriçao</span>
          <span>quantidade</span>
          <span>valor unitario</span>
          <span>sub total</span>
          <span>remover Item</span>
        </div>
        <section>
          <div>
            { shoppingCart.filter(({ productId }) => productId > 0)
              .map((product, index) => (
                <CheckoutCard
                  key={ product.productId }
                  product={ product }
                  index={ index }
                />
              ))}
          </div>
        </section>
      </div>
      <footer>
        <section>
          <select
            data-testid="customer_checkout__select-seller"
          >
            {sallers.map((saller) => (
              <option
                key={ saller.id }
                onChange={ () => setSellerId(saller.id) }
              >
                {saller.name}
              </option>
            ))}
          </select>
          <input
            data-testid="customer_checkout__input-address"
            type="text"
            placeholder="Digite seu endereço"
            value={ deliveryAddress }
            onChange={ ({ target }) => setDeliveryAddress(target.value) }
          />
          <input
            data-testid="customer_checkout__input-addressNumber"
            type="number"
            placeholder="Digite seu numero"
            value={ deliveryNumber }
            onChange={ ({ target }) => setDeliveryNumber(target.value) }
          />
        </section>
        <h4
          data-testid="customer_checkout__element-order-total-price"
        >
          {`Total: ${totalValue.toFixed(2).replace('.', ',')}`}

        </h4>
        <button
          data-testid="customer_checkout__button-submit-order"
          type="button"
          onClick={ () => createSale() }
        >
          Finalizar pedido
        </button>
      </footer>
    </main>
  );
}

export default Checkout;
