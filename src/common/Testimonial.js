import React from 'react'
import styled from 'styled-components'
import ClientOne from '../assets/img/client-01.png'
import ClientTwo from '../assets/img/client-02.png'
import ClientThree from '../assets/img/client-03.png'
import ClientFour from '../assets/img/client-04.png'
const Testimonial = () => {
  const TextOne = styled.h2`
    font-size: 40px;
    color: #040084;
    text-align: center;
    margin-bottom: 60px;
    @media (max-width: 575px) {
      font-size: 25px;
    }
  `

  const WrapperFlex = styled.div`
    display: flex;
    padding: 80px 300px;

    justify-content: center;
    flex-direction: column;

    @media (max-width: 967px) {
      padding: 30px 20px;
    }
    @media (min-width: 1200px) and (max-width: 1300px) {
      padding: 30px 100px;
    }
  `
  const CardWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    @media (max-width: 1300px) {
      justify-content: center;
    }
  `
  const Card = styled.div`
    filter: drop-shadow(0 0 27px rgba(0, 0, 0, 0.05));
    background-color: #ffffff;
    border: 1px solid #ebebeb;
    display: flex;
    max-width: 620px;
    min-height: 220px;
    padding: 10px 20px;
    margin-bottom: 20px;
    @media (max-width: 575px) {
      flex-direction: column;
    }
  `
  const CardTextWrapper = styled.div`
    display: flex;
    flex-direction: column;

    max-width: 700px;
  `
  const TextTwo = styled.h3`
    font-size: 24px;
    letter-spacing: 1px;
    color: #040084;
    margin-top: 10px;
    margin-bottom: 20px;
    font-weight: 500;

    @media (max-width: 575px) {
      margin-bottom: 10px;
      text-align: center;
      font-size: 16px;
    }
  `
  const TextThree = styled.h3`
    font-size: 18px;
    letter-spacing: 0px;
    line-height: 28px;
    color: #333333;
    font-weight: 300;
    @media (max-width: 575px) {
      text-align: center;
      line-height: 16px;
     font-size: 12px;
  `

  const ImgWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-right: 15px;
    img {
      max-width: 450px;
    }

    @media (max-width: 575px) {
      margin-right: 0;
      justify-content: center;
    }
  `

  return (
    <WrapperFlex>
      <TextOne>What our clients say about us</TextOne>
      <CardWrapper>
        <Card>
          <ImgWrapper>
            <img src={ClientOne} alt="billy" />
          </ImgWrapper>
          <CardTextWrapper>
            <TextTwo>Billy Ballanos</TextTwo>
            <TextThree>
              Thank you so much Big Box Import Service. Madami pa ko
              ipapa-import sa inyo.
            </TextThree>
          </CardTextWrapper>
        </Card>
        <Card>
          <ImgWrapper>
            <img src={ClientTwo} alt="Michael" />
          </ImgWrapper>
          <CardTextWrapper>
            <TextTwo>Michael</TextTwo>
            <TextThree>
              Very convenient and hassle-free magpaship kay Big Box. Very
              Recommended!
            </TextThree>
          </CardTextWrapper>
        </Card>
        <Card>
          <ImgWrapper>
            <img src={ClientThree} alt="Rudy" />
          </ImgWrapper>
          <CardTextWrapper>
            <TextTwo>Rudy</TextTwo>
            <TextThree>
              This is my first time importing from Alibaba. At sa tulong ni Big
              Box napa- bilis at napagan first shipment ko. Thank you!
            </TextThree>
          </CardTextWrapper>
        </Card>
        <Card>
          <ImgWrapper>
            <img src={ClientFour} alt="mark" />
          </ImgWrapper>
          <CardTextWrapper>
            <TextTwo>Mark Lee</TextTwo>
            <TextThree>
              The best ang customer service and mabilis lang ang shipment. Thank
              you again Big Box!
            </TextThree>
          </CardTextWrapper>
        </Card>
      </CardWrapper>
    </WrapperFlex>
  )
}

export default Testimonial
