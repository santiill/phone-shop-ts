import React from "react"
import { FormControl, InputGroup, Button } from "react-bootstrap"
import ReportItem from "./ReportItem"
import "./Reports.css"
import {useAppDispatch, useAppSelector} from "../../../../app/hooks";
import {getReport} from "../../../../features/admin/reportSlice";

export const Reports = () => {
  const dispatch = useAppDispatch()
  const [dates, setDates] = React.useState({ startDate: "", endDate: "" })
  const getReportBtn = () => {
    dispatch(getReport(dates))
  }
  const {orders, total_sum, status} = useAppSelector(state => state.report)
  return (
    <div className='reports'>
      <span className='auth_label'>Начальная дата*</span>
      <InputGroup>
        <FormControl
          value={dates.startDate}
          onChange={e => setDates({ ...dates, startDate: e.target.value })}
          name='startDate'
          type='datetime-local'
          className='auth_input'
        />
      </InputGroup>

      <span className='auth_label'>Конечная дата*</span>
      <InputGroup>
        <FormControl
          value={dates.endDate}
          onChange={e => setDates({ ...dates, endDate: e.target.value })}
          name='endDate'
          type='datetime-local'
          className='auth_input'
        />
      </InputGroup>
      <Button onClick={getReportBtn} className='reports_btn'>
        Найти
      </Button>
      {status == "success" && orders.length && (
        <div className='report_info'>По этим датам данных нет</div>
      )}
      {status == "success" && orders && (
        <div className='report_reports'>
          {orders.map(o => (
            <ReportItem /*key={o.id}*/ order={o} />
          ))}
          <h2>Сумма: {total_sum} сом</h2>
        </div>
      )}
    </div>
  )
}
