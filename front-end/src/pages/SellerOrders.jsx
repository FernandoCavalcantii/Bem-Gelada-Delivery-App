import { useEffect, useState, useCallback, useContext } from 'react';
import { Link } from 'react-router-dom';
import SalesOrderCard from '../components/SalesOrderCard';
import SellerHeader from '../components/SellerHeader';
import GenericContext from '../context/GenericContext';
import API from '../services/API';

function SellerOrders() {
  const { idUser, hadleGetItemLocaStorage } = useContext(GenericContext);
  const [sales, setSales] = useState([]);
  const { token, name } = hadleGetItemLocaStorage('user');

  const getAllSales = useCallback(async () => {
    try {
      const response = await API.getSalesBySellerId(idUser, token);
      setSales(response);
    } catch (error) {
      throw new Error(error.message);
    }
  }, [idUser, token]);

  useEffect(() => {
    getAllSales();
  }, []);

  return (
    <main>
      <SellerHeader userName={ name } />
      <section className="salesSection">
        {sales.map((sale, i) => (
          <Link to={ `/seller/orders/${sale.id}` } key={ i } id={ sale.id }>
            <SalesOrderCard
              key={ i }
              sale={ sale }
              data-testid={ `seller_orders__element-order-date-${sale.id}` }
            />
          </Link>
        ))}
      </section>
    </main>
  );
}
export default SellerOrders;
