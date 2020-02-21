import React,{Component} from 'react'
import {  Link, BrowserRouter as Router,Switch } from 'react-router-dom'

import CRoute from './customRoute';

import Header from "./Header";
import Login from "./Login";
import Landing from './Landing';
import pageNotFound from "./pageNotFound";
import unAuthorizedAccess from './unauthorized';
import p1 from './p1';
import p2 from './p2';
import p3 from './p3';


class Main extends Component {
    render(){
        const admin="admin";
        const employee="employee";
         return (
        <div>
        <Router>
          {/* <Switch> */}
                <CRoute  path="/BootstrapDemo" component={Header} />
                <CRoute cprivate  path="/BootstrapDemo/Landing" component={Landing} />
                <CRoute  path="/BootstrapDemo/Login" component={Login} />
                <CRoute cprivate crole={[admin,employee]} path="/BootstrapDemo/p1" component={p1} />
                <CRoute cprivate crole={[admin]} path="/BootstrapDemo/p2" component={p2} />
                <CRoute cprivate crole={[employee]} path="/BootstrapDemo/p3" component={p3} />
                <CRoute  path="/BootstrapDemo/unAuthorizedAccess" component={unAuthorizedAccess} />
                
                {/* <CRoute  component = {pageNotFound} /> */}
            {/* </Switch> */}
        </Router>
        </div>
    )
    }
   
}
export default Main

