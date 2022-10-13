import React from "react"
import { Outlet } from "react-router"
import "./Lk.css"
import {Navbar} from "react-bootstrap";
import MyNavbar from "../../components/navbar/Navbar";

export default function Lk() {
  const navbarLinks = [
    { path: "", text: "Корзина" },
    { path: "orders", text: "Мои заказы" },
  ]
  return (
    <div className='lk container'>
      <MyNavbar data={navbarLinks} />
      <div className='admin_divider'>
        <Outlet />
      </div>
    </div>
  )
}
