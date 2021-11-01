import React from 'react'
import styled from 'styled-components'
import BgBanner from '../assets/img/banner.png'
const Banner = () => {
  const BannerWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-basis: 50%;

    @media (max-width: 1199px) {
      flex-basis: 100%;
    }
  `
  const WrapperFlex = styled.div`
    display: flex;
    padding: 10px 200px;
    background-image: url(${BgBanner});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 700px;

    @media (max-width: 967px) {
      padding: 30px 20px;
      height: 300px;
    }
    @media (max-width: 1199px) {
      padding: 30px 20px;
      height: 600px;
    }

    @media (min-width: 1200px) and (max-width: 1300px) {
      padding: 30px 100px;
    }
  `

  const BannerText = styled.h1`
    font-size: 80px;
    color: #fff;
    font-weight: 600;

    @media (max-width: 575px) {
      font-size: 30px;
    }

    @media (max-width: 967px) {
      font-size: 40px;
    }

    @media (min-width: 968px) and (max-width: 1199px) {
      font-size: 60px;
    }
  `
  return (
    <WrapperFlex>
      <BannerWrapper>
        <BannerText>Bigger the box, Bigger the growth</BannerText>
      </BannerWrapper>
    </WrapperFlex>
  )
}

export default Banner
