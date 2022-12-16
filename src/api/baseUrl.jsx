import axios from "axios";

export const baseUrl = axios.create({
    baseURL: "https://catfact.ninja/fact"
})

export default baseUrl;