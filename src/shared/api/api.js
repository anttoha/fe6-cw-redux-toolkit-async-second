import axios from "axios";

const api = axios.create({
    baseURL: "https://6aff2de47fc363ccff08f320.mockapi.io",
});

export default api;