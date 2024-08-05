import axios from "axios"

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/api/users",
 // baseURL: "https://castme-project-1.onrender.com/api/users",
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    console.log(token,"interceptor page token")
    if (token !== null) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

 // Response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (
      error.response &&
      error.response.data.status === 401 &&
      error.response.data.error === "Unauthorized - No token found"
    ) {
      console.log("Unauthorized access - no token found");
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;