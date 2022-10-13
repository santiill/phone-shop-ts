// A mock function to mimic making an async request for data
// import {fetchAPI} from "../../utils/fetchCreateFunction";
import axios from "axios";
import {Data} from "../../type/objTypes";

// const fetchAPI = axios.create({
//     baseURL: "http://localhost:5000/api/",
//     headers: {
//         "Content-type": "application/json",
//         // Authorization: `Bearer ${tokenLocal}`,
//     },
// });

export const authRequests = {
    login: (data: Data) =>axios.post('http://localhost:5000/api/auth/login', data.data),
    registration: (data: Data) => axios.post("http://localhost:5000/api/auth/reg", data.data),
    getRole: (data: Data) => axios.post("auth/getRole/", data),
}

