import axios from "axios";

export const baseUrl = axios.create({
    baseURL: "http://localhost:7200"
})

export default baseUrl;