import React from "react"
import { useSelector } from "react-redux"
import { Navigate, Route, useLocation } from "react-router-dom"
import {getCookie} from "../utils/cookieFunction";
import Lk from "../pages/lk/Lk";
import roles from "../utils/roles";

export const RequiredAuth = ({roles: string = ''}) => {
  let location = useLocation()
  const successLogin = getCookie("token")
  const role: string | null = getCookie("role")
  // const roleState = useSelector(state => state.auth.getRole)
  // @ts-ignore
  const userHasRequiredRole = roles.includes(role)
  if (!successLogin) {
    return <Navigate to='/auth' state={{ from: location }} />
  }
  if (successLogin && !userHasRequiredRole) {
    return (
      <Navigate
        to={role === "admin" ? "/admin" : "/lk"}
        state={{ from: location }}
      />
    )
  }
  return <Lk/>
}
