import axios from "axios";
import {config, root} from "../../app/root";
import {editBrandData, executeOrderData, ReportDates} from "../../type/objTypes";
import {getCookie} from "../../utils/cookieFunction";

export const adminRequests = {
    types: {
        getAll: () => axios.get(`${root}type/getAll`),
        add: () => axios.post(`${root}type/add`),
        edit: () => axios.put(`${root}type/edit`, config),
        delete: () => axios.delete(`${root}type/delete`),
    },
    brands: {
        getAll: () => axios.get(`${root}brand/getAll`),
        add: (name: string) => axios.post(`${root}brand/add`, {name: name}, config),
        edit: ({id, name}: editBrandData) => axios.put(`${root}brand/edit/${id}`, name, config),
        delete: (id: number) => axios.delete(`${root}brand/delete/${id}`, config),
    },
    // coupons: {
    //     getAll: () => axios.get(`${root}coupon/getAll`),
    //     add: () => axios.post(`${root}coupon/add`),
    //     delete: () => axios.delete(`${root}coupon/delete`, data, config),
    // },
    orders: {
        getAll: () => axios.get(`${root}orders/getAll`, config),
        execute: (data: executeOrderData) => axios.post(`${root}orders/execute`, data, config),
    },
    reports: {
        getReportByDates: ({startDate, endDate}: ReportDates) => axios.get(`${root}reports/getReportByDates`, {headers: { Authorization: getCookie("token") }, params: { startDate: startDate, endDate: endDate }}),
    },
}
