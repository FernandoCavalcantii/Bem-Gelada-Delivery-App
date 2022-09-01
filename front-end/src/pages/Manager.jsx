import React, { useContext } from 'react';
import GenericContext from '../context/GenericContext';
import AdminRegister from '../components/AdminRegister';
import AdminHeader from '../components/AdminHeader';

function Manager() {
  const { hadleGetItemLocaStorage } = useContext(GenericContext);
  const { name } = hadleGetItemLocaStorage('user');

  return (
    <main>
      <AdminHeader userName={ name } />
      <h3>Cadastrar novo usuário</h3>
      <AdminRegister />
    </main>
  );
}

export default Manager;
