import axios from "axios";

const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
    responseType: "json",
});

export default api;
