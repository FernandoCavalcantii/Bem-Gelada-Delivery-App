import React, { useState, useMemo, useCallback, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Typography,
} from '@mui/material';
import GenericContext from '../context/GenericContext';
import API from '../services/API';

import { MyTextFiel, MyBox } from '../Styles/styledComponent';

function Register() {
  const navigate = useNavigate();
  const { handleSaveLocalStorage } = useContext(GenericContext);

  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [inputName, setInputName] = useState('');
  const [error, setError] = useState(false);

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
    const role = 'customer';
    try {
      await API.registerUser(inputName, inputEmail, inputPassword, role)
        .then((res) => {
          if (res) {
            handleSaveLocalStorage('user', {
              name: inputName,
              email: inputEmail,
              role,
              token: res.token,
            });
            navigate('/customer/products');
          }
        });
    } catch (err) {
      setError(true);
      throw new Error(err.message);
    }
  }, [inputEmail, inputName, inputPassword, navigate, handleSaveLocalStorage]);

  return (
    <MyBox>
      <FormControl style={ { width: '100%' } }>
        <FormLabel htmlFor="common_register__input-name">
          <MyTextFiel
            style={ { width: '30%' } }
            type="text"
            data-testid="common_register__input-name"
            placeholder="digiite seu nome completo"
            onChange={ ({ target }) => setInputName(target.value) }
          />
        </FormLabel>
        <FormLabel htmlFor="common_register__input-email">
          <MyTextFiel
            style={ { width: '30%' } }
            data-testid="common_register__input-email"
            placeholder="digite seu Email"
            type="text"
            onChange={ ({ target }) => setInputEmail(target.value) }
          />
        </FormLabel>
        <FormLabel htmlFor="common_register__input-password">
          <MyTextFiel
            style={ { width: '30%' } }
            data-testid="common_register__input-password"
            type="password"
            placeholder="digite sua senha"
            onChange={ ({ target }) => setInputPassword(target.value) }
          />
        </FormLabel>
        <Button
          style={ { width: '30%' } }
          variant="contained"
          color="success"
          data-testid="common_register__button-register"
          type="button"
          disabled={ isValidButton }
          onClick={ () => registerUser() }
        >
          CADASTRAR
        </Button>
      </FormControl>
      {error && (
        <Box
          style={ { width: '100%' } }
          data-testid="common_register__element-invalid_register"
        >
          <Typography
            variant="h2"
            color="red"
            style={ { textAlign: 'left', width: '100%' } }
          >
            Usuário já cadastrado
          </Typography>
        </Box>

      )}
    </MyBox>
  );
}

export default Register;
