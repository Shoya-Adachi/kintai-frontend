import axios from "axios";
import { LoginFormInputs } from "../common/types";

const API_URL = import.meta.env.VITE_API_BASE_URL;

const LoginApi = async (data: LoginFormInputs) => {
    try {
        const response = await axios.post(`http://${API_URL}/api/v1/login`, {
            name: data.name,
            password: data.password
        })

        return response.data
    } catch (error) {
        throw error;
    }
}

export default LoginApi;