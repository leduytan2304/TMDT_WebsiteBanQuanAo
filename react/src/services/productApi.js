import axios from "axios";
import { DOMAIN } from "../utils/config";

export const getListProduct = async () => {
  return axios.get(`http://localhost:8000/api/products`);
};
