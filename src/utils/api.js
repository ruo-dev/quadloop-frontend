import axios from "axios";
import Cookies from "js-cookie";

const axiosInstance = axios.create({
     baseURL: import.meta.env?.VITE_API_URL,
     headers: {
          "Content-Type": "application/json",
     },
});

// Function to get the token from cookies
const getToken = () => Cookies.get("jwt");
const getUserId = () => JSON.parse(localStorage.getItem("user")).id;

// Function to set the token in cookies
const setToken = (token) => Cookies.set("jwt", token, {sameSite: "Lax"});

// Function to get the refresh token from cookies
const getRefreshToken = () => Cookies.get("refreshToken");

// Function to set the refresh token in cookies
const setRefreshToken = (refreshToken) =>
     Cookies.set("refreshToken", refreshToken, {sameSite: "Lax"});

axiosInstance.interceptors.request.use(
     (config) => {
          const token = getToken();
          if (token) {
               config.headers.Authorization = `Bearer ${token}`;
          }
          return config;
     },
     (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
     (response) => response,
     (error) => {
          if (
               (error.response && error.response.status === 403) ||
               error.response.data.message === "Access denied"
          ) {
               window.location.href = "/login";
          }
          return Promise.reject(error);
     }
);

axiosInstance.interceptors.response.use(
     (response) => response,
     async (error) => {
          const originalRequest = error.config;

          if (
               error.response.status === 401 ||
               (error.response.data.message === "jwt expired" &&
                    !originalRequest._retry)
          ) {
               originalRequest._retry = true;
               try {
                    const {
                         data: { data },
                    } = await axiosInstance.post("/api/v1/auth/refresh-token", {
                         refresh_token: getRefreshToken(),
                         user_id: getUserId(),
                    });
                    console.log("refresh token: ", data);
                    setToken(data.accessToken);
                    setRefreshToken(data.refreshToken);
                    axiosInstance.defaults.headers.common[
                         "Authorization"
                    ] = `Bearer ${data.accessToken}`;

                    return axiosInstance(originalRequest);
               } catch (err) {
                    window.location.href = "/login";
               }
          }

          return Promise.reject(error);
     }
);

const api = () => {
     return {
          get: async (url, options = {}) => {
               return await axiosInstance.get(url, options);
          },
          post: async (url, data, options = {}) => {
               return await axiosInstance.post(url, data, options);
          },
          put: async (url, data, options = {}) => {
               return await axiosInstance.put(url, data, options);
          },
          delete: async (url, options = {}) => {
               return await axiosInstance.delete(url, options);
          },
     };
};

export default api;
