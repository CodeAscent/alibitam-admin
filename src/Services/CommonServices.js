import axios from "axios";

const apiService = axios.create({
  // baseURL:'http://localhost:3100/api/',
  baseURL: "http://15.206.185.144:3100/api/",
});

const sendRequest = async (method, url, data = {}) => {
  const token = localStorage.getItem("token");
  try {
    const response = await apiService({
      method,
      url,
      data,
      headers: {
        Authorization: token ? `Bearer ${token}` : "", // Include the token if provided
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export default sendRequest;
