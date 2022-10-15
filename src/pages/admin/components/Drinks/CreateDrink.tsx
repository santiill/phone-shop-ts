import React, {useEffect} from "react"
import "./Drinks.css"
import { InputGroup, FormControl, Button, Form } from "react-bootstrap"
import {useAppDispatch, useAppSelector} from "../../../../app/hooks";
import {getAllBrands} from "../../../../features/admin/brandsSlice";
import * as yup from "yup"
import { useFormik } from "formik"

export default function CreateDrink() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getAllBrands())
  }, [])
  const {allBrands, status} = useAppSelector(state => state.brands)
  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .required("Обязательное поле")
      .min(3, "Минимальное количество символов 3"),
    brandId: yup.number().required("Обязательное поле"),
    price: yup.number().required("Обязательное поле"),
    amount: yup.number().required("Обязательное поле"),
    logo: yup.string().required("Обязательное поле"),
  })
  const initialValues = {
    name: "",
    brandId: "",
    price: "",
    amount: "",
    logo: "",
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
      // dispatch(addType(data))
    },
  })
  const convertBase64 = (file: string) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader()
      // fileReader.readAsDataURL(file)

      fileReader.onload = () => {
        resolve(fileReader.result)
      }

      fileReader.onerror = error => {
        reject(error)
      }
    })
  }
  const uploadImage = async (file: string) => {
    const base64 = await convertBase64(file)
    setFieldValue("logo", base64)
  }
  return (
    <div className="drinks">
      <h1 className="admin-pages_title">Создать телефон</h1>
      <form>
        <span className="auth_label">Название телефона*</span>
        <InputGroup>
          <FormControl
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            name="name"
            // error={touched.name && Boolean(errors.name)}
            className="auth_input"
            placeholder="Введите название"
          />
        </InputGroup>
        {touched.name && Boolean(errors.name) && (
          <div className="input_error">{errors.name}</div>
        )}

        <span className="auth_label">*Цена</span>
        <InputGroup>
          <FormControl
            value={values.price}
            onChange={handleChange}
            onBlur={handleBlur}
            name="price"
            type="number"
            // error={touched.price && Boolean(errors.price)}
            className="auth_input"
            placeholder="Введите цену"
          />
        </InputGroup>
        {touched.price && Boolean(errors.price) && (
          <div className="input_error">{errors.price}</div>
        )}
        <span className="auth_label">*Количество</span>
        <InputGroup>
          <FormControl
            value={values.amount}
            onChange={handleChange}
            onBlur={handleBlur}
            name="amount"
            type="number"
            // error={touched.amount && Boolean(errors.amount)}
            className="auth_input"
            placeholder="Введите количество"
          />
        </InputGroup>
        {touched.amount && Boolean(errors.amount) && (
          <div className="input_error">{errors.amount}</div>
        )}
        {status == "success" && (
          <>
            <span className="auth_label">Бренд*</span>
            <Form.Select
              onChange={handleChange}
              onBlur={handleBlur}
              name="brandId"
              className="auth_input"
            >
              <option disabled selected>
                -
              </option>
              {/*{status == "success" &&*/}
              {/*  allBrands.map(brand => {*/}
              {/*    return (*/}
              {/*      <option key={brand.id} value={brand.id}>*/}
              {/*        {brand.name}*/}
              {/*      </option>*/}
              {/*    )*/}
              {/*  })}*/}
            </Form.Select>
          </>
        )}

        <Form.Group>
          <span className="auth_label">Картинка*</span>
          <Form.Control
            // onChange={e => uploadImage(e.target.files[0])}
            onBlur={handleBlur}
            accept="image/png, image/jpeg"
            className="auth_input"
            type="file"
            name="logo"
          />
        </Form.Group>
        {touched.logo && Boolean(errors.logo) && (
          <div className="input_error">{errors.logo}</div>
        )}
        <Button
          onClick={() => handleSubmit()}
          disabled={!isValid || !dirty}
          type="button"
          className="auth_btn"
          variant="primary"
        >
          Отправить
        </Button>
      </form>
    </div>
  )
}
