import React, {useEffect} from "react"
import "./Brands.css"
import { FormControl, InputGroup } from "react-bootstrap"
import BrandItem from "./BrandItem"
import {useAppDispatch, useAppSelector} from "../../../../app/hooks";
import {addBrand, getAllBrands} from "../../../../features/admin/brandsSlice";
export default function Brands() {
  const dispatch = useAppDispatch()
  const {status, allBrands} = useAppSelector(state => state.brands)
  const [typeName, setTypeName] = React.useState("")
  useEffect(() => {
    dispatch(getAllBrands())
  }, [])
  const addTypeBtn = async () => {
    if (typeName) {
      dispatch(addBrand(typeName))
    }
  }
  return (
    <div className='types'>
      <h1 className='admin-pages_title'>Производители</h1>
      <InputGroup>
        <FormControl
          placeholder='Введите название производителя'
          className='auth_input'
          onChange={e => setTypeName(e.target.value)}
          value={typeName}
        />
        <InputGroup.Text
          onClick={addTypeBtn}
          className='types-input_after types-input_after-send'
        >
          +
        </InputGroup.Text>
      </InputGroup>
      {status == 'success' &&
        allBrands.map(type => {
          return <BrandItem /*key={type.id}*/ type={type} />
        })}
    </div>
  )
}
