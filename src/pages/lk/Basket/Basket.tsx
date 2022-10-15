import React from "react"
import { Button, Form, Modal } from "react-bootstrap"
import "./Basket.css"
import BasketItem from "./BasketItem"
import "./../../admin/Admin.css"
import {useAppDispatch, useAppSelector} from "../../../app/hooks";
import {getAllBasket} from "../../../features/user/orders/ordersSlice";


export default function Basket() {
  const dispatch = useAppDispatch()
  const {status, allBasket} = useAppSelector(state => state.orders)
  React.useEffect(() => {
    dispatch(getAllBasket())
  }, [])
  const [show, setShow] = React.useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  // const sendOrderBtn = () => {
  //   dispatch(
  //     addOrder({
  //       drinks: checkedItems,
  //       date: new Date(),
  //       sum: total,
  //     })
  //   )
  //   setShow(false)
  // }


  const [checkedItems, setCheckedItems] = React.useState([])
  // const handleChange = (props: handleChangeProps) => {
  //   const candidateChecked = checkedItems
  //   const findIdx = candidateChecked.findIndex(
  //     obj => obj.drinkId == props.data.drinkId
  //   )
  //   if (findIdx > -1) {
  //     candidateChecked.splice(findIdx, 1)
  //   } else {
  //     candidateChecked.push(props.data)
  //   }
  //   setCheckedItems(candidateChecked)
  // }
  const makeOrderBtn = () => {
    if (checkedItems.length < 1) {
    } else {
      handleShow()
    }
  }
  let total = 0
  return (
    <div className="basket">
      <h1 className="admin-pages_title">Корзина</h1>
      {status == "loading" && <div>Загрузка...</div>}
      {status == "success" &&
        allBasket.map(drink => (
          <BasketItem
            // handleChange={handleChange}
            // key={drink.id}
            drink={drink}
          />
        ))}
      {status == "success" && allBasket.length <= 0 && (
        <>
          <div>Корзина пуста</div>
        </>
      )}
      {status == "success" && allBasket.length > 0 && (
        <>
          <Button onClick={makeOrderBtn} className="basket_btn">
            Заказать
          </Button>
        </>
      )}

      <Modal className="basket_modal" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Заказ</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="basket_modal_body">
            <div>Название - Кол-во - Цена - Сумма</div> <br />
            {/*{checkedItems.map(d => (*/}
            {/*  <div key={d.drinkId} className="basket_modal_body_items">*/}
            {/*    {d.name} - {d.amount}шт - {d.sum} сом = {d.sum * d.amount} сом*/}
            {/*    <span style={{ display: "none" }}>*/}
            {/*      {(total += d.sum * d.amount)}*/}
            {/*    </span>*/}
            {/*  </div>*/}
            {/*))}*/}
            <div className="modal_sum">
              Сумма:
              {total}
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div>
            *Ваш заказ может быть отказан если товар выкупят быстрее вас
          </div>
          <Button variant="primary" /*onClick={sendOrderBtn}*/>
            Заказать
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
