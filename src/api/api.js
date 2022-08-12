import axios from "axios";

export default axios.create({
    baseURL: 'https://cdf-backend.herokuapp.com/api'
});


// Remote: 'https://cdf-backend.herokuapp.com/api'
// Local: 'http://localhost:8080/api'
