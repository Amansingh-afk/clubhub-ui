import axios from "axios";

const api = axios.create({
  baseURL: "https://clubhub-backend.onrender.com/api/v1",
  // baseURL: "http://localhost:8000/api/v1",
  withCredentials: true, 
  headers: {
    "Content-Type": "application/json",
  },
  userToken: localStorage.getItem('token')
});
api.interceptors.request.use(function (config) {
  const userToken = localStorage.getItem('token');
  if (userToken) {
    config.headers['userToken'] = userToken;
  }
  return config;
}, function (error) {
  return Promise.reject(error);
});
export const login = async (credentials) => {
  const { data } = await api.post("/login", credentials);
  return data;
};

export const updatePassword = async (data) => {
  await api.put("/password/update", data);
};

export const deleteAccount = async () => {
  await api.delete("/delete");
};

export const resetPassword = async (data, token) => {
  await api.put(`/password/reset/${token}`, data);
};
export const createUser = async (userData) => {
  const { data } = await api.post("/register", userData);
  return data;
};

export const getUserDetails = async () => {
  const { data } = await api.get("/me");
  return data;
};

export const updateUserDetails = async (userDetails) => {
  const { data } = await api.put("/me/update", userDetails);
  return data;
};

export const forgotPassword = async (userEmail) => {
  await api.post("/password/forgot", userEmail);
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

export const deleteClub = async (clubId) => {
  await api.delete(`/club/manage/${clubId}`);
};

export const subscribeMembership = async (memberInfo) => {
  await api.post("/subscribe", memberInfo);
};

export const unSubscribeMembership = async (clubId) => {
  await api.delete(`/unsubscribe/${clubId}`);
};
export const createEvent = async (eventData) => {
  await api.post("/create-event", eventData);
};

export const deleteEvent = async (eventId) => {
  await api.delete(`/club/event/${eventId}`);
};

export const getAllEvents = async () => {
  const { data } = await api.get("/events");
  return data;
};

export const getEventData = async (eventId) => {
  const { data } = await api.get(`/club/event/${eventId}`);
  return data;
};

export const updateEventDetails = async (eventId, eventData) => {
  await api.put(`/club/event/${eventId}`, eventData);
};

export const setEventAsCompleted = async (eventId, isCompleted) => {
  await api.put(`/club/event/completed/${eventId}`, {
    isCompleted: isCompleted,
  });
};

export const joinEvent = async (participantdata) => {
  await api.post("/event/join", participantdata);
};

export const leaveEvent = async (eventId) => {
  await api.delete(`/event/leave/${eventId}`);
};

export const removeUserFromClub = async (userInfo) => {
  await api.delete("/club/remove", { data: userInfo });
};

export const removeUserFromEvent = async (userInfo) => {
  await api.delete("/event/remove", { data: userInfo });
};

export const createTeam = async (team) => {
  await api.post("/event/create/team", team);
};

export const joinTeam = async (participantdata) => {
  await api.post("/event/join/team", participantdata);
};
