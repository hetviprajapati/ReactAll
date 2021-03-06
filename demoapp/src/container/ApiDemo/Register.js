import  React  from "react";
import axios from 'axios';

class Form extends React.Component{
   
    constructor(props){
        super(props);
        this.state={
            txtName:'',
            txtEmail:'',
            txtPassword:'',
            txtAge:'',
            gender:true,
            ddlCity:'',
            chbHobbies:[],
            profile:'',
            validEmail:true,
            validPassword:true,
            validAge:true,
            validName:true
        }
    }
    GetData=(e)=>{
      let value;
      if(e.target.name==='chbHobbies')
      {
         if(e.target.checked)
           this.state.chbHobbies.push(e.target.value);
         else
            this.state.chbHobbies = this.state.chbHobbies.filter(item => item !== e.target.value)
         
         value=this.state.chbHobbies
      }
      else if(e.target.name==='gender')
      {
          if(e.target.value==='Female')
            value=false
          else
            value=true
      }
      else if(e.target.name==='profile')
          value=e.target.files[0];
      else
        value=e.target.value

       this.setState({
          [e.target.name]:value
        })
   }

   validate=(e)=>{
      switch(e.target.name) {
        case 'txtName':
           if(! /^[a-zA-Z]+$/.test(e.target.value))
           {
                 this.setState({
                   validName:false
                 })
                
           }
            else
            {
                this.setState({  
                    validName:true
                })
            }
            break;
        case 'txtEmail':
            if(! /[a-z0-9].*\@[a-z].*\.com/g.test(e.target.value))
            {
                this.setState({
                    validEmail:false
                })
            }
            else
            {
                this.setState({
                    validEmail:true
                })
            }
            break;
        case 'txtConfirmPassword':
            if(e.target.value!==this.state.txtPassword)
            {
                this.setState({
                    validPassword:false
                })
            }
            else
            {
                this.setState({
                    validPassword:true
                })
            }
            break;
         case 'txtAge':
            if(e.target.value<0)
            {
                this.setState({
                    validAge:false
                })
            }
            else
            {
                this.setState({
                    validAge:true
                })
            }
            break;
        default:
            return null;
       }
   }

    Data=()=>{
         if(this.state.txtName==='' || this.state.txtEmail==='' || this.state.txtPassword===''|| this.state.txtAge==='' || this.state.gender===''||this.state.ddlCity===''||this.state.chbHobbies==='')
         {
               alert('All field must be required')
               return
         }    
         if(!this.state.validEmail ||  !this.state.validPassword || !this.state.validAge || !this.state.validName)
         {
             alert('Please Fill Proper Data')
             return
         }
        const fd = new FormData();
        fd.append('name',this.state.txtName);
        fd.append('email',this.state.txtEmail);
        fd.append('password',this.state.txtPassword);
        fd.append('age',this.state.txtAge);
        fd.append('gender',this.state.gender);
        fd.append('city',this.state.ddlCity);
        fd.append('hobbies',this.state.chbHobbies);
        fd.append('Image',this.state.profile);

        axios.post('http://localhost:3001/user/create',fd)
         .then((res)=>{
            if(res.status===200)
                this.props.history.push('/Login')
          }).catch(err=>{
                console.log("error"+err);
          })

        //  fetch('http://localhost:3001/user/create', {
        //     method: 'POST',
        //     headers: {
        //         Accept: 'application/json',
        //                 'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         name:this.state.txtName,
        //         email:this.state.txtEmail,
        //         password:this.state.txtPassword,
        //         age:this.state.txtAge,
        //         gender:this.state.gender,
        //         city:this.state.ddlCity,
        //         hobbies :this.state.chbHobbies
        //     })
        //     }).then((res)=>{
        //         if(res.status===200)
        //                 this.props.history.push('/Login')
        //     }).catch(err=>{
        //         console.log("error"+err);
        //     })
    }

    render(){
        return(
        <center>
                <form className='FormDemo'>
                <table>
                <tbody>
                    <tr>
                        <td>Name : </td>
                         <td><input type='text' name='txtName' value={this.state.value} onChange={e=>this.GetData(e)}  onBlur={this.validate}/></td>
                         {
                            <div className='ColorValidation'>{
                              this.state.validName ? '':'Please Enter Valid Name'
                              }</div>
                         }
                    </tr>
                    <tr>
                         <td>Email : </td>
                         <td><input type='email' name='txtEmail' value={this.state.value} onChange={e=>this.GetData(e)} onBlur={this.validate}/></td>
                         {
                            <div className='ColorValidation'>{
                              this.state.validEmail ? '':'Please Enter Valid Email'
                              }</div>
                         }
                    </tr>
                    <tr>
                         <td>Password : </td>
                         <td><input type='text' name='txtPassword' value={this.state.value} onChange={e=>this.GetData(e)}/></td>
                    </tr>
                     <tr>
                         <td>Confirm Password : </td>
                         <td><input type='text' name='txtConfirmPassword' value={this.state.value} onChange={e=>this.GetData(e)} onBlur={this.validate}/></td>
                          {
                            <div className='ColorValidation'>{
                              this.state.validPassword  ? '':'Password not matched!!!'
                              }</div>
                         }
                    </tr>
                    <tr>
                         <td>Age :</td>
                         <td><input type='number' name='txtAge' value={this.state.value} min="0" max="100"  onChange={e=>this.GetData(e)} onBlur={this.validate}/></td>
                         {
                            <div className='ColorValidation'>{
                              this.state.validAge ? '':'Age Must be greater than zero'
                              }</div>
                         }
                    </tr>
                    <tr>
                        <td>Gender :</td>
                         <td>
                            <input type='radio' value='Male' name='gender' onChange={e=>this.GetData(e)}/>Male
                            <input type='radio' value='Female' name='gender' onChange={e=>this.GetData(e)}/>Female
                         </td>
                    </tr>
                     <tr>
                        <td>City : </td>
                        <td>
                            <select name='ddlCity'  onChange={e=>this.GetData(e)}>
                                <option selected={true}>--select--</option>
                                <option>Surat</option>
                                <option>Vapi</option>
                                <option>Navsari</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>Hobbies : </td>
                        <td>
                            <input type='checkbox' value='Sports' name='chbHobbies' onChange={e=>this.GetData(e)}/>Sports
                            <br></br>
                              <input type='checkbox' value='Reading' name='chbHobbies' onChange={e=>this.GetData(e)}/>Reading
                            <br></br>
                              <input type='checkbox' value='Coding' name='chbHobbies' onChange={e=>this.GetData(e)}/>Coding
                              <br></br>
                        </td>
                    </tr>
                     <tr>
                        <td>Profile :</td>
                        <td><input type='file' name='profile' value={this.state.value} multiple onChange={e=>this.GetData(e)}/></td>
                    </tr>
                     </tbody>
                </table>
                
                <br></br>
                <input type='button' className='btn' value='Submit' onClick={this.Data}/>
            </form>
        </center>
        )
    }
}
export default Form;