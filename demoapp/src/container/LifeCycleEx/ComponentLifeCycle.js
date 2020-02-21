import  React  from 'react';

class ComponentLC extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            favrioteColor:"red"
        }
    }

    // static getDerivedStateFromProps(props,state){
    //     return {favrioteColor:props.favcolor}
    // }

     shouldComponentUpdate() {
         return true;
    }

    changeColor = () => {
         this.setState({
             favrioteColor:"blue"
        });
    }

    render(){
        return(
            <div>
                  <h1>{this.state.favrioteColor}</h1>
                <button onClick={this.changeColor} >Change Color</button>
            </div>
        )
    }
}
export default ComponentLC