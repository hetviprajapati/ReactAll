import  React  from "react";

function display(props) {
    return(
    <div className='FormDemo'>
        <table>
            <tr>
                <td>Name : </td>
                <td>{props.data.txtName}</td>
            </tr>
             <tr>
                <td>Email : </td>
                <td>{props.data.txtEmail}</td>
            </tr>
             <tr>
                <td>Password : </td>
                <td>{props.data.txtPassword}</td>
            </tr>
            <tr>
                <td>Age : </td>
                <td>{props.data.txtAge}</td>
            </tr>
            <tr>
                <td>Gender : </td>
                <td>{props.data.gender?'Male':'Female'}</td>
            </tr>
            <tr>
                <td>City : </td>
                <td>{props.data.ddlCity}</td>
            </tr>
            <tr>
                <td>Hobby : </td>
                <td>{props.data.chbHobbies}</td>
            </tr>
        </table>
    </div>
   )
}

export default display;