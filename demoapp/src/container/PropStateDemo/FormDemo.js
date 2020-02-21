import  React  from "react";
import  DisplayForm from '../../component/PropStatDemo/displayForm' 
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
            validEmail:true,
            validPassword:true,
            validAge:true,
            validName:true,
            onSubmit: false
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
      else 
        value=e.target.value

       this.setState({
          [e.target.name]:value
        })
   }

   validate=(e)=>{
      switch(e.target.name) {
        case 'txtName':
           if(/[~`!#$%^&*.+=\-[\]\\';,/{}|":<>?]/.test(e.target.value))
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
            if(! /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value))
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
               alert('All field mast be required')
               return
         }    
         if(!this.state.validEmail ||  !this.state.validPassword || !this.state.validAge || !this.state.validName)
         {
             alert('Please Fill Proper Data')
             return
         }
  
        this.setState({
                onSubmit: true
        });
    }

    render(){
        const {onSubmit} = this.state;
        return(
        <center>
            {!onSubmit ? (
                <form>
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
                                <option selected='true'>--select--</option>
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
                   
                     </tbody>
                </table>
                
                <br></br>
                <input type='button' className='btn' value='Submit' onClick={this.Data}/>
            </form>
            ) : (
                <div>
                   <DisplayForm data={this.state}/>
                </div>
            )}
        </center>
        )
    }
}
export default Form;