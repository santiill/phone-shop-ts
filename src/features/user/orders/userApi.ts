import axios from "axios";
import {config, root} from "../../../app/root";

export const userRequests = {
    coupons: {
        addToMe: () => axios.post(`${root}coupons/setCouponToMe`),
        getMyCoupons: () => axios.post(`${root}coupons/getMyCoupons`),
    },
    basket: {
        getAll: () => axios.get(`${root}basket/getAll`, config),
        add: () => axios.post(`${root}basket/add`),
        delete: (id: number) => axios.delete(`${root}basket/delete/${id}`, config),
    },
    order: {
        getAll: () => axios.get(`${root}userOrders/getAll`, config),
        add: () => axios.post(`${root}userOrders/add`),
    },
}
