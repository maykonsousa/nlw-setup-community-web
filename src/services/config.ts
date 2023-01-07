import axios from "axios";

export const Api = axios.create({
  baseURL: "https://nvl-setup-community-server-production.up.railway.app",
  headers: {
    "Content-Type": "application/json",
  },
});
