import { useEffect, useState, useCallback, useContext } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import GenericContext from '../context/GenericContext';
import API from '../services/API';

function Products() {
  const { hadleGetItemLocaStorage } = useContext(GenericContext);
  const [products, setproducts] = useState([]);
  const { token, name } = hadleGetItemLocaStorage('user');
  const { totalValue, shoppingCart } = useSelector((state) => state.shoppingCart);
  const navigate = useNavigate();

  const getAllProducts = useCallback(async () => {
    try {
      const response = await API.getAllProducts(token);
      setproducts(response);
    } catch (error) {
      throw new Error(error.message);
    }
  }, [token]);

  useEffect(() => {
    getAllProducts();
  }, [getAllProducts]);

  return (
    <main>
      <Header userName={ name } />
      <section className="productsSection">
        {products.map((product, i) => (
          <ProductCard
            key={ i }
            product={ product }
          />
        ))}
      </section>
      <h2
        data-testid="customer_products__checkout-bottom-value"
      >
        {totalValue.toFixed(2).replace('.', ',')}
      </h2>
      <button
        type="button"
        data-testid="customer_products__button-cart"
        onClick={ () => navigate('/customer/checkout') }
        disabled={ !shoppingCart.some((item) => item.quantity > 0) }
      >
        Checkout
      </button>
    </main>
  );
}
export default Products;
