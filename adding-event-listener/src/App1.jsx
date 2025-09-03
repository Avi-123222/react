import CustomButton from "./CustomButton"
export default function App1(){
    // function handleClick(abc){
    //     console.log("Button Clicked")
    //     console.log("abc",abc)
    // }
    const sayHii = (e) =>{
        console.log(2)
        console.log(e)
    }
    function sayHello(){
    console.log("Say Hellooooooo")
  }
 return (
    <>
    {/* <button onClick = {handleClick} >Click Here I am Avishek Das</button> */}
    {/* <button onClick = {function handleClick(abc){
        console.log("Button Clicked")
        console.log("abc",abc)
    }} >Click Here I am Avishek Das</button> */}
     {/* <button onClick = {(abc)=>console.log("abc",abc)}
     style = {{
    backgroundColor: "crimson",
    color:"cyan"
    
     }}
    >Click Here I am Avishek Das</button> */}
     <button onClick = {(e)=>{
    console.log(123) 
     sayHii(e)
    }}
    
    >Click Here I am Avishek Das</button>
    <br /><br />
    <CustomButton onClick={sayHello}/>

    </>
 )
}
