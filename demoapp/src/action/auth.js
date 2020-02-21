import {LOGIN_SUCCESSFUL,INVALID_USER,LOGOUT} from '../reducer/auth.js'
import * as authService from '../service/auth'

export const loginUser=(credential)=>{
    return (dispatch)=>{
      //  delete credential.password
        authService.login(credential)
        .then((response)=>{
            if(response.status===200){
                localStorage.setItem("token",response.data.token)
                localStorage.setItem("role","admin")
                dispatch({
                    type:LOGIN_SUCCESSFUL,
                    data:{token:response.data.token ,role:"admin"}
                })
            }
        })
        .catch((err)=>{
            if(err.response) {
                dispatch({ type:INVALID_USER,data:{err_msg:err.response.data.error}})
            }
                 
        });
    }
};

export const logoutUser=()=>{
    return (dispatch)=>{
        dispatch({
            type:LOGOUT
         });
         localStorage.removeItem('token');
         localStorage.removeItem('role');
    }
};