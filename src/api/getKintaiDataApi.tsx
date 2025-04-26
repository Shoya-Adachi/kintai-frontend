import axios from "axios";
import { KintaiData } from "../common/types";

const API_URL = import.meta.env.VITE_API_BASE_URL;

const GetKintaiDataApi = async(id: string | null) => {
    try {
        const response = await axios.get(`http://${API_URL}/api/v1/attendance_posts/${id}`)

        return response.data
    } catch (error) {
        throw error;
    }
}

export default GetKintaiDataApi;