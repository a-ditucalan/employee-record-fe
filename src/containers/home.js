import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import * as ACTION from '../store/action/authAction'
import styled from 'styled-components'
import '../stylesheets/main.scss'

const WrapperFlex = styled.div`
  display: flex;
  height: 100vh;
`
const Title = styled.h1`
  font-size: 30px;
`
const LoginContainer = styled.div`
  flex-basis: 40%;
  justify-content: center;
  padding: 20px;
  display: flex;
  flex-direction: column;
`
const RegisterContainer = styled.div`
  flex-basis: 40%;
  justify-content: center;
  padding: 20px;
  display: flex;
  flex-direction: column;
`
const DumpContainer = styled.div`
  flex-basis: 60%;
`
const Input = styled.input`
  border: 1px solid #000;
  font-size: 16px;
  padding: 10px;
  margin-top: 10px;
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

const Home = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const auth = useSelector(state => state.auth)
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  })

  const [register, setRegister] = useState({
    name: '',
    email: '',
    phone: '',
    password: ''
  })

  const [log, setLog] = useState('login')

  const onChangeInputReg = e => {
    const name = e.target.name
    const value = e.target.value
    setRegister({
      ...register,
      [name]: value
    })
  }

  const onChangeInput = e => {
    const name = e.target.name
    const value = e.target.value
    setCredentials({
      ...credentials,
      [name]: value
    })
  }

  useEffect(() => {
    if (auth.isAuthenticated) {
      history.push('/dashboard')
    }
  }, [auth, history])

  const onSubmit = event => {
    dispatch(ACTION.login(credentials))
  }

  const onRegister = () => {
    setLog('reg')
  }

  const onRegisterAdd = () => {
    dispatch(ACTION.register(register))
  }
  return (
    <WrapperFlex>
      <DumpContainer></DumpContainer>

      <>
        {log === 'login' ? (
          <LoginContainer>
            <Title>Employee Records</Title>
            <Input
              placeholder="Username"
              type="text"
              name="username"
              onChange={e => onChangeInput(e)}
            />
            <Input
              name="password"
              placeholder="Password"
              type="password"
              onChange={e => onChangeInput(e)}
            />
            <Button onClick={e => onSubmit(e)}>Login</Button>
            <Button onClick={e => onRegister(e)}>Register</Button>
          </LoginContainer>
        ) : (
          <RegisterContainer>
            <Title>Employee Records Register</Title>
            <Input
              placeholder="Name"
              type="text"
              name="name"
              onChange={e => onChangeInputReg(e)}
            />
            <Input
              placeholder="Email"
              type="text"
              name="email"
              onChange={e => onChangeInputReg(e)}
            />
            <Input
              placeholder="Phone"
              type="text"
              name="phone"
              onChange={e => onChangeInputReg(e)}
            />
            <Input
              name="password"
              placeholder="Password"
              type="password"
              onChange={e => onChangeInputReg(e)}
            />
            <Button onClick={e => onRegisterAdd(e)}>Register</Button>
            <Button onClick={e => onSubmit(e)}>Back</Button>
          </RegisterContainer>
        )}
      </>
    </WrapperFlex>
  )
}
export default Home
