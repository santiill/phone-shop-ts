import React from "react"
import { Accordion, FormControl, InputGroup, Button } from "react-bootstrap"
import * as yup from "yup"
import { useFormik } from "formik"
import {DrinksProps} from "../../../../type/objTypes";
import {useAppDispatch} from "../../../../app/hooks";
import {receiptDrink} from "../../../../features/admin/typesSlice";

export default function DrinkAccordion(props: DrinksProps) {
  const {drinks} = props
  const dispatch = useAppDispatch()
  const validationSchema = yup.object().shape({
    amount: yup
      .number()
      .min(0, "Должно быть больше 0")
      .required("Обязательное поле"),
    price: yup.number().required("Обязательное поле"),
  })
  const initialValues = {
    amount: "",
    price: "",
  }
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    isValid,
    handleSubmit,
    dirty,
    setFieldValue,
  } = useFormik({
    initialValues,
    validateOnBlur: true,
    validationSchema: validationSchema,
    onSubmit: (data, { resetForm }) => {
      dispatch(
        receiptDrink({
          drinkId: drinks.id,
          amount: data.amount,
          isComing: true,
          date: new Date(),
          sum: data.price,
        })
      )
    },
  })
  return (
    <Accordion
      className="songs_accordion songs_accordion-item"
      defaultActiveKey="0"
    >
      <Accordion.Item className="songs_accordion" eventKey="0">
        <Accordion.Header className="songs_accordion songs_accordion-item_header">
          {drinks.name}
        </Accordion.Header>
        <Accordion.Body className="songs_accordion songs_accordion-item_body">
          <div className="songs_accordion-item_body_author">
            Бренд: {drinks.brand.name}
          </div>
          <div className="songs_accordion-item_body_author">
            Количество: {drinks.amount}
          </div>
          <InputGroup>
            <FormControl
              value={values.amount}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Количество поступившего товара"
              className="auth_input"
              type="number"
              name="amount"
            />
          </InputGroup>
          {touched.amount && Boolean(errors.amount) && (
            <div className="input_error">{errors.amount}</div>
          )}
          <InputGroup>
            <FormControl
              value={values.price}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Цена поступившего товара"
              className="auth_input"
              type="number"
              name="price"
            />
          </InputGroup>
          <Button onClick={() => handleSubmit()} disabled={!isValid || !dirty}>
            Отправить
          </Button>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}
