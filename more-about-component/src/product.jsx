function Product({brand,price,...extras}){
  //console.log('props',props)
  // const brand = props.brand
  // const price = props.brand
  //const {brand,price,...extras} = props
  console.log(brand,price,extras)
  
  return (
    <>
    <h1>{brand} shoes</h1>
    <h2>{price} price</h2>
{/* props is way where we can share the data from one component to another component or from parent component to child component */}
    </>
  )
}
export default Product