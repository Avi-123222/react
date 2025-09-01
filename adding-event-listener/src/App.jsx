import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const handleClick=(e)=>{
    console.log("Hello Everyone")
    console.log(e)
    console.log(e.target)
    
  }
  // const handleDoubleClick=()=>{
  //   console.log("Double Clicked")
  // }


  return (
    <>
    <h1>Adding Event Listeners</h1>
    {/* <p onClick = {()=>{console.log("paragraph clicked");console.log("Hiiii")}}>This is a demo Paragraph</p> */}
    {/* <p onClick = {handleClick} onDoubleClick ={handleDoubleClick}  > Wow so funny</p> */}
    <p onMouseEnter={handleClick}>click here......</p>
      
        
    </>
  )
}

export default App
