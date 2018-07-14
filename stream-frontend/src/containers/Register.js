import React from 'react'
import { connect } from 'react-redux'
import RegisterForm from '../components/RegisterForm'
import {register} from  '../actions/register'
import {registerError} from '../reducers'

const Register = (props) => {
    return (
      <div className="register-page">
        <RegisterForm {...props}/>
      </div>
    )
}

const mapStateToProps = (state) => ({
  errors: registerError(state),
})

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (first_name, last_name, username, password, confirm_password) => {
    dispatch(register(first_name, last_name, username, password, confirm_password))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Register);

