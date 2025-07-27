import axios from "axios";
import axiosisntance from "./axiosinstance";


const predict = async (formData) => {
    try {
        const response = await axiosisntance.post("/predict", formData);
        return {
            success: true,
            data: response.data,
            message: "Prediction successful"
        }
    } catch(error) {
        return {
            success: false,
            message: error.response?.data?.message || 
              error.message || 
              'Prediction failed'
        }
    }
};

export default predict
