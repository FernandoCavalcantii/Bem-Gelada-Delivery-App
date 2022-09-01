import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import GenericContextProvider from './context/GenericContextProvider';
import store from './store';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import Products from './pages/Products';
import Register from './pages/Register';
import CustomerOrders from './pages/CustomerOrders';
import CustomerOrderDetails from './pages/CustomerOrderDetails';
import OrderDetails from './pages/OrderDetails';
import Manager from './pages/Manager';

function App() {
  return (
    <GenericContextProvider>
      <BrowserRouter>
        <Provider store={ store }>
          <Routes>
            <Route path="/" element={ <Navigate replace to="/login" /> } />
            <Route path="/login" element={ <Login /> } />
            <Route path="/register" element={ <Register /> } />
            <Route path="customer/products" element={ <Products /> } />
            <Route path="/customer/checkout" element={ <Checkout /> } />
            <Route path="/customer/orders" element={ <CustomerOrders /> } />
            <Route path="/customer/orders/:id" element={ <CustomerOrderDetails /> } />
            <Route path="/admin/manage" element={ <Manager /> } />
            <Route path="/cafezinho" element={ <OrderDetails /> } />
          </Routes>
        </Provider>
      </BrowserRouter>
    </GenericContextProvider>
  );
}

export default App;
