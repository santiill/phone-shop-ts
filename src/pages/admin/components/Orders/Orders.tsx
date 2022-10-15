import React, {useEffect} from "react"
import {useAppDispatch, useAppSelector} from "../../../../app/hooks";
import {getAllAdminOrders} from "../../../../features/admin/ordersSlice";
import OrderItem from "./OrderItem";

export default function Orders() {
  const dispatch = useAppDispatch()
  const {status, allOrders} = useAppSelector(state => state.adminOrder)
  useEffect(() => {
    dispatch(getAllAdminOrders())
    console.log("orderess")
  }, [])
  return (
    <div className='orders'>
      <div className='admin-pages_title'>Заказы</div>
      {status == "success" &&
        allOrders.map(o => {
          return <OrderItem /*key={o.id : number}*/ order={o} />
        })}
    </div>
  )
}
