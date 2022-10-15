import {getCookie} from "../utils/cookieFunction";

export const root = "http://localhost:5000/api/"

const token = getCookie("token")
export const config = {
    headers: { Authorization: token }
};