import React from 'react'

class Statful extends React.Component{
    
 constructor(props){
    super(props);
  this.state={
      data:[
          {
              'id':1,  
              'name':'Hetvi'
          },
           {
              'id':2,
              'name':'Shrddha'
          },
           {
              'id':3,
              'name':'Arti'
          }
      ]
  }  
 }
  render(){
      return(
          <div>
            <table>
             <tbody>
                  {this.state.data.map((person) => <TableRow
                     data = {person} />)}
               </tbody>
            </table>
          </div>
      )
  }
}
class TableRow extends React.Component{
    render(){
        return(
            <tr>
                <td>{this.props.data.id}</td>
                <td>{this.props.data.name}</td>
            </tr>
        )
    }
}
export default Statful;