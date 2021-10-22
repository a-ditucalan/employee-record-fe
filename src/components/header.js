import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import * as ACTION_AUTH from '../store/action/authAction'
import Logo from '../assets/img/bigbox-logo.png'

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #040084;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  @media (min-width: 1199px) {
    display: none;
  }
  @media (max-width: 576px) {
    width: 100%;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #fff;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #343078;
    }
  }
`

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <Link to="/">HOME</Link>
      <Link to="/">SERVICES</Link>
      <Link to="/">ABOUT US</Link>
      <Link to="/">LOG IN</Link>
      <Link to="/">SIGN UP</Link>
    </StyledMenu>
  )
}

const StyledBurger = styled.button`
  position: absolute;
  top: 5%;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  @media (min-width: 768px) {
    display: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => (open ? '#0D0C1D' : '#EFFFFA')};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`

const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

const Header = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const WrapperFlex = styled.div`
    position: absolute;
    top: 0;
    display: flex;
    width: 100%;
    padding: 10px 200px;

    @media (min-width: 1200px) and (max-width: 1300px) {
      padding: 10px 100px;
    }
    @media (max-width: 1199px) {
      padding: 20px 30px;
    }
  `
  const WrapperLogo = styled.div`
    @media (max-width: 768px) {
      display: none;
    }
    display: flex;
    flex-basis: 40%;
    a {
      margin-right: 10px;
      font-size: 16px;
      font-weight: 400;
    }
  `
  const WrapperDiv = styled.div`
    @media (max-width: 767px) {
      display: none;
    }
    display: flex;
    flex-basis: 60%;
    align-items: center;
    justify-content: space-between;
    a {
      margin-right: 10px;
      font-size: 16px;
      font-weight: 400;
    }
  `
  const TextDiv = styled.div`
    a {
      font-weight: 500;
      font-size: 20px;
      color: #fff;
    }
  `

  const onLogout = () => {
    localStorage.clear()
    history.push('/')
    dispatch(ACTION_AUTH.logout())
  }

  const [open, setOpen] = useState(false)
  const node = React.useRef()
  return (
    <WrapperFlex>
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
      <WrapperLogo>
        <img src={Logo} alt="bigbox-logo" />
      </WrapperLogo>
      <WrapperDiv>
        <TextDiv>
          <Link to="/">Home</Link>
        </TextDiv>
        <TextDiv>
          <Link to="/">Services</Link>
        </TextDiv>
        <TextDiv>
          <Link to="/">About us</Link>
        </TextDiv>
        <TextDiv>
          <Link to="/login">Login</Link>
        </TextDiv>
        <TextDiv>
          <Link to="/" onClick={onLogout}>
            logout
          </Link>
        </TextDiv>
        <TextDiv>
          <Link to="/">Sign up</Link>
        </TextDiv>
      </WrapperDiv>
    </WrapperFlex>
  )
}

export default Header
