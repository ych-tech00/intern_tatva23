import React, { Component } from 'react'

 class Counter extends Component {
    constructor(){
        super()
        this.state={
            count:0
        }
    }
    increment(){
        this.setState({
            count:this.state.count+1
        },
        ()=>{
            console.log('Callback val:',this.state.count)
        })
        
        
    }
  render() {
    return (
        <>
    <div>
        <h2>count : {this.state.count}</h2>
        <button onClick={()=>this.increment()}>Increment</button>
    </div>
      </>
    );
  }
}

export default Counter