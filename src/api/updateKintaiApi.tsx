import axios from "axios";
import { KintaiData } from "../common/types";

const API_URL = import.meta.env.VITE_API_BASE_URL;

const UpdateKintaiDataApi = async(data: KintaiData) => {
    try {
        const response = await axios.put(`http://${API_URL}/api/v1/attendance_posts/${data.kintai_id}`, {
            end_time: data.time
        })

        return response.data
    } catch (error) {
        throw error;
    }
}

export default UpdateKintaiDataApi;