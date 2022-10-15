import React from "react"
import { FormControl, InputGroup } from "react-bootstrap"
import {useAppDispatch} from "../../../../app/hooks";
import {deleteBrand, editBrand} from "../../../../features/admin/brandsSlice";

export default function TypeItem(props: { type: { name: string, id: number }}) {
  const { name, id } = props.type
  const [choosenItemId, setChoosenItemId] = React.useState(0)
  const [typeName, setTypeName] = React.useState(name)
  const dispatch = useAppDispatch()
  const saveTypeBtn = (id: number) => {
    if (typeName) {
      setChoosenItemId(0)
      dispatch(editBrand({ id, name: typeName }))
    }
  }
  const deleteTypeBtn = (id: number) => {
    dispatch(deleteBrand(id))
  }
  return (
    <div className='typeItem'>
      <InputGroup>
        <FormControl
          disabled={id != choosenItemId}
          name='type'
          type='text'
          onChange={e => setTypeName(e.target.value)}
          value={typeName}
          className='auth_input'
        />
        {id != choosenItemId && (
          <InputGroup.Text
            onClick={() => setChoosenItemId(id)}
            className='types-input_after types-input_after-edit'
          >
            Изменить
          </InputGroup.Text>
        )}

        {id === choosenItemId && (
          <InputGroup.Text
            onClick={() => saveTypeBtn(id)}
            className='types-input_after types-input_after-edit'
          >
            Сохранить
          </InputGroup.Text>
        )}

        <InputGroup.Text
          onClick={() => deleteTypeBtn(id)}
          className='types-input_after types-input_after-delete'
        >
          Удалить
        </InputGroup.Text>
      </InputGroup>
    </div>
  )
}
