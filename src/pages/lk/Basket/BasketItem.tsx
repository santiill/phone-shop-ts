import React from "react"
import {
  Accordion,
  Button,
  Form,
  FormControl,
  InputGroup,
} from "react-bootstrap"
import {BasketProps} from "../../../type/objTypes";
import {deleteOrderBasket} from "../../../features/user/orders/ordersSlice";
import {useAppDispatch} from "../../../app/hooks";

export default function BasketItem(props: BasketProps) {
  const dispatch = useAppDispatch()
  const { drink, handleChange } = props
  const [amount, setAmount] = React.useState(props.drink.basket_phone.amount)
  const deleteItemBtn = () => {
    dispatch(deleteOrderBasket(drink.basket_phone.id))
  }

  return (
    <Accordion
      className="songs_accordion songs_accordion-item basket_item"
      defaultActiveKey="1"
    >
      <Accordion.Item className="songs_accordion" eventKey="0">
        <Accordion.Header className="songs_accordion songs_accordion-item_header">
          <Form.Check
            // onChange={() =>
            //   handleChange({
            //     amount: amount,
            //     drinkId: drink.id,
            //     sum: drink.price,
            //     name: drink.name,
            //   })
            // }
            disabled={drink.amount <= 0}
            label={drink.name}
            type="checkbox"
          />
        </Accordion.Header>
        <Accordion.Body className="songs_accordion songs_accordion-item_body">
          <div className="songs_accordion-item_body_author">
            Цена: {drink.price} сом
          </div>
          <div className="songs_accordion-item_body_author">
            {drink.amount <= 0 ? (
              <span className="input_error">
                Количества недостаточно для заказа
              </span>
            ) : (
              `Общее количество: ${drink.amount}`
            )}
          </div>
          <InputGroup className="drinkPage_info_counter">
            <InputGroup.Text
              onClick={() => {
                if (amount <= 1) {
                  return
                }
                setAmount(amount - 1)
              }}
            >
              -
            </InputGroup.Text>
            <FormControl
              value={amount}
              onChange={e => setAmount(+e.target.value)}
              max={drink.amount}
              min={1}
              type="number"
            />
            <InputGroup.Text
              onClick={() => {
                if (amount >= drink.amount) {
                  return
                }
                setAmount(amount + 1)
              }}
            >
              +
            </InputGroup.Text>
          </InputGroup>
          <Button onClick={deleteItemBtn} size="sm" variant="danger">
            Удалить
          </Button>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}
