export interface Data {
    data: {
        email: string;
        password: string;
    }
    navigate? : any;
}

export interface DataForAddingDrinkToBasket {
    amount: number,
    drinkId: number,
}

export interface ReportDates {
    startDate: string,
    endDate: string,
}

export interface FilteredDrink {
    phoneName?: string,
    page: number,
    limit: number,
}

export interface ReceiptDrinkData {
    drinkId: number,
    amount: string,
    isComing: boolean,
    date: Date,
    sum: string,
}

export interface addTypeData {
    name: string,
    brandId: string,
    price: string,
    amount: string,
    logo: string,
}

export interface executeOrderData {
    orderId: number,
    drinks: [
        {
            id: number,
            name: string,
            order_phone: { amount: number },
            price: number,
        }
    ],
    status: number,
}

export interface editBrandData {
    id: number,
    name: string,
}

export type OrderProps = {
    order: {
        id: number,
        date: number,
        sum: number,
        status: number,
        user?: {email: string},
        phones: [
            {
                id: number,
                name: string,
                order_phone: { amount: number },
                price: number,
            }
        ]
    }
}

export type BasketProps = {
    drink: {
        id: number,
        amount: number,
        name: string,
        price: number,
        basket_phone:
            {
                id: number,
                amount: number,
                phoneId: number,
                userId: number,
            }

    }
    handleChange?: object
}

export type DrinksProps = {
    drinks: {
        id: number,
        amount: number,
        brandId: number,
        name: string,
        price: number,
        logo: string,
        brand:
            {
                name: string
            }

    }
}

export type handleChangeProps = {
    data: {
        amount: number,
        drinkId: number,
        sum: number,
        name: string,
    }
}

