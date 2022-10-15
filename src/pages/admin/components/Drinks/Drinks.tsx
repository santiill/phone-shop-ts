import React, {useEffect, useState} from "react"
import "./Drinks.css"
import { createPages } from "../../../../utils/pagesCreator"
import { Pagination } from "react-bootstrap"
import { Button } from "react-bootstrap"
import DrinkAccordion from "./DrinkAccordion"
import {useAppDispatch, useAppSelector} from "../../../../app/hooks";
import {getAllFilteredDrinks} from "../../../../features/user/main/mainSlice";

export default function Drinks() {
  const dispatch = useAppDispatch()

  const {allDrinks, total, status} = useAppSelector(state => state.main)
  const [page, setPage] = useState(1)
  const limit = 4
    const pages: number[] = []
    const pagesCount = Math.ceil(total / limit)
  createPages(pages, pagesCount, page)
  useEffect(() => {
    dispatch(getAllFilteredDrinks({ page, limit }))
  }, [page])

  return (
    <div className="drinks">
        <Button> Создать телефон</Button>
      <h1 className="admin-pages_title">Телефоны</h1>
      <div>
        {status == "success" &&
          allDrinks.map(drink => {
            return <DrinkAccordion /*key={drink.id}*/ drinks={drink} />
          })}
      </div>
      <Pagination className="pagination_pages ">
        {pages.map(pN => (
          <Pagination.Item
            onClick={() => setPage(pN)}
            className="auth_input"
            key={pN}
            active={pN === page}
          >
            {pN}
          </Pagination.Item>
        ))}
      </Pagination>
    </div>
  )
}
