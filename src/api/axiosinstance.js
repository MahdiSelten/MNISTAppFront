import axios from "axios"



const axiosisntance = axios.create({
    baseURL: "https://mnistappback-2.onrender.com",
    headers: {
        'Content-Type': 'application/json'
    }
});

export default axiosisntance