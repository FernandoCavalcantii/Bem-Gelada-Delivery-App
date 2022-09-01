import React, { useState, useMemo, useCallback, useContext, useEffect } from 'react';
import verify from 'jwt-decode';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Typography,
} from '@mui/material';

import { useNavigate } from 'react-router-dom';

import { MyTextFiel, MyBox } from '../Styles/styledComponent';
// import jwtDecode from 'jwt-decode';
import GenericContext from '../context/GenericContext';
import API from '../services/API';

function Login() {
  const navigate = useNavigate();
  const { handleSaveLocalStorage,
  } = useContext(GenericContext);

  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [error, setError] = useState(false);

  const isValidButton = useMemo(() => {
    const regexEmail = /\S+@\S+\.\S+/;
    const numberCompare = 6;
    const valid = true;
    if (regexEmail.test(inputEmail) && inputPassword.length >= numberCompare) {
      return false;
    }
    return valid;
  }, [inputEmail, inputPassword]);

  const handleLogin = useCallback(async () => {
    try {
      await API.loginUser(inputEmail, inputPassword)
        .then((res) => {
          if (res) {
            const { data } = verify(res.token);

            handleSaveLocalStorage('user', {
              ...data,
              token: res.token,
            });
            if (data.role === 'administrator') {
              navigate('/admin/manage');
            } else if (data.role === 'seller') {
              navigate('/seller/orders');
            } else {
              navigate('/customer/products');
            }
          }
        });
    } catch (err) {
      setError(true);
      throw new Error(err.message);
    }
  }, [
    inputEmail,
    inputPassword,
    navigate,
    handleSaveLocalStorage,
  ]);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('user'));
    if (token) navigate('/customer/products');
  }, [navigate]);

  return (
    <MyBox>
      <FormControl style={ { width: '100%' } }>
        <FormLabel htmlFor="common_login__input-email">
          <MyTextFiel
            data-testid="common_login__input-email"
            placeholder="digite seu Email"
            type="text"
            onChange={ ({ target }) => setInputEmail(target.value) }
          />
        </FormLabel>
        <FormLabel htmlFor="common_login__input-password">
          <MyTextFiel
            data-testid="common_login__input-password"
            type="password"
            placeholder="digite sua senha"
            onChange={ ({ target }) => setInputPassword(target.value) }
          />
        </FormLabel>

        <Button
          style={ { width: '15%', marginTop: '20px' } }
          variant="contained"
          color="primary"
          data-testid="common_login__button-login"
          type="button"
          disabled={ isValidButton }
          onClick={ () => handleLogin() }
        >
          Login
        </Button>
        <Button
          style={ { width: '15%' } }
          variant="outlined"
          color="primary"
          data-testid="common_login__button-register"
          type="button"
          onClick={ () => navigate('/register') }
        >
          Ainda Nao Tenho Conta
        </Button>

      </FormControl>
      {error
      && (
        <Box
          data-testid="common_login__element-invalid-email"
        >
          <Typography variant="h2">Usuário não cadastrado</Typography>
        </Box>
      )}
    </MyBox>
  );
}

export default Login;
