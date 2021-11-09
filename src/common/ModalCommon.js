import React, { useState, useEffect } from 'react'
import 'react-responsive-modal/styles.css'
import * as ACTION_ITEM from '../store/action/itemAction'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { Modal } from 'react-responsive-modal'
import DropdownClearable from './CommonDropdown'

import MenuItem from '@material-ui/core/MenuItem'

import Select from '@material-ui/core/Select'

const ModalWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  width: 350px;
  align-items: center;
  height: 400;
`

const Input = styled.input`
  border: 1px solid #000;
  font-size: 16px;
  padding: 10px;
  margin-top: 10px;
`

const H4 = styled.p`
  font-size: 16px;
  font-weight: 600;
`

const Button = styled.button`
  font-size: 16px;
  padding: 10px;
  background-color: #040084;
  border-color: #040084;
  margin-top: 10px;
  color: #fff;
  &:hover {
    border: 1px solid #040084;
    color: #040084;
    background-color: transparent;
  }
`
const ModalCommon = ({ open, onCloseModal, modalState, getId }) => {
  const dispatch = useDispatch()
  const itemData = useSelector(state => state.item)
  const [newItem, setNewItem] = useState(itemData.seletedItem)

  const onChangeInput = e => {
    const name = e.target.name
    const value = e.target.value
    setNewItem({
      ...newItem,
      [name]: value
    })
  }

  useEffect(() => {
    setNewItem(itemData.selectedItem)
  }, [itemData.selectedItem])

  const onSave = () => {
    dispatch(ACTION_ITEM.addItem(newItem))
    dispatch(ACTION_ITEM.getItems())
    onCloseModal()
  }

  const onEdit = () => {
    dispatch(ACTION_ITEM.updateItem(newItem))
    dispatch(ACTION_ITEM.getItems())
    onCloseModal()
  }

  const onDelete = id => {
    const data = {
      itemID: id
    }
    dispatch(ACTION_ITEM.deleteItem(data))
  }

  return (
    <Modal open={open} onClose={onCloseModal} center>
      {modalState === 'add' ? (
        <ModalWrapper>
          <H4>Status:</H4>
          <Select
            name="status"
            displayEmpty
            defaultValue={'Select the value'}
            // value={this.state.age}
            label="Warehouse"
            onChange={e => onChangeInput(e)}
          >
            <MenuItem value={'China warehouse'}>China warehouse</MenuItem>
            <MenuItem value={'In Transit to PH'}>In Transit to PH</MenuItem>
            <MenuItem value={'Custom Clearance'}>Custom Clearance</MenuItem>
            <MenuItem value={'Bulacan Warehouse'}>Bulacan Warehouse</MenuItem>
          </Select>
          <H4>Warehouse:</H4>
          <Select
            name="warehouse"
            displayEmpty
            defaultValue={'Select the value'}
            // value={this.state.age}
            label="Warehouse"
            onChange={e => onChangeInput(e)}
          >
            <MenuItem value={'Yiwu warehouse'}>Yiwu warehouse</MenuItem>
            <MenuItem value={'Guangzhou warehouse'}>
              Guangzhou warehouse
            </MenuItem>
          </Select>
          <H4>Shipping Mark:</H4>
          <Input
            name="shippingMark"
            type="text"
            onChange={e => onChangeInput(e)}
          />
          <H4>Item Name:</H4>
          <Input name="itemName" type="text" onChange={e => onChangeInput(e)} />
          <H4>cbm:</H4>
          <Input name="cbm" type="number" onChange={e => onChangeInput(e)} />
          <H4>Kilo:</H4>
          <Input name="kilo" type="number" onChange={e => onChangeInput(e)} />
          <H4>Number of Box:</H4>
          <Input
            name="numberOfBox"
            type="number"
            onChange={e => onChangeInput(e)}
          />
          <H4>Tracking Number:</H4>
          <Input
            name="trackingNumber"
            type="text"
            onChange={e => onChangeInput(e)}
          />
          <H4>Notes:</H4>
          <Input name="notes" type="text" onChange={e => onChangeInput(e)} />
          <Button
            // disabled={newItem.shippingMark ? false : true}
            onClick={onSave}
          >
            Save
          </Button>
        </ModalWrapper>
      ) : modalState === 'edit' ? (
        <>
          {newItem ? (
            <>
              <ModalWrapper>
                <H4>Status:</H4>
                <Select
                  name="status"
                  value={newItem.status}
                  renderValue={value => value}
                  onChange={e => onChangeInput(e)}
                >
                  <MenuItem value={'China warehouse'}>China warehouse</MenuItem>

                  <MenuItem value={'In Transit to PH'}>
                    In Transit to PH
                  </MenuItem>
                  <MenuItem value={'Custom Clearance'}>
                    Custom Clearance
                  </MenuItem>
                  <MenuItem value={'Bulacan Warehouse'}>
                    Bulacan Warehouse
                  </MenuItem>
                </Select>
                <H4>Warehouse:</H4>
                <Select
                  name="warehouse"
                  displayEmpty
                  defaultValue={'Select the value'}
                  // value={this.state.age}
                  label="Warehouse"
                  onChange={e => onChangeInput(e)}
                >
                  <MenuItem value={'Yiwu warehouse'}>Yiwu warehouse</MenuItem>
                  <MenuItem value={'Guangzhou warehouse'}>
                    Guangzhou warehouse
                  </MenuItem>
                </Select>
                <H4>Shipping Mark:</H4>
                <Input
                  name="shippingMark"
                  value={newItem.shippingMark}
                  type="text"
                  onChange={e => onChangeInput(e)}
                />
                <H4>Item Name:</H4>
                <Input
                  name="itemName"
                  value={newItem.itemName}
                  type="text"
                  onChange={e => onChangeInput(e)}
                />
                <H4>cbm:</H4>
                <Input
                  name="cbm"
                  type="number"
                  value={newItem.cbm}
                  onChange={e => onChangeInput(e)}
                />
                <H4>Kilo:</H4>
                <Input
                  name="kilo"
                  type="number"
                  value={newItem.kilo}
                  onChange={e => onChangeInput(e)}
                />
                <H4>Number of Box:</H4>
                <Input
                  name="numberOfBox"
                  type="number"
                  value={newItem.numberOfBox}
                  onChange={e => onChangeInput(e)}
                />
                <H4>Tracking Number:</H4>
                <Input
                  name="trackingNumber"
                  type="text"
                  value={newItem.trackingNumber}
                  onChange={e => onChangeInput(e)}
                />
                <H4>Container Number:</H4>
                <Input
                  name="containerNumber"
                  type="text"
                  value={newItem.containerNumber || ''}
                  onChange={e => onChangeInput(e)}
                />
                <H4>Notes:</H4>
                <Input
                  name="notes"
                  type="text"
                  value={newItem.notes}
                  onChange={e => onChangeInput(e)}
                />

                <Button
                  // disabled={itemData.seletedItem ? false : true}
                  onClick={onEdit}
                >
                  Update
                </Button>
                <Button
                  disabled={itemData.selectedItem ? false : true}
                  onClick={() => onDelete(itemData.selectedItem._id)}
                >
                  Delete
                </Button>
              </ModalWrapper>
            </>
          ) : (
            <div>anuar</div>
          )}
        </>
      ) : null}
    </Modal>
  )
}

export default ModalCommon
