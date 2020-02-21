import React from 'react'

function Display(props) {
   const data=props.location.state.Data;
    return (
        <div className='FormDemo'>
        <center>
        <table>
        <tbody>
            <tr>
                <td>Profile : </td>
                {
                    data.img.map(images=>{
                        return(
                        <td><img src = {`http://localhost:3001/user/uploads/${images}`} height='100' width='100'/></td>
                        )
                    })
                }
            </tr>
            <tr>
                <td>Name : </td>
                <td>{data.Name}</td>
            </tr>
             <tr>
                <td>Email : </td>
                <td>{data.txtEmail}</td>
            </tr>
             <tr>
                <td>Password : </td>
                <td>{data.txtPassword}</td>
            </tr>
            <tr>
                <td>Age : </td>
                <td>{data.Age}</td>
            </tr>
            <tr>
                <td>Gender : </td>
                <td>{data.gender?'Male':'Female'}</td>
            </tr>
            <tr>
                <td>City : </td>
                <td>{data.City}</td>
            </tr>
            <tr>
                <td>Hobby : </td>
                <td>{data.Hobbies}</td>
            </tr>
            </tbody>
        </table>
       </center>
    </div>
    )
}

export default Display

