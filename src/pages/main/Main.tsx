import React, {useEffect} from "react"
import "./Main.css"
import MyNavbar from "../../components/navbar/Navbar";
import DrinksFilters from "./DrinksFilters";
import {Col, Pagination, Row} from "react-bootstrap";
import {createPages} from "../../utils/pagesCreator";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {getAllFilteredDrinks} from "../../features/user/main/mainSlice";
import DrinkCard from "./DrinkCard/DrinkCard";

export default function Main() {

    const role = useAppSelector(state => state.auth.role)
    const {allDrinks, status} = useAppSelector(state => state.main)
    const dispatch = useAppDispatch()

    const [page, setPage] = React.useState(1)
    const limit = 4
    const pages: number[] = []
    const pagesCount = Math.ceil(10 / limit)
    createPages(pages, pagesCount, page)

    useEffect(() => {
        dispatch(getAllFilteredDrinks({ page, limit }))
    }, [page])

    const navbarLinks =
        role === "admin"
            ? [{ path: "admin", text: "Личный кабинет" }]
            : [{ path: "lk", text: "Личный кабинет" }]
    let phoneNumber: string = ''
    return (
        <div className="admin main container">
            <MyNavbar data={navbarLinks} />
            <DrinksFilters paginationParams={{ page, limit, phoneNumber }} />
            <Row className="main_drinks_row gy-5">
                {status == "success" &&
                    allDrinks?.map(drink => {
                        return (
                            <Col /*key={drink.id}*/ sm>
                                <DrinkCard drinks={drink} />
                            </Col>
                        )
                    })}
            </Row>
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
