import React from 'react'
import Register from './Register';
import Login from "./Login";
import Display from "./Display";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

function Header() {
    return (
        <div>
        <Router>
             <div  className='header'>
                 <Link to="/Register">Register</Link>&nbsp;&nbsp;
                 <Link to="/Login">Login</Link>
            </div>
            <Route exact path="/Register" component={Register} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/Display" component={Display} />
        </Router>
        </div>
    )
}
export default Header

