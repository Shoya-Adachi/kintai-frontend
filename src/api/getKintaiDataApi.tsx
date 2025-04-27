import axios from "axios";

const API_URL = import.meta.env.VITE_API_BASE_URL;

export const GetKintaiDataByIdApi = async (id: string | null) => {
  try {
    const response = await axios.get(
      `http://${API_URL}/api/v1/attendance_posts/${id}`
    );

    console.log(response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const GetAllKintaiDataApi = async () => {
  try {
    const response = await axios.get(
      `http://${API_URL}/api/v1/attendance_posts`
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};
