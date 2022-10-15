// import React, {useEffect} from "react"
// import { useDispatch, useSelector } from "react-redux"
// // import { getAllOrders } from "../../../../store/actions/admin/orders"
// import OrderItem from "./OrderItem"
// import {useAppDispatch, useAppSelector} from "../../../../app/hooks";
// import {getAllOrders} from "../../../../features/user/orders/ordersSlice";
//
// export default function Orders() {
//   const dispatch = useAppDispatch()
//   const orders = useAppSelector(state => state.orders)
//   useEffect(() => {
//     dispatch(getAllOrders())
//     console.log("orderess")
//   }, [])
//   return (
//     <div className='orders'>
//       <div className='admin-pages_title'>Заказы</div>
//       {orders.status == "success" &&
//         orders.allOrders.map(o => {
//           return <OrderItem /*key={o.id : number}*/ order={o} />
//         })}
//     </div>
//   )
// }
export {}
