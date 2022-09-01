const axios = require('axios').default;

const loginUser = async (email, password) => {
  try {
    const { data } = await axios.post('http://localhost:3001/login', {
      email,
      password,
    });
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

const registerUser = async (name, email, password, role) => {
  try {
    const { data } = await axios.post('http://localhost:3001/users/create', {
      name,
      email,
      password,
      role,
    });
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

const adminRegisterUser = async (user, token) => {
  console.log('token:', token);
  console.log('\nuser data:', user.name, user.email, user.password, user.role);
  try {
    const { data } = await axios.post('http://localhost:3001/users/admin/create', {
      name: user.name,
      email: user.email,
      password: user.password,
      role: user.role,
    }, {
      headers: {
        Authorization: token,
      },
    });
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getAllProducts = async (token) => {
  try {
    const { data } = await axios.get('http://localhost:3001/products', {
      headers: {
        Authorization: token,
      },
    });
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getAllSalesMan = async (token) => {
  try {
    const { data } = await axios.get('http://localhost:3001/users/sellers', {
      headers: {
        Authorization: token,
      },
    });
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

const createOrder = async (body, token) => {
  try {
    const { data } = await axios.post(
      'http://localhost:3001/sales',
      {
        ...body,
      },
      {
        headers: {
          Authorization: token,
        },
      },
    );
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getAllOrdersById = async (id, token) => {
  try {
    const { data } = await axios.get(`http://localhost:3001/sales/user/${id}`, {
      headers: {
        Authorization: token,
      },
    });
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getSalesById = async (id, token) => {
  try {
    const { data } = await axios.get(`http://localhost:3001/sales/${id}`, {
      headers: {
        Authorization: token,
      },
    });
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getSaleById = async (id, token) => {
  try {
    const { data } = await axios.get(`http://localhost:3001/sales/${id},`, {
      headers: {
        Authorization: token,
      },
    });
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

const API = {
  loginUser,
  registerUser,
  adminRegisterUser,
  getAllProducts,
  getAllSalesMan,
  getAllOrdersById,
  createOrder,
  getSaleById,
  getSalesById,
};

export default API;
