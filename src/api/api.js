import axios from "axios";

export default axios.create({
    baseURL: 'https://cdf-backend.herokuapp.com/api'
});
