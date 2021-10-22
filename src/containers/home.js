import React, { useState, useEffect } from 'react'
import {Helmet} from "react-helmet";
import Banner from '../common/Banner'
import '../stylesheets/main.scss'

import {

  makeStyles
} from '@material-ui/core'
import Services from '../common/Services'
import OurWarehouse from '../common/OurWarehouse'
import OurServices from '../common/OurServices'
import ChooseUs from '../common/ChooseUs'
import Testimonial from '../common/Testimonial'
import Cta from '../common/Cta'
// import { loginFormSchema } from '../utils/schema/common/commonFormSchema';

const useStyles = makeStyles(() => ({
  containerWrapper: {
    display: 'flex'
  },
  loginWrapper: {
    display: 'flex',
    alignItems: 'center',
    height: '100vh',
    justifyContent: 'center'
  }
}))

const Home = () => {
  const classes = useStyles()

  return (
    <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Bigbox Import Service</title>
       <link rel="canonical" href="https://bigboximportservice.com" />
    </Helmet>

      <Banner />
      <Services />
      <OurWarehouse />
      <OurServices />
      <ChooseUs />
      <Testimonial />
      <Cta />
    </>
  )
}
export default Home
