import axios from "axios";

let mockRequest = axios.create({
    baseURL:'/mock',
    timeout:5000
});

export default mockRequest