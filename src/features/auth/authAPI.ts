import axios from "axios";
import {Data} from "../../type/objTypes";

export const authRequests = {
    login: (data: Data) =>axios.post('http://localhost:5000/api/auth/login', data.data),
    registration: (data: Data) => axios.post("http://localhost:5000/api/auth/reg", data.data),
}

