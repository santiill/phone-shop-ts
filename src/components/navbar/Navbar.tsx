import React from "react"
import "./Navbar.css"
import { Container, Nav, Navbar } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import {getCookie, removeCookie} from "../../utils/cookieFunction";

const links = [{ text: "a", path: "" }]
export default function MyNavbar({ data = links, ...props }) {
  console.log("data",data)
  const token = getCookie("token")
  return (
    <Navbar collapseOnSelect fixed='top' expand='sm' bg='light' >
      <Container>
        <Navbar.Brand>
          <NavLink className={"navbar_logo"} to='/'>
            PhoneShop
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='lk_nav'>
            {data?.map(link => {
              return (
                <NavLink className='navbar_link' key={link.text} to={token ? link.path : "/auth"}>
                  {link.text}
                </NavLink>
              )
            })}
            {token && (
              <div
                style={{ cursor: "pointer",color:"black" }}
                onClick={() => {
                  removeCookie("token")
                  removeCookie("role")
                  document.location.replace("/")
                }}
              >
                Выйти
              </div>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
