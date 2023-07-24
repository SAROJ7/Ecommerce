import axios from "axios";
import { config, base_url } from "../../utils/axiosConfig";

const createAuction = async (auction) => {
  const response = await axios.post(`${base_url}auction`, auction, config);
  if (response.data) {
    return response.data;
  }
};

const getAuctions = async () => {
  const response = await axios.get(`${base_url}auction`, config);
  if (response.data) {
    return response.data;
  }
};

export const auctionService = {
  createAuction,
  getAuctions,
};
