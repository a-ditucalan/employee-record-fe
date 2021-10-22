import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import FB from '../assets/img/fb-icon.jpg'
import Group from '../assets/img/GROUP.png'
import Tiktok from '../assets/img/tiktok.jpg'
const Footer = () => {
  const WrapperFlex = styled.div`
    display: flex;
    padding: 100px 200px 10px;
    flex-direction: column;

    @media (max-width: 1199px) {
      padding: 30px 20px;
    }
    @media (min-width: 1200px) and (max-width: 1300px) {
      padding: 30px 100px;
    }
  `
  const ContentWrapper = styled.div`
    display: flex;
    min-width: 100%;

    @media (max-width: 575px) {
      min-width: 20%;

      flex-direction: column;
    }
  `

  const ContentItem = styled.div`
    flex-basis: 50%;
    display: flex;

    padding: 10px 50px;
    @media (max-width: 575px) {
      flex-basis: 100%;
    }
  `
  const ContentItemInfo = styled.div`
    flex-basis: 50%;
    display: flex;
  `

  const ImgWrapper = styled.div`
    max-width: 30px;
    margin-right: 20px;
  `
  const Title = styled.p`
    font-weight: 300;
    font-size: 16px;
    margin-bottom: 10px;
  `

  const InfoTextLink = styled(Link)`
    font-weight: 300;
    font-size: 14px;
    margin-bottom: 10px;
    color: #545d67;
  `

  const InfoText = styled(Link)`
    font-weight: 300;
    font-size: 14px;
    margin-bottom: 10px;
    color: #545d67;

    span {
      font-weight: 600;
    }
  `
  const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 50%;
  `

  const CopyRightWrapper = styled.div`
    margin-top: 30px;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  `

  const CopyRight = styled.p`
    padding: 20px 10px;
    color: #545d67;
    font-size: 14px;
    text-align: center;
  `
  return (
    <WrapperFlex>
      <ContentWrapper>
        <ContentItem>
          <Link to="https://www.facebook.com/bigboximportph">
            <ImgWrapper>
              <img src={FB} alt="fb" />
            </ImgWrapper>
          </Link>
          <Link to="https://www.tiktok.com/@bigboximportservice">
            <ImgWrapper>
              <img src={Tiktok} alt="tiktok" />
            </ImgWrapper>
          </Link>
          <Link to="https://www.facebook.com/groups/472405650427032">
            <ImgWrapper>
              <img src={Group} alt="fb group" />
            </ImgWrapper>
          </Link>
        </ContentItem>
        <ContentItemInfo>
          <InfoWrapper>
            <Title>INFORMATION</Title>
            <InfoTextLink to="/">HOME</InfoTextLink>
            <InfoTextLink to="/">ABOUT US</InfoTextLink>
            <InfoTextLink to="/">SERVICES</InfoTextLink>
            <InfoTextLink to="/">CONTACT US</InfoTextLink>
          </InfoWrapper>
          <InfoWrapper>
            <Title>CONTACT US</Title>
            <InfoText>Need help? We got you!</InfoText>
            <InfoText>
              You can contact us through our facebook:{' '}
              <span> Big Box Import Service </span>
              or call us at
              <span> 0933-827-1764</span>
            </InfoText>
          </InfoWrapper>
        </ContentItemInfo>
      </ContentWrapper>
      <CopyRightWrapper>
        <CopyRight>
          © Big Box Import Service. All Rights Reserved 2021.
        </CopyRight>
      </CopyRightWrapper>
    </WrapperFlex>
  )
}

export default Footer
