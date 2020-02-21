import React, { Component } from 'react'

class FetchDemo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             Data:[]
        }
    }
    componentDidMount(){
        fetch('http://localhost:3001/user/get')
        .then(result=>{
            return result.json()
        })
        .then(data=>{
            this.setState({
                Data:data
            })
        }).catch(err=>{
            console.log("error"+err);
        })
        }

    render() {
        const {Data}=this.state;
        return(
            <div className='fetchDemo'>
                {
                    Data.map(data=>{
                        return(
                            <table border="1">
                            <tbody>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Dob</th>
                            <th>Gender</th>
                            <th>Role</th>
                                <tr>
                                    <td>{data.name}</td>
                                    <td>{data.email}</td>
                                    <td>{data.dob}</td>
                                    <td>{data.gender ? 'Female' :'Male'}</td>
                                    <td>{data.role}</td>
                                </tr>
                              </tbody>
                            </table>
                        )
                    })
                }
            </div>
        )
    }
}

export default FetchDemo
