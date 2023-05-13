import axios from "axios";

const api = axios.create({
  baseURL: "/api/v1", // http://localhost:8000/api/v1/ ...
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // Include cookies in the request
});

export const login = async (credentials) => {
  const { data } = await api.post("/login", credentials);
  return data;
};

export const createUser = async (userData) => {
  const { data } = await api.post("/register", userData);
  return data;
};

export const getAllClubs = async () => {
  const { data } = await api.get("/clubs");
  return data;
};

export const createClub = async (clubData) => {
  console.log(clubData)
  const { data } = await api.post("/create-club", clubData);
  return data;
};
