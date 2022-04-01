import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API,
});

export const useApi = () => ({
  validateToken: async (token: string) => {
    return {
      user: { id: 3, name: "José", email: "jose@gmail.com" },
    };
  },
  signin: async (email: string, password: string) => {
    return {
      user: { id: 3, name: "José", email: "jose@gmail.com" },
      token: "12456789",
    };
  },
  logout: async () => {
    return {
      status: true,
    };
  },
});
