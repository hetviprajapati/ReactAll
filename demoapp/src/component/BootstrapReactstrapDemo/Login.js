import React,{Component} from 'react'
import {Form,FormGroup,Label,Input,Button} from 'reactstrap'
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as authAction from '../../action/auth'

class Login extends Component {

    state={
        email:"",
        password:""
    }

    onLogin=(e)=>{
        e.preventDefault();
        this.props.action.auth.loginUser(this.state)
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    render(){
          return (
        <Form>
            <FormGroup>
                <Label for="Email">Email</Label>
                <Input type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange}/>
            </FormGroup>
            <FormGroup>
                <Label for="Password">Password</Label>
                <Input type="password" name="password" placeholder="Password"  value={this.state.passsword} onChange={this.handleChange.bind(this)}/>
            </FormGroup>
            <Button onClick={this.onLogin.bind(this)}>Login</Button>
        </Form>
    )
    }
}
const mapStatetoProps=(state)=>{
    const {auth}=state
    return{
        auth:auth
    }
}

const mapDispatchToProps=dispatch=>({
    action:{
    auth:bindActionCreators(authAction,dispatch)
    }
})
export default connect(mapStatetoProps,mapDispatchToProps)(Login)
