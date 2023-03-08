import logo from './logo.svg';
import './App.css';
import React, { useState } from "react"
import Title from './component/Title'
import Home from './pages/Home';
import Counter from './component/Counter';
import About from './pages/About';
//class component
const App=()=> {

  const [togle,setState]=useState(true)
const toggle=()=>{
    setState(!togle);
      }
    

    
  return (
    <>
    <div>
      {/* <Title name="Home"/>
      <Title name="About"/>
      <Title name="Titlee"/>trial attempt */}

      {/* <Home name="Home"/>
      <Home name="About"/>
      <Home name="Contact Us"/>* day 2 task completed ! */}
      {/* <Home/> */}
      {/* <Counter /> day 4 task done */}
      {/* <About/> */}
      { togle ? <Home/>:<About/>}
      <button onClick={toggle}>Toggle </button>
    </div>
    </>
  );
}
export default App;
