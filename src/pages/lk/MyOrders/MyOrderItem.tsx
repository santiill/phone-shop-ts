import React from "react"
import { Accordion } from "react-bootstrap"
import {OrderProps} from "../../../type/objTypes";

export default function MyOrderItem(props: OrderProps) {
  const makeStatusString = (status:number) => {
    let statusStr
    switch (status) {
      case 0:
        statusStr = "Отказано"
        break
      case 1:
        statusStr = "В ожидании"
        break
      case 2:
        statusStr = "Выполнено"
        break
      default:
        statusStr = "В ожидании"
    }
    return statusStr
  }
  return (
    <Accordion
      className="songs_accordion songs_accordion-item"
      defaultActiveKey="0"
    >
      <Accordion.Item className="songs_accordion" eventKey="0">
        <Accordion.Header className="songs_accordion songs_accordion-item_header">
          Номер заказа: {props.order.id}
        </Accordion.Header>
        <Accordion.Body className="songs_accordion songs_accordion-item_body">
          <div className="songs_accordion-item_body_author">
            Дата: {new Date(props.order.date).toLocaleString()}
          </div>
          <div className="songs_accordion-item_body_author">
            Сумма: {props.order.sum} сом
          </div>
          <div className="songs_accordion-item_body_author">
            Выполнено: {makeStatusString(props.order.status)}
          </div>
          <h2 className="order_item_subtitle">Телефоны</h2>
          {props.order.phones.length &&
            props.order.phones.map((d, index) => (
              <div key={d.id}>
                {index + 1}){d.name} - {d.price} сом - {d.order_phone.amount}{" "}
                шт.
              </div>
            ))}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}
