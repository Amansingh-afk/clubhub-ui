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
  const { data } = await api.post("/create-club", clubData);
  return data;
};

export const getAdminClub = async () => {
  const { data } = await api.get("/club");
  return data;
};

export const getClubData = async (clubId) => {
  const { data } = await api.get(`/club/${clubId}`);
  return data;
};

export const updateClubDetails = async (clubId, clubData) => {
  await api.put(`/club/manage/${clubId}`, clubData);
};

export const subscribeMembership = async (memberInfo) => {
  await api.post("/subscribe", memberInfo);
};
