import axios from "axios";

const API = axios.create({ baseURL: 'https://livin.audiograms.xyz' });
API.interceptors.request.use((req) => {
    if (localStorage.getItem("profile")) {
      req.headers.Authorization = `Bearer ${JSON.parse(
        localStorage.getItem("profile")
      ).token}`;
    }
    return req;
  });
const addComment = (data,id) => API.post(`/api/v1/comment/${id}`, data);