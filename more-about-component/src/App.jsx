import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Product from './product'
import products from './products'
import './App.css'

function App() {//parent component
  //console.log(products)
  const [count, setCount] = useState(0)

  return (
    <>
      {/* {Product()} */}
      {/* <Product></Product> */}
      {/* < Product abc="xyz"  brand = "Adidas" price = "3999.98" description="Running shoes" /> 
      {/* child component//abc as key and xyz as value */}
        {/* < Product brand ="Puma" price = "9999.99"/>
        <Product brand = "HRX"price = "2999.99"/> */} 
      {
    //  console.log ( products.map((p,idx)=>{
    //    return <Product 
    //      brand={p.brand} price={p.price} description={p.description}/>
    //   })
   // )
    // products.map((p,idx)=>{
    //     return <Product 
    //      brand={p.brand} price={p.price} description={p.description}/>
    // }

    //)
   products.map((p,idx)=> 
   <Product  brand={p.brand} price={p.price} description={p.description} key = {idx}/>)
    



      }



      
    </>
  )
}


export default App
