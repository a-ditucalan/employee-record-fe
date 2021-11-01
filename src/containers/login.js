import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import * as ACTION from '../store/action/authAction'

import '../stylesheets/main.scss'
import { Form } from 'react-final-form'
import { TextField, Checkboxes } from 'mui-rff'
import {
  Button,
  Box,
  Grid,
  Typography,
  CircularProgress,
  makeStyles
} from '@material-ui/core'
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
const Login = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const history = useHistory()
  const auth = useSelector(state => state.auth)

  const initialValues = {
    email: '',
    password: '',
    agreement: false
  }

  const onSubmit = values => {
    console.log(values)
    dispatch(ACTION.login(values))
  }
  useEffect(() => {
    if (auth.token) {
      history.push('dashboard')
    }
    return () => {}
  }, [auth.isAuthenticated, auth.token, history])

  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={8}></Grid>
        <Grid item xs={4} className={classes.loginWrapper}>
          <div>
            <h3>Shipment Portal</h3>
            <Form
              onSubmit={onSubmit}
              initialValues={initialValues}
              // validate={makeValidate(loginFormSchema)}
              render={({ handleSubmit, submitting, invalid, pristine }) => (
                <form onSubmit={handleSubmit} noValidate>
                  <TextField
                    label="Email"
                    id="email"
                    name="email"
                    disabled={submitting}
                  />
                  <TextField
                    id="password"
                    label="Password"
                    name="password"
                    type="password"
                    disabled={submitting}
                  />
                  <Button
                    size="large"
                    fullWidth
                    variant="contained"
                    color="primary"
                    type="submit"
                    disabled={invalid || pristine || submitting}
                    onClick={handleSubmit}
                    // className={classes.submit}
                    data-cy="submit_login"
                  >
                    {/* {submitting && <CircularProgress color="inherit" size={20} />} */}
                    Log In
                  </Button>
                </form>
              )}
            />
          </div>
        </Grid>
      </Grid>
    </>
  )
}
export default Login
