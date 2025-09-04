import {  useState } from 'react';
import './App.css'
let count = 0;
//const data = useState(0)//useState(inititalValue) state is a hook which is used to manage //the state of a component in react
function App({root}) {
  // const data = useState(100)
  // console.log('data',data)//0th index contains the current value of the state
  const [counter,setCounter] = useState(100)
  
  const increaseValue = (e)=>{
    console.log("Increase button  clicked")
    // count++
    // console.log("count increased:-",count)
    // root.render(<App root={root}/>)
    //  data[0]++
    // console.log(data[0])
    // const setData = data[1]
    // console.log(setData)
    // setData(data[0]++)
    // console.log(data[0])
    setCounter(counter+1)
  
  
    }
  const decreaseValue = (e)=>{
     console.log("Derease button  clicked")

    //  count--;
    //  console.log("count decreased:-",count)
    
    // root.render(<App root={root}/>)
    setCounter(counter-1)
    }



  return (
    <>
    <h1>Counter App</h1>
    <button onClick={increaseValue}>Increase</button> 
    <br /><br />
    <button>{counter}</button> 
    <br /><br /> 
    <button onClick={decreaseValue}>Decrease</button>  
    </>
  )
}

export default App
