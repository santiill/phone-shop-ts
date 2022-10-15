import React, {useEffect} from "react"
import MyOrderItem from "./MyOrderItem";
import {getAllOrders} from "../../../features/user/orders/ordersSlice";
import {useAppDispatch, useAppSelector} from "../../../app/hooks";

export default function MyOrders() {
    const dispatch = useAppDispatch()
    const orders = useAppSelector(state => state.orders)
    useEffect(() => {
        dispatch(getAllOrders())
        console.log("orderess")
    }, [])
    return (
        <div className='orders'>
            <div className='admin-pages_title'>Заказы</div>
            {orders.status == "success" &&
                orders.allOrders.map(o => {
                    return <MyOrderItem /*key={o.id : number}*/ order={o} />
                })}
        </div>
    )
}
