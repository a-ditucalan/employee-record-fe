import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import ReactPaginate from 'react-paginate'
import * as ACTION from '../store/action/authAction'
import * as ACTION_EMP from '../store/action/employeeAction'
import ModalCommon from '../common/ModalCommon'
import Table from '../common/Table'
import Pagination from '@material-ui/lab/Pagination'
import styled from 'styled-components'

const H4 = styled.p`
  margin-top: 10px;
  font-size: 16px;
  font-weight: 600;
`

const Button = styled.button`
  font-size: 16px;
  padding: 10px;
  background-color: green;
  border-color: green;
  margin-top: 10px;
  &:hover {
    border: 1px solid green;
    background-color: transparent;
  }
`

const ButtonSearch = styled.button`
  font-size: 16px;
  padding: 5px 10px;
  background-color: green;
  border-color: green;
  margin-top: 10px;
  margin-bottom: 20px;
  margin-left: 10px;
  &:hover {
    border: 1px solid green;
    background-color: transparent;
  }
`

const Input = styled.input`
  border: 1px solid #000;
  font-size: 16px;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 20px;
`

const SearchWrapper = styled.div`
  display: flex;
`
const Dashboard = () => {
  const [open, setOpen] = useState(false)
  const [modalState, setModalState] = useState('')
  const [search, setSearch] = useState('')
  const [getId, setGetId] = useState('')
  const dispatch = useDispatch()
  const history = useHistory()
  const auth = useSelector(state => state.auth)
  const employeeData = useSelector(state => state.employee)

  useEffect(() => {
    if (!auth.token) {
      history.push('/')
    }
    dispatch(ACTION_EMP.getEmployees())
    dispatch(ACTION_EMP.getEmployee())
  }, [auth.token, dispatch, history])

  const onOpenModal = () => setOpen(true)
  const onCloseModal = () => {
    dispatch(ACTION_EMP.getEmployee())

    setOpen(false)
  }

  const onGetId = async data => {
    await dispatch(ACTION_EMP.getSpecificEmployee(data))
    await onOpenModal(true)
    await setModalState('edit')
    await setGetId(data)
  }

  const onAddEmployee = () => {
    setModalState('add')
    onOpenModal(true)
  }

  const handlePagination = page => {
    dispatch(ACTION_EMP.setPaginationPage(page))
    dispatch(ACTION_EMP.getEmployee())
  }
  const onSearch = e => {
    setSearch(e.target.value)
  }

  const onSubmitSearch = () => {
    dispatch(ACTION_EMP.onSearchEmployee(search))
    dispatch(ACTION_EMP.getEmployee())
  }

  return (
    <div>
      <Button onClick={onAddEmployee}>Add Employee</Button>
      <H4>Search:</H4>
      <SearchWrapper>
        <Input
          placeholder="Search"
          value={search}
          onChange={e => onSearch(e)}
        />
        <ButtonSearch onClick={onSubmitSearch}>Search</ButtonSearch>
      </SearchWrapper>

      {employeeData.employee && (
        <>
          <Table data={employeeData.employee} onGetId={onGetId} />
          <Pagination
            count={
              !employeeData.employee.employeeAll
                ? Math.ceil(
                    employeeData.employeeAll.length / employeeData.query.limit
                  )
                : 1
            }
            onChange={(event, page) => handlePagination(page)}
            // page={!!request.table ? request.table.page_number : 0}
          />
        </>
      )}
      <ModalCommon
        open={open}
        getId={getId}
        modalState={modalState}
        onCloseModal={onCloseModal}
      />
    </div>
  )
}

export default Dashboard
