import axios from "axios";
import { KintaiData } from "../common/types";

const API_URL = import.meta.env.VITE_API_BASE_URL;

const CreateKintaiApi = async (data: KintaiData) => {
    try {
        const response = await axios.post(`http://${API_URL}/api/v1/attendance_posts`, {
            user_id: data.user_id,
            start_time: data.time
        })

        return response.data
    } catch (error) {
        throw error;
    }
}

export default CreateKintaiApi;