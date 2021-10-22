import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import ReactPaginate from 'react-paginate'
import * as ACTION from '../store/action/authAction'
import * as ACTION_ITEM from '../store/action/itemAction'
// import ModalCommon from '../common/ModalCommon'
import { Grid } from '@material-ui/core'
import Table from '../common/Table'
import Pagination from '@material-ui/lab/Pagination'
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
  const itemData = useSelector(state => state.item)

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

  console.log(modalState, 'STATE')
  useEffect(() => {
    if (!auth.token) {
      history.push('/')
    }
    dispatch(ACTION_ITEM.getItems())
  }, [auth.token, dispatch, history])

  return (
    <div>
      <Grid container spacing={1}>
        <Button onClick={() => handleClickOpen()}>Shipment Items</Button>
        {itemData.item ? (
          <Table
            data={itemData.item}
            title={[
              'Shipping Mark',
              'Tracking Number',
              'Item Name',
              'CBM',
              'Kilo',
              'Status'
            ]}
            onGetId={onGetId}
          />
        ) : (
          <> </>
        )}

        <ModalCommon
          open={open}
          onCloseModal={handleClose}
          modalState={modalState}
        />
      </Grid>
    </div>
  )
}

export default Dashboard
