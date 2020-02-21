import React, { Component } from 'react'

class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            Name:'',
            txtEmail:'',
            txtPassword:'',
            Age:'',
            gender:true,
            City:'',
            img:'',
            Hobbies:[],
        }
    }
    Data=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    onLogin=()=>{
        fetch('http://localhost:3001/user/login',{
            method:'POST',
            headers:{
                    'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                email:this.state.txtEmail,
                password:this.state.txtPassword
            })
        }).then((res)=> {
             return res.json();
        }).then((data)=>{
           if(data===null)
                alert("Email Id or Password are incorrect");
           else
           {
                this.setState({
                    Name:data.name,
                    Age:data.age,
                    gender:data.gender,
                    City:data.city,
                    Hobbies :data.hobbies,
                    img:data.img
                })
                this.props.history.push({pathname: '/Display', state: {Data:this.state}})
           }    
        })
        .catch((err)=>{
            alert("Not success"+err);
        })
    }
    render() {
        return (
            <div>
            <center>
                <table>
                    <tbody>
                        <tr>
                            <td>Email ID : </td>
                            <td><input type='text' name='txtEmail' value={this.state.value} onBlur={this.Data}/></td>
                        </tr>
                         <tr>
                            <td>Password : </td>
                            <td><input type='password' name='txtPassword' value={this.state.value} onBlur={this.Data}/></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><button onClick={this.onLogin}>Login</button></td>
                        </tr>
                    </tbody>
                </table>
              </center>
            </div>
        )
    }
}

export default Login
