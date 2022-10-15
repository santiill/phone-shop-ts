import React from "react"
import { Button } from "react-bootstrap"
import { useNavigate } from "react-router"
import { NavLink } from "react-router-dom"
import "./DrinkCard.css"
import {DrinksProps} from "../../../type/objTypes";
import {addDrinkToBasket} from "../../../features/user/main/mainSlice";
import {useAppDispatch} from "../../../app/hooks";

export default function DrinkCard(props: DrinksProps) {
  const { drinks } = props
  const dispatch = useAppDispatch()
  const sendToBasketBtn = () => {
    dispatch(addDrinkToBasket({ drinkId: drinks.id, amount: 1 }))
  }
  return (
    <div className='drinkCard'>
      <div className='drinkCard_image'>
        <img src={drinks.logo} alt={drinks.name} />
      </div>
      <NavLink to={`projections/${drinks.id}`} className='drinkCard_attr'>
        {drinks.name}
      </NavLink>
      <div className='drinkCard_attr'>{drinks.price} сом</div>
      {drinks.amount <= 0 ? (
        <span className='input_error'>Телефон закончился</span>
      ) : (
        <Button
          onClick={sendToBasketBtn}
          variant='dark'
          className='drinkCard_btn-basket'
        >
          В КОРЗИНУ
        </Button>
      )}
    </div>
  )
}
