import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const handleClick=(e,name)=>{
    console.log("Hello Everyone")
    console.log('e',e)
    console.log('name',name)
    // console.log(e.target)
//     //console.log(e.target)
//     console.dir(e.target.value)
    
   }
  // const handleDoubleClick=()=>{
  //   console.log("Double Clicked")
  // }
  function handleInputChange(e){
    console.log("Input Changed")
    // console.log(e)
    // console.dir(e.target)
      console.dir(e.target.value)
  }
  
          

  return (
   <>
    <h1>Adding Event Listeners</h1>
    {/* <p onClick = {()=>{console.log("paragraph clicked");console.log("Hiiii")}}>This is a demo Paragraph</p> */}
    {/* <p onClick = {handleClick} onDoubleClick ={handleDoubleClick}  > Wow so funny</p> */}
    {/* <p onMouseEnter={handleClick}>click here......</p> */}
    <input type="text" onChange ={handleInputChange} />
    <br /><br />
    <button onClick={(e)=>handleClick(e,"Java Technocrat")}>Click here</button>
    <br /><br />
    <button onClick={handleClick("Avishek Das")} >Click 2</button>
      
        
    </>
    )
  
  }

export default App
