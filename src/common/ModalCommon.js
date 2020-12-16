import React, { useState, useEffect } from 'react'
import 'react-responsive-modal/styles.css'
import * as ACTION_EMP from '../store/action/employeeAction'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { Modal } from 'react-responsive-modal'

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
  background-color: green;
  border-color: green;
  margin-top: 10px;
  &:hover {
    border: 1px solid green;
    background-color: transparent;
  }
`
const ModalCommon = ({ open, onCloseModal, modalState, getId }) => {
  const dispatch = useDispatch()
  const employeeData = useSelector(state => state.employee)
  const [newEmp, setNewEmp] = useState(employeeData.selectedEmployee)

  const onChangeInput = e => {
    const name = e.target.name
    const value = e.target.value
    setNewEmp({
      ...newEmp,
      [name]: value
    })
  }

  useEffect(() => {
    setNewEmp(employeeData.selectedEmployee)
  }, [employeeData.selectedEmployee])

  const onSave = () => {
    dispatch(ACTION_EMP.addEmployee(newEmp))
    onCloseModal()
  }

  const onEdit = () => {
    dispatch(ACTION_EMP.updateEmployee(newEmp))
    onCloseModal()
  }

  const onDelete = id => {
    const data = {
      employeeID: id
    }
    dispatch(ACTION_EMP.deleteEmployee(data))
  }

  return (
    <Modal open={open} onClose={onCloseModal} center>
      {modalState === 'add' ? (
        <ModalWrapper>
          <H4>Name:</H4>
          <Input name="name" type="text" onChange={e => onChangeInput(e)} />
          <H4>Designation:</H4>
          <Input
            name="designation"
            type="text"
            onChange={e => onChangeInput(e)}
          />
          <H4>Email:</H4>
          <Input name="email" type="text" onChange={e => onChangeInput(e)} />
          <H4>Phone:</H4>
          <Input name="phone" type="text" onChange={e => onChangeInput(e)} />
          <H4>Age:</H4>
          <Input name="age" type="text" onChange={e => onChangeInput(e)} />
          <Button disabled={newEmp.name ? false : true} onClick={onSave}>
            Save
          </Button>
        </ModalWrapper>
      ) : modalState === 'edit' ? (
        <ModalWrapper>
          <H4>Name:</H4>
          <Input
            name="name"
            type="text"
            value={newEmp.name}
            onChange={e => onChangeInput(e)}
          />
          <H4>Designation:</H4>
          <Input
            name="designation"
            type="text"
            value={newEmp.designation}
            onChange={e => onChangeInput(e)}
          />
          <H4>Email:</H4>
          <Input
            name="email"
            type="text"
            value={newEmp.email}
            onChange={e => onChangeInput(e)}
          />
          <H4>Phone:</H4>
          <Input
            name="phone"
            type="text"
            value={newEmp.phone}
            onChange={e => onChangeInput(e)}
          />
          <H4>Age:</H4>
          <Input
            name="age"
            type="text"
            value={newEmp.age}
            onChange={e => onChangeInput(e)}
          />
          <Button
            disabled={employeeData.selectedEmployee.name ? false : true}
            onClick={onEdit}
          >
            Update
          </Button>
          <Button
            disabled={employeeData.selectedEmployee.name ? false : true}
            onClick={() => onDelete(employeeData.selectedEmployee._id)}
          >
            Delete
          </Button>
        </ModalWrapper>
      ) : null}
    </Modal>
  )
}

export default ModalCommon
