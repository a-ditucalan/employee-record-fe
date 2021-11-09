import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Pagination from '@material-ui/lab/Pagination'
import * as ACTION from '../store/action/authAction'
import * as ACTION_ITEM from '../store/action/itemAction'
// import ModalCommon from '../common/ModalCommon'
import { Grid } from '@material-ui/core'
import Table from '../common/Table'

import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import ModalCommon from '../common/ModalCommon'
const H4 = styled.p`
  margin-top: 10px;
  font-size: 16px;
  font-weight: 600;
`

const Button = styled.button`
  font-size: 16px;
  padding: 10px;
  background-color: #040084;
  border-color: #040084;

  color: #fff;
  font-weight: 500;
  &:hover {
    border: 1px solid #040084;
    color: #040084;
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

const SearchWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const SearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`

const WrapperFlex = styled.div`
  margin: 150px 20px 20px 20px;
`

const Input = styled.input`
  border: 1px solid #000;
  font-size: 16px;
  padding: 10px;
  margin-top: 10px;
`
const Dashboard = () => {
  const [open, setOpen] = useState(false)
  const [modalState, setModalState] = useState('')
  const [search, setSearch] = useState('')
  const [getId, setGetId] = useState('')
  const dispatch = useDispatch()
  const history = useHistory()
  const auth = useSelector(state => state.auth)
  const itemData = useSelector(state => state.item)
  const pagination = useSelector(state => state.item)

  const onChangeInput = e => {
    const value = e.target.value
    setSearch(value)
    dispatch(ACTION_ITEM.onSearchItem(value))
  }

  const handleClickOpen = () => {
    setOpen(true)
    setModalState('add')
  }

  const handleClose = () => {
    setOpen(false)
  }

  const onGetId = idx => {
    dispatch(ACTION_ITEM.getSpecificItem(idx))
    setModalState('edit')
    setOpen(true)
  }
  const handlePagination = (event, page) => {
    dispatch(ACTION_ITEM.setPaginationPage(page))
  }

  useEffect(() => {
    if (!auth.token) {
      history.push('/')
    }
    dispatch(ACTION_ITEM.getItems())
    dispatch(ACTION_ITEM.getItemAll())
  }, [auth.token, dispatch, history])

  return (
    <WrapperFlex>
      <SearchContainer>
        <Button onClick={() => handleClickOpen()}>Shipment Items</Button>

        <SearchWrapper>
          <H4>Search: &nbsp;</H4>
          <Input
            name="search"
            type="text"
            value={search}
            onChange={e => onChangeInput(e)}
          />
        </SearchWrapper>
      </SearchContainer>
      {itemData.item ? (
        <>
          <Table
            data={itemData.item}
            title={[
              'Shipping Mark',
              'Container Number',
              'Warehouse',
              'Tracking Number',
              'Item Name',
              'CBM',
              'Kilo',
              'Date',
              'Status',
              'Notes'
            ]}
            onGetId={onGetId}
          />
          <Pagination
            count={
              itemData.itemAll &&
              Math.ceil(
                pagination.itemAll.length / parseInt(pagination.query.limit)
              )
            }
            onChange={handlePagination}
            page={pagination && pagination.query.page}
          />
        </>
      ) : (
        <> </>
      )}

      <ModalCommon
        open={open}
        onCloseModal={handleClose}
        modalState={modalState}
      />
    </WrapperFlex>
  )
}

export default Dashboard
