import React from "react"
import { NavLink, Outlet } from "react-router-dom"
import "./Admin.css"
import MyNavbar from "../../components/navbar/Navbar";

export default function Admin() {
    const navbarLinks = [
        { path: "", text: "Бренды" },
        { path: "projections", text: "Телефоны" },
        { path: "orders", text: "Заказы" },
        { path: "reports", text: "Итог" },
    ]
    return (
        <div className='admin container'>
            <MyNavbar data={navbarLinks} />
            <div className='admin_divider'>
                <Outlet />
            </div>
        </div>
    )
}
