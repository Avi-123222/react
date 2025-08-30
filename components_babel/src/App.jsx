//import React from 'react'
import './App.css'

function App() {
  const a = 100;
  const b = 20;
  console.log(a+b);

  return (
    // <h1>a + b</h1>
    // <h1>{a}</h1>
    // <div>
    // <h1>{a+b === 30 ? "React is easy" : "React is hard"}</h1>  
    // <h2>Mentor:</h2>
    // </div>

      // <React.Fragment>
      //   <h1>{a+b === 30 ? "React is easy" : "React is difficult"}</h1>
      //   <h2>Mentor: <b>Sai Pranab</b></h2>
      // </React.Fragment> //we can write like this or 

      <>
        <h1>{a+b === 30 ? "React is easy" : "React is difficult"}</h1>
       <h2>Mentor: <b>Sai Pranab</b></h2>
     </>
    )
}

const val = App()
console.log('value is ', val)

export default App

// function app() {
//   return <h1>Java Technocrat</h1>
// }









// normal html code which returns javascript like code is called component
// DEFINITION-->>'normal javascript fnction which returns the react element is called COMPONENT'