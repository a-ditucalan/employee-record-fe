import React from 'react'
import styled from 'styled-components'
import PostOne from '../assets/img/post1.jpg'
import PostTwo from '../assets/img/post2.jpg'
import PostThree from '../assets/img/post3.jpg'
const OurServices = () => {
  const WrapperFlex = styled.div`
    display: flex;
    padding: 80px 200px;
    text-align: center;
    justify-content: center;
    flex-direction: column;

    @media (max-width: 967px) {
      padding: 30px 20px;
    }

    @media (min-width: 1200px) and (max-width: 1300px) {
      padding: 30px 100px;
    }
  `
  const TextOne = styled.h2`
    font-size: 40px;
    color: #040084;
    text-align: center;
    margin-bottom: 50px;

    @media (max-width: 575px) {
      font-size: 25px;
    }

    @media (max-width: 575px) {
      font-size: 30px;
      margin-bottom: 30px;
    }
  `

  const TextTwo = styled.h3`
    font-size: 32px;
    letter-spacing: 1px;
    color: #040084;
    text-align: center;
    font-weight: 500;
    margin-top: 10px;

    @media (max-width: 767px) {
      font-size: 22px;
    }
  `

  const TextThree = styled.h3`
    font-size: 24px;
    letter-spacing: 1px;
    line-height: 34px;
    color: #333333;
    font-weight: 300;
    @media (max-width: 767px) {
      font-size: 16px;
      line-height: 20px;
    }
  `

  const ImgWrapper = styled.div`
    position: relative;
    @media (max-width: 767px) {
      img {
        max-width: 320px;
      }
    }
  `

  const OurServicesContainer = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  `

  const Card = styled.div`
    height: 600px;
    flex-basis: 25%;
    background: #f9f9f9;
    filter: drop-shadow(0 0 27px rgba(0, 0, 0, 0.1));
    margin-bottom: 30px;
    @media (max-width: 767px) {
      height: 460px;
      margin-bottom: 15px;
    }
  `
  return (
    <WrapperFlex>
      <TextOne>Our Services</TextOne>
      <OurServicesContainer>
        <Card>
          <ImgWrapper>
            <img src={PostOne} alt="postone" />
          </ImgWrapper>
          <TextTwo>Importation</TextTwo>
          <TextThree>
            Ship from China to Philippines for as low as 1,500 (0.15 cbm below)
          </TextThree>
        </Card>
        <Card>
          <ImgWrapper>
            <img src={PostTwo} alt="posttwo" />
          </ImgWrapper>
          <TextTwo>Pabayad Service</TextTwo>
          <TextThree>
            Pay your supplier with RMB. Save more, no more Alibaba fees!
          </TextThree>
        </Card>
        <Card>
          <ImgWrapper>
            <img src={PostThree} alt="posttree" />
          </ImgWrapper>
          <TextTwo>Pasabuy Service</TextTwo>
          <TextThree>
            Import from China to Philippines with your friends/pasabuyers.{' '}
          </TextThree>
        </Card>
      </OurServicesContainer>
    </WrapperFlex>
  )
}

export default OurServices
