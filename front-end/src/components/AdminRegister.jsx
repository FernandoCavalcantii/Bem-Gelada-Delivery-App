import React, { useState, useMemo, useCallback, useContext } from 'react';
import API from '../services/API';
import GenericContext from '../context/GenericContext';

function AdminRegister() {
  const { hadleGetItemLocaStorage } = useContext(GenericContext);
  const { token } = hadleGetItemLocaStorage('user');

  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [inputName, setInputName] = useState('');
  const [selectRole, setSelectRole] = useState('seller');
  const [error, setError] = useState(false);

  const clearStates = () => {
    setInputName('');
    setInputEmail('');
    setInputPassword('');
  };

  const isValidButton = useMemo(() => {
    const regexEmail = /\S+@\S+\.\S+/;
    const numberComparePassword = 6;
    const numberCompareName = 12;
    const valid = true;
    if (
      regexEmail.test(inputEmail)
       && inputPassword.length >= numberComparePassword
       && inputName.length >= numberCompareName) {
      return false;
    }
    return valid;
  }, [inputEmail, inputName.length, inputPassword.length]);

  const registerUser = useCallback(async () => {
    const user = {
      name: inputName,
      email: inputEmail,
      password: inputPassword,
      role: selectRole,
    };
    try {
      await API.adminRegisterUser(user, token)
        .then(() => {
          clearStates();
        });
    } catch (err) {
      setError(true);
      throw new Error(err.message);
    }
  });
  return (
    <section className="register-page">
      <form>
        <label htmlFor="admin_manage__input-name">
          Nome
          <input
            type="text"
            data-testid="admin_manage__input-name"
            placeholder="Nome completo"
            value={ inputName }
            onChange={ ({ target }) => setInputName(target.value) }
          />
        </label>
        <label htmlFor="admin_manage__input-email">
          Email
          <input
            data-testid="admin_manage__input-email"
            placeholder="Email"
            type="text"
            value={ inputEmail }
            onChange={ ({ target }) => setInputEmail(target.value) }
          />
        </label>
        <label htmlFor="admin_manage__input-password">
          Senha
          <input
            data-testid="admin_manage__input-password"
            type="password"
            placeholder="Senha"
            value={ inputPassword }
            onChange={ ({ target }) => setInputPassword(target.value) }
          />
        </label>
        <label htmlFor="admin_manage__select-role">
          <select
            data-testid="admin_manage__select-role"
            onChange={ ({ target }) => setSelectRole(target.value) }
          >
            <option value="seller">Vendedor</option>
            <option value="customer">Cliente</option>
            <option value="administrator">Administrador</option>
          </select>
        </label>
        <button
          data-testid="admin_manage__button-register"
          type="button"
          disabled={ isValidButton }
          onClick={ () => registerUser() }
        >
          CADASTRAR
        </button>
      </form>
      {error && (
        <div
          data-testid="admin_manage__element-invalid-register"
        >
          <h2>Usuário já cadastrado</h2>
        </div>
      )}
    </section>
  );
}

export default AdminRegister;
