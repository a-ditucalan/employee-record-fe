import React from 'react'
import styled from 'styled-components'
import CtaBanner from '../assets/img/CTA-banner.png'
const Cta = () => {
  const WrapperFlex = styled.div`
    display: flex;
    padding: 10px 150px;
    background-image: url(${CtaBanner});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 500px;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media (max-width: 967px) {
      padding: 30px 20px;
      height: 300px;
    }

    @media (min-width: 1200px) and (max-width: 1300px) {
      padding: 30px 100px;
    }
  `

  const BannerText = styled.h1`
    font-size: 50px;
    color: #fff;
    text-align: center;
    font-weight: 600;
    max-width: 800px;
    @media (max-width: 767px) {
      font-size: 30px;
    }
    @media (max-width: 575px) {
      font-size: 25px;
    }
  `

  const ButtonCta = styled.button`
    background-color: #040084;
    width: 285px;
    height: 66px;
    color: #fff;
    border: none;
    margin-top: 20px;
    font-weight: 600;
    font-size: 24px;
    font-family: 'Poppins'
    :hover {
      border 1px solid  #040084;
      background-color: #fff;
      color:  #040084;
    }
  `
  return (
    <WrapperFlex>
      <BannerText>
        Start Importing from China to Philippines with Big Box today!
      </BannerText>
      <ButtonCta>Contact Us!</ButtonCta>
    </WrapperFlex>
  )
}

export default Cta
