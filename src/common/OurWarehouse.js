import React from 'react'
import styled from 'styled-components'
import Guangzhou from '../assets/img/guangzhou.png'
import Yiwu from '../assets/img/yiwu.png'
import Shishi from '../assets/img/shishi.png'
const OurWarehouse = () => {
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
    margin-bottom: 30px;

    @media (max-width: 575px) {
      font-size: 25px;
    }

    @media (max-width: 767px) {
      font-size: 30px;
    }
  `

  const TextTwo = styled.h3`
    font-size: 24px;
    color: #333;
    text-align: center;
    font-weight: 400;
    margin-top: 10px;
    @media (max-width: 767px) {
      margin-top: 10px;
      font-size: 16px;
    }
  `

  const WarehouseWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 180px;
    @media (max-width: 767px) {
      margin-bottom: 15px;
    }
  `

  const ImgWrapper = styled.div`
    height: 120px;
  `

  const WarehouseContainer = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  `
  return (
    <WrapperFlex>
      <TextOne>Our Warehouse</TextOne>
      <WarehouseContainer>
        <WarehouseWrapper>
          <ImgWrapper>
            <img src={Guangzhou} alt="guangzhou" />
          </ImgWrapper>
          <TextTwo>Guangzhou to Philippines</TextTwo>
        </WarehouseWrapper>
        <WarehouseWrapper>
          <ImgWrapper>
            <img src={Yiwu} alt="yiwu" />
          </ImgWrapper>
          <TextTwo>Yiwu to Philippines</TextTwo>
        </WarehouseWrapper>
        <WarehouseWrapper>
          <ImgWrapper>
            <img src={Shishi} alt="shishi" />
          </ImgWrapper>
          <TextTwo>Shishi to Philippines</TextTwo>
        </WarehouseWrapper>
      </WarehouseContainer>
    </WrapperFlex>
  )
}

export default OurWarehouse
