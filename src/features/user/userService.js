import axios from "axios";
import { base_url, config } from "../../utils/axiosConfig";

const register = async (userData) => {
  const response = await axios.post(`${base_url}user/register`, userData);
  if (response.data) {
    if (response.data) {
      localStorage.setItem("customer", JSON.stringify(response.data));
    }
    return response.data;
  }
};

const login = async (userData) => {
  const response = await axios.post(`${base_url}user/login`, userData);
  if (response.data) {
    localStorage.setItem("loggedcustomer", JSON.stringify(response.data));
    return response.data;
  }
};

const getUserWishlist = async () => {
  const response = await axios.get(`${base_url}user/wishlist`, config);
  if (response?.data) {
    return response?.data;
  }
};

const addToCart = async (cartData) => {
  console.log(config);
  const response = await axios.post(`${base_url}user/cart`, cartData, config);
  if (response?.data) {
    return response?.data;
  }
};

const getCart = async () => {
  const response = await axios.get(`${base_url}user/cart`, config);
  if (response?.data) {
    return response?.data;
  }
};

const removeProductFromCart = async (id) => {
  const response = await axios.delete(
    `${base_url}user/delete-product-cart/${id}`,
    config
  );
  if (response?.data) {
    return response?.data;
  }
};

const updateProductFromCart = async (cartDetail) => {
  console.log(cartDetail);
  const response = await axios.patch(
    `${base_url}user/update-product-cart`,
    cartDetail,
    config
  );
  if (response?.data) {
    return response?.data;
  }
};

const createOrder = async (orderDetail) => {
  console.log(orderDetail);
  const response = await axios.post(
    `${base_url}user/cart/create-order`,
    orderDetail,
    config
  );
  if (response?.data) {
    return response?.data;
  }
};

const getUserOrders = async () => {
  const response = await axios.get(`${base_url}user/getmyorders`, config);
  if (response?.data) {
    return response?.data;
  }
};

const forgotPassToken = async (data) => {
  const response = await axios.post(
    `${base_url}user/forgot-password-token`,
    data,
    config
  );
  if (response?.data) {
    return response?.data;
  }
};

export const authService = {
  register,
  login,
  getUserWishlist,
  addToCart,
  getCart,
  removeProductFromCart,
  updateProductFromCart,
  createOrder,
  getUserOrders,
  forgotPassToken,
};
