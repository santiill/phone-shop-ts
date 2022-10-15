import axios from "axios";
import {config, root} from "../../../app/root";
import {DataForAddingDrinkToBasket, FilteredDrink} from "../../../type/objTypes";

export const mainRequests = {
    getPaginated: () => axios.post(`${root}projection/getByPagination?`),
    getFiltered: (data: FilteredDrink) => axios.get(`${root}projection/getByFilter?page=${data.page}&limit=${data.limit}`),
    add: (data: DataForAddingDrinkToBasket) => axios.post(`${root}basket/add`, data, config),
    receipt: () => axios.post(`${root}projection/receipt`),
    getById: () => axios.post(`${root}projection/getById`),
}
