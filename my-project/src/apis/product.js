// utils.js
import axios from "axios";
import ENV_DEV from "../constant/env";

export const getProducts = async (params) => {
    try {
        const response = await axios.get(
            `${ENV_DEV.TEST.JSON_SERVER_API}/product`,
            { params }
        );
        return response.data;
    } catch (error) {
        console.error("Failed to fetch products:", error);
        throw error;
    }
};
