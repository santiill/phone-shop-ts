import {getCookie} from "./cookieFunction";
import axios from "axios";

const token = getCookie("access")
console.log(token)

const tokenLocal = localStorage.getItem("token")
// export const fetchAPI = axios.create({
//     baseURL: "http://localhost:5000/api/",
//     headers: {
//         "Content-type": "application/json",
//         // Authorization: `Bearer ${tokenLocal}`,
//     },
// });