import React from 'react'
import styled from 'styled-components'

const Services = () => {
  const WrapperFlex = styled.div`
    display: flex;
    padding: 100px 200px 80px;
    text-align: center;
    flex-direction: column;

    @media (max-width: 1199px) {
      padding: 30px 20px;
    }

    @media (min-width: 1200px) and (max-width: 1300px) {
      padding: 30px 100px;
    }
  `
  const TextOne = styled.h2`
    font-weight: 500;
    font-size: 60px;
    color: #040084;
    margin-bottom: 20px;
    @media (max-width: 575px) {
      font-size: 25px;
    }

    @media (min-width: 968px) and (max-width: 1199px) {
      font-size: 35px;
    }
  `
  const TextTwo = styled.h3`
    font-weight: 300;
    font-size: 24px;
    color: #333333;
    padding: 0 70px;
    @media (max-width: 767px) {
      font-size: 16px;
      padding: 0;
    }
  `
  return (
    <WrapperFlex>
      <TextOne>
        Freight forwarding, transportation, shipping, warehousing and import
        services.
      </TextOne>
      <TextTwo>
        Big Box Import Service is an import provider specializing in freight
        forwarding, transportation, shipping, warehousing and import services to
        help you cater your business’ supply needs.
      </TextTwo>
    </WrapperFlex>
  )
}

export default Services
