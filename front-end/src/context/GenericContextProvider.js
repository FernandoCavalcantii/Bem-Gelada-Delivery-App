import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import GenericContext from './GenericContext';

function GenericContextProvider({ children }) {
  const [idUser, setidUser] = useState(0);

  const handleSaveLocalStorage = useCallback((key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  }, []);

  const hadleGetItemLocaStorage = useCallback(
    (key) => JSON.parse(localStorage.getItem(key)),
    [],
  );

  const getIduser = useCallback(() => {
    const user = hadleGetItemLocaStorage('user');
    if (user) {
      const { id } = user;
      setidUser(id);
    }
  }, [hadleGetItemLocaStorage]);

  useEffect(() => {
    getIduser();
  }, [getIduser]);

  const value = useMemo(
    () => ({
      handleSaveLocalStorage,
      idUser,
      hadleGetItemLocaStorage,
    }),
    [handleSaveLocalStorage, hadleGetItemLocaStorage, idUser],
  );

  return (
    <GenericContext.Provider value={ value }>{children}</GenericContext.Provider>
  );
}

GenericContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GenericContextProvider;
