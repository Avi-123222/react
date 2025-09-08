import { useState } from 'react'

import './App.css'
import Greetings from './Greetings'

function App() {
  console.log("parent component")
  const [name,setName] = useState('Avishek')

  return (
    <div style={{padding:"20px"}}>
      <h1>React Props Vs States</h1>
      {/* <Greetings name={name} /> */}
      <Greetings name={name}>
        <p>This is extra element passed is<strong> Children </strong></p>
      We can pass more elments ,text,components etc.
      </Greetings>
       <button  style={{marginTop:"10px"}} onClick={()=>{setName((perv)=>perv+1)}}>click me</button>

      
    </div>
  )
}

export default App
