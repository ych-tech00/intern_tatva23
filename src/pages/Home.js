import React , {Component} from "react";
import Title from "../component/Title";
class Home extends Component{

  constructor(){
    super()
    this.state={
      title:'Home',
      descr:'This is my home page'
    }
  }

    render(){
        //return <h1> Class Component </h1>;
        //commenting all use ctrl + /
            return (
              <>
              {/* <h1>HOME PAGE</h1> */}
              {/* <Title {this.props.Title}/> */}
              {/* <Title id={12} tt={{name:'TITLE 1'}}/> */}
              {/* {<h1> {this.props.name}</h1>} */}
              {/* <Title title={this.state.title} descr={this.state.descr} /> task 3 completed */}
              <div>
                <h1>HOME </h1>
                <p>{this.state.descr}</p>
              </div>
              </>
            );
        
    }
}
export default Home