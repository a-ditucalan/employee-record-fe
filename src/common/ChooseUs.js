/* eslint-disable prettier/prettier */
import React from 'react'
import styled from 'styled-components'
import Realtime from '../assets/img/real-time.png'
import Beginner from '../assets/img/beginner-friendly.png'
import Rates from '../assets/img/competitive-rates.png'
const ChooseUs = () => {

  const TextOne = styled.h2`
    font-size: 40px;
    color: #040084;
    text-align: center;
    margin-bottom: 60px;

    @media (max-width: 575px) {
      font-size: 25px;
      margin-bottom: 30px;
    }
  `

  const ImgWrapper = styled.div`
    img {
      max-width: 450px;
    }

    @media (max-width: 575px) {
      img {
        max-width: 270px;
      }
    }
  `

  const Card = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 70px;
    @media (max-width: 1199px) {
      justify-content: center;
    }
  `

  const CardTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 700px;

    @media (min-width: 1200px) and (max-width: 1300px) {
      max-width: 550px;
    }

  `
  const WrapperFlex = styled.div`
    display: flex;
    padding: 80px 300px;

    justify-content: center;
    flex-direction: column;

    @media (max-width: 1199px) {
      padding: 30px 20px;

      div:nth-child(3) {
  
        div:nth-child(2) {
          order: 1;
        }

        div:nth-child(1) {
          order: 2;
        }
      }
    }

    @media (min-width: 1200px) and (max-width: 1300px) {
      padding: 30px 100px;
    }
  `
  const TextTwo = styled.h3`
    font-size: 36px;
    letter-spacing: 1px;
    color: #040084;

    font-weight: 500;
    margin-top: 10px;

    @media (max-width: 575px) {
      font-size: 22px;
      text-align; center;
    }
  `

  const TextThree = styled.h3`
    font-size: 22px;
    letter-spacing: 1px;
    line-height: 32px;
    color: #333333;
    font-weight: 300;

    span {
      font-weight: 500;
    }

    @media (max-width: 575px) {
      font-size: 16px;
      text-align; center;
    }
  `

  return (
    <WrapperFlex>
      <TextOne>Why you should choose our service?</TextOne>
      <Card>
        <ImgWrapper>
          <img src={Realtime} alt="realtime" />
        </ImgWrapper>
        <CardTextWrapper>
          <TextTwo>Real-time-tracking of shipments</TextTwo>
          <TextThree>
            We provide real-time-tracking of your shipments from China to
            Manila. No need to stress over your packages because you can track
            it yourself.
          </TextThree>
        </CardTextWrapper>
      </Card>
      <Card>
        <CardTextWrapper>
          <TextTwo>Very Competitive Rates</TextTwo>
          <TextThree>
            Import from China to Philippines for as low as{' '}
            <span> Php 10,000 / CBM.</span> All rates are already inclusive of
            custom taxes and duties, warehouse storage fees, and other
            documentation fees.
          </TextThree>
        </CardTextWrapper>
        <ImgWrapper>
          <img src={Rates} alt="rate" />
        </ImgWrapper>
      </Card>
      <Card>
        <ImgWrapper>
          <img src={Beginner} alt="friendly" />
        </ImgWrapper>
        <CardTextWrapper>
          <TextTwo>Beginner Friendly</TextTwo>
          <TextThree>
            First time importing from China to Philippines? No worries! Our team
            will guide you. Just message us on our Facebook page. You can also
            join our official Facebook group: Pinoy Import Community.
          </TextThree>
        </CardTextWrapper>
      </Card>
    </WrapperFlex>
  )
}

export default ChooseUs
