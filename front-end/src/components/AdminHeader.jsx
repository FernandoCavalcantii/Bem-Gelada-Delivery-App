import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function AdminHeader({ userName }) {
  const navigate = useNavigate();
  return (
    <header>
      <div style={ { display: 'flex', justifyContent: 'space-between' } }>
        <h2>GERENCIAR USUÁRIOS</h2>
        <h2>{userName}</h2>
        <button
          type="button"
          data-testid="customer_products__element-navbar-link-logout"
          onClick={ () => {
            localStorage.removeItem('user');
            navigate('/login');
          } }
        >
          Sair
        </button>
      </div>
    </header>
  );
}

AdminHeader.propTypes = {
  userName: PropTypes.string.isRequired,
};

export default AdminHeader;
