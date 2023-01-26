import axios from 'axios'
const API = axios.create({ baseURL: 'https://livin.audiograms.xyz' });


API.interceptors.request.use((req) => {
    if (localStorage.getItem("adminProfile")) {
      req.headers.Authorization = `Bearer ${JSON.parse(
        localStorage.getItem("adminProfile")
      ).token}`;
    }
    return req;
  });

export const userList = () => API.get("/api/v1/admin/users");
export const postsList = () => API.get("/api/v1/admin/posts");
export const blockUser = (id) => API.get(`/api/v1/admin/block/${id}`);
export const unBlockUser = (id) => API.patch(`/api/v1/admin/block/${id}`);
export const removePost = (id) => API.get(`/api/v1/admin/post/${id}`);
export const adminDashboard = (id) => API.get('/api/v1/admin/dashboard');
export const adminNotification = () => API.get('/api/v1/admin/notification');
export const deleteAdminNotification = () => API.get('/api/v1/admin/notification/delete');
export const adminDeletePost = (postId) => API.get(`/api/v1/admin/deletePost/${postId}`);