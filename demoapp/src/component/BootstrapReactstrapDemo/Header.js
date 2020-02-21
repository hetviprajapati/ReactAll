import React,{Component} from 'react'
import {Navbar,NavbarBrand,Nav,NavItem,NavLink,Button} from 'reactstrap'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import * as authAction from '../../action/auth'

class Header extends Component {
   onLogout=(e)=>{
     e.preventDefault();
     this.props.action.auth.logoutUser();
   }
   render(){
      return (
     (this.props.auth.token && this.props.auth.token!=="")?
      <Navbar color="light" light expand="md">
        <NavbarBrand to="/BootstrapDemo">Demo</NavbarBrand>
          <Nav className="ml-auto">
             <NavItem>
              <NavLink tag={Link} to="/BootstrapDemo/Landing">Landing</NavLink>
            </NavItem>
              <NavItem>
              <NavLink tag={Link} to="/BootstrapDemo/p1">p1</NavLink>
            </NavItem>
              <NavItem>
              <NavLink tag={Link} to="/BootstrapDemo/p2">p2</NavLink>
            </NavItem>
              <NavItem>
              <NavLink tag={Link} to="/BootstrapDemo/p3">p3</NavLink>
            </NavItem>
            <NavItem>
              <Button onClick={this.onLogout.bind(this)}>Logout</Button>
            </NavItem>
          </Nav>
      </Navbar>
      :null
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
export default connect(mapStatetoProps,mapDispatchToProps)(Header)
