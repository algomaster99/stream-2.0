import React, {Component} from 'react'
import { Alert, Button, Jumbotron,  Form } from 'reactstrap';
import TextInput from './TextInput'

export default class RegisterForm extends Component {
  state = {
    first_name: '',
    last_name: '',
    username: '',
    password: '',
    confirm_password: '',
  }

  handleInputChange = (event) => {
    const target = event.target,
          value = target.type === 
            'checkbox' ? target.checked : target.value,
          name = target.name
    this.setState({
      [name]: value
    });
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.onSubmit(this.state.first_name, this.state.last_name, this.state.username, this.state.password, this.state.confirm_password)
  }

  render() {
    const errors = this.props.errors || {}
    return (
      <Jumbotron className="container">
        <Form onSubmit={this.onSubmit}>
          <h1>Register Bro</h1>
          {
           errors.non_field_errors?
             <Alert color="danger">
                {errors.non_field_errors}
             </Alert>:""
          }
          <TextInput name="first_name" label="first_name" 
                     error={errors.first_name}
                     onChange={this.handleInputChange} />
          <TextInput name="last_name" label="last_name"
                     error={errors.last_name}
                     onChange={this.handleInputChange} />
          <TextInput name="username" label="username" 
                     error={errors.username}
                     onChange={this.handleInputChange}/>
          <TextInput name="password" label="Password" 
                     error={errors.password} type="password"  
                     onChange={this.handleInputChange}/>
          <TextInput name="confirm_password" label="confirm_password" 
                     error={errors.confirm_password} type="password"  
                     onChange={this.handleInputChange}/>

          <Button type="submit" color="primary" size="lg">
              Register
          </Button>
          <p><a href="/login/">Old User</a></p>
        </Form>
      </Jumbotron>
    )
  }
}
