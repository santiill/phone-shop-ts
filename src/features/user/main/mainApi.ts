import axios from "axios";
import {config, root} from "../../../app/root";
import {DataForAddingDrinkToBasket, FilteredDrink, ReceiptDrinkData} from "../../../type/objTypes";

export const mainRequests = {
    getFiltered: (data: FilteredDrink) => axios.get(`${root}projection/getByFilter?page=${data.page}&limit=${data.limit}`),
    add: (data: DataForAddingDrinkToBasket) => axios.post(`${root}basket/add`, data, config),
    receipt: (data: ReceiptDrinkData) => axios.post(`${root}projection/receipt`, data, config),
}
