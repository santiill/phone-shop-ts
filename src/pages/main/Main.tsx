import React from "react"
import "./Main.css"
import {getCookie} from "../../utils/cookieFunction";
import MyNavbar from "../../components/navbar/Navbar";
import DrinksFilters from "./DrinksFilters";
import {Pagination, Row} from "react-bootstrap";
import {createPages} from "../../utils/pagesCreator";
import {useAppSelector} from "../../app/hooks";

export default function Main() {

    const [page, setPage] = React.useState(1)
    const limit = 4
    const pages: number[] = []
    const pagesCount = Math.ceil(10 / limit)
    createPages(pages, pagesCount, page)

    const role = useAppSelector(state => state.auth.role)

    const navbarLinks =
        role === "admin"
            ? [{ path: "admin", text: "Личный кабинет" }]
            : [{ path: "lk", text: "Личный кабинет" }]

    return (
        <div className="admin main container">
            <MyNavbar data={navbarLinks} />
            <DrinksFilters paginationParams={{ page, limit }} />
            <Row className="main_drinks_row gy-5">
                {/*{allDrinks.success &&*/}
                {/*    allDrinks.drinks.map(drink => {*/}
                {/*        return (*/}
                {/*            <Col key={drink.id} sm>*/}
                {/*                <DrinkCard data={drink} />*/}
                {/*            </Col>*/}
                {/*        )*/}
                {/*    })}*/}
            </Row>
            <Pagination className="pagination_pages ">
                {/*{pages.map(pN => (*/}
                {/*    <Pagination.Item*/}
                {/*        onClick={() => setPage(pN)}*/}
                {/*        className="auth_input"*/}
                {/*        key={pN}*/}
                {/*        active={pN === page}*/}
                {/*    >*/}
                {/*        {pN}*/}
                {/*    </Pagination.Item>*/}
                {/*))}*/}
            </Pagination>
        </div>
    )
}
