import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api" });

export const getProducts = (filters) => API.get("/products", { params: filters });
export const addProduct = (data) => API.post("/products", data);
export const updateProduct = (id, data) => API.put(`/products/${id}`, data);
export const deleteProduct = (id) => API.delete(`/products/${id}`);
