import axios from "axios";
//Used for onine JSON-store database

const axiosConfig = axios.create({
    baseURL: "https://studyspace-backend.herokuapp.com/",
});

export default axiosConfig;
