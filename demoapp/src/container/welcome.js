import React from 'react';

class welcome extends React.Component{
    render(){
        var mystyle={
            color:'red'
        }
        let i=1;
        return(
             <div style={mystyle}>
                {i===1?'True':'false'}
                <Greet/>
             </div>
        )
    }
}
class Greet extends React.Component{
    render(){
        return(
            <div>From Greet</div>
        )
    }
}
export default welcome;