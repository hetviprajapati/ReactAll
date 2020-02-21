import React, { Component } from "react";
import { Route,Redirect } from "react-router-dom";
import { connect } from "react-redux";

class CRoute extends Component{
    getExtractedJson({component,cprivate,crole,actions,auth,...rest})
    {
         return rest;
    }
   render(){
       const rest=this.getExtractedJson(this.props);
       const isUserLoggedIN=this.props.auth.token ? this.props.auth.token!=="":false;
       const userCurrentRole=this.props.auth.role;
       const {component,cprivate,crole}=this.props;
       const Component=component;
       let redirectTo=undefined;

       if(isUserLoggedIN && rest.path==='/BootstrapDemo/Login') 
            redirectTo='/BootstrapDemo/Landing';
       else if(!isUserLoggedIN && cprivate && !userCurrentRole)
                redirectTo='/BootstrapDemo/Login';  
       else if(isUserLoggedIN && cprivate && crole && crole.filter((item)=>item===userCurrentRole).length===0) 
            redirectTo='/BootstrapDemo/unAuthorizedAccess';
        else if(!isUserLoggedIN && rest.path==='/BootstrapDemo/unAuthorizedAccess')
             redirectTo='/BootstrapDemo/Login';
       return(
          <Route
           {...rest}
           render={props=>(
               (redirectTo)?<Redirect to={{pathname:redirectTo,state:{from:props.location}}}/>:<Component {...props}/>
           )}
          />
       )
   }
}
const mapStatetoProps=(state)=>{
    const {auth}=state
    return{
        auth:auth
    }
}

export default connect(mapStatetoProps)(CRoute)