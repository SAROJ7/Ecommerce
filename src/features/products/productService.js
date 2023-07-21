import axios from "axios";

const getProducts = async (userData) => {
  const response = await axios.get(`${base_url}product`);
  if (response.data) {
    return response.data;
  }
};

export const productService = {
 login,
};
