import axios from "axios";

// Use to deployed database
export const deployURL = "https://sil-cards-test-database.vercel.app/";

// Use to local requests
export const baseURL = "http://localhost:3000";

export const api = axios.create({
  baseURL: deployURL,
  timeout: 5000,
});
