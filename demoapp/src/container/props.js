import React from "react";

class myPropex extends React.Component{
    render(){
        return(
            <div>
                <h1>{this.props.headerProp}</h1>
                <h1>{this.props.contentProp}</h1>
            </div>
        );
    }
}
myPropex.defaultProps={
    headerProp:"Hello from Header",
    contentProp:"Hello from content"
}
export default myPropex;