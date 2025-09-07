// import {  useState } from 'react';
import {  useState } from 'react';
import './App.css'
let count = 0;
//[state, setState]=useState(initialValue)
//const data = useState(0)//useState(inititalValue) state is a hook which is used to manage //the state of a component in react
console.log('Hellooooo')
function App({root}) {
   console.log('rendering')
  // // const data = useState(100)
  // // console.log('data',data)//0th index contains the current value of the state
   const [counter,setCounter] = useState(100)
   console.log('rendering',counter)
  
  const increaseValueByThree = (e)=>{
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
    // setCounter(counter+1)
    // // setCounter(counter)
    // console.log("counter value is:-",counter)
  // setCounter(4)
  // alert("counter:-  " + counter)
  // setCounter(5)
  //   alert("counter:-  " + counter)
  //  setCounter(6)
  //    alert("counter:-  " + counter)
  //setCounter(counter+1)
  // console.log("counter value is:-",counter)
  // setCounter(counter+1)
  // console.log("counter value is:-",counter)
  // setCounter(counter+1)
  // console.log("counter value is:-",counter)
  //setCounter((prevState) =>{
  //   console.log("hii")
  //   // return counter +1
  //   console.log("First previous state",prevState)
  //    console.log("First counter state",counter)
  //   return prevState +1
  // })
  // setCounter((prevState) =>{
  //   console.log("hii")
  //   // return counter +1
  //   console.log("Second previous state",prevState)
  //     console.log("Second counter state",counter)
  //   return prevState +1
  // })
  // setCounter((prevState) =>{
  //   console.log("hii")
  //   // return counter +1
  //   console.log(" Thrid previous state",prevState)
  //     console.log("Third counter state",counter)
  //   return prevState +1
  //})
  setCounter((prevState) => prevState + 1)
   setCounter((prevState) => prevState + 1)
    setCounter((prevState) => prevState + 1)
    }
   const decreaseValueByThree = (e)=>{
      console.log("Derease button  clicked")

    // //  count--;
    // //  console.log("count decreased:-",count)
    
    //  root.render(<App root={root}/>)
    //  setCounter(counter-1)
      setCounter((prevState) => prevState - 1)
   setCounter((prevState) => prevState - 1)
    setCounter((prevState) => prevState - 1)
    }
      const increaseValueByOne = (e)=>{
    console.log("Increase button  clicked")
  
  
  setCounter(counter+1)
   
      }
      const decreaseValueByOne = (e)=>{
      console.log("Derease button  clicked")

   
      setCounter(counter-1)
    }

  return (
    <>
    <h1>Counter App</h1>
     <button style={{backgroundColor:'crimson'}}>{counter}</button> 
     <br /><br />
    <button onClick={increaseValueByOne}style={{backgroundColor:'darkorange'}}>Increase Value By One</button> 
    
   
    <br /><br /> 
    <button onClick={decreaseValueByOne} style={{backgroundColor:'darkgreen'}}>Decrease Value By One</button>
    <br /><br />
    <button onClick={increaseValueByThree} style={{
      backgroundColor:'yellowgreen',
    }}>Increase By Three</button> 
    
   
    <br /><br /> 
    <button onClick={decreaseValueByThree} style={{
      backgroundColor:'red',
    }}>Decrease By Three</button>  
    </>
  )
}

export default App