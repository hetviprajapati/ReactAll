import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom'

import Header from "./Header";
import FormDemo from './PropStateDemo/FormDemo';
import Clock from './LifeCycleEx/Demo'
import FetchDemo from './ApiDemo/FetchDemo';
import ComponentLC from './LifeCycleEx/ComponentLifeCycle'
import ApiFormDemo from './ApiDemo/Header';
import BootstrapDemo from '../component/BootstrapReactstrapDemo/Main';

const Main=()=> {
    return (
         <Router>
            <Route   path="/" component={Header} />
            <Route  path="/FormDemo" component={FormDemo} />
            <Route  path="/Clock" component={Clock} />
            <Route  path="/FetchDemo" component={FetchDemo} />
            <Route  path="/ComponentLC" component={ComponentLC} />
            <Route  path="/ApiFormDemo" component={ApiFormDemo} />
            <Route  path="/BootstrapDemo" component={BootstrapDemo} />
        </Router>
    )
}

// class Main extends React.Component{

// constructor(props){
//     super(props);
//     this.state={
//         btnName:''
//     }
// }
//  check=(e)=>{
//         this.setState({
//            btnName:e.target.id
//         })
// }
// render(){
//     return (
//         <div>
      
//             <button onClick={this.check}  id='Prop-State-Demo' className="btn">Prop-State-Demo</button>
//             <button onClick={this.check}  id='Life-Cycle Clock Demo'  className="btn">Life-Cycle Clock Demo</button>
//             <button onClick={this.check}  id='Component Life-cycle Demo'  className="btn">Component Life-cycle Demo</button>
//             <button onClick={this.check}  id='Fetch-Api Demo'  className="btn">Fetch-Api Demo</button>
//             <button onClick={this.check}  id='Api Demo Form'  className="btn">Api Demo Form</button>
//             <button onClick={this.check}  id='Bootstrap Reactsrap Demo'  className="btn">Bootstrap Reactsrap Demo</button>
//             {(() => {
//                         switch(this.state.btnName) {
//                         case 'Prop-State-Demo':
//                             return <FormDemo/>;
//                         case 'Life-Cycle Clock Demo':
//                             return <Clock />;
//                         case 'Component Life-cycle Demo':
//                           return <ComponentLC favcolor="yellow"/>
//                         case 'Fetch-Api Demo':
//                           return <FetchDemo />
//                         case 'Api Demo Form':
//                           return <ApiFormDemo />
//                         case 'Bootstrap Reactsrap Demo':
//                           return  <BootstrapDemo /> 
//                         default:
//                             return null;
//                         }
//                 })()
//             }
        
//         </div>
//     );
//     }
// }
export default Main;
