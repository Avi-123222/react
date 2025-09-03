
export default function CustomButton({onClick}){
    return (
        <>

       <button style={ 
{
    backgroundColor: "yellow",
    color: "black",
    padding: "10px 20px ",

    borderRadius: "5px",
    
        
    }
   
       } 
       onClick ={onClick}
       > 
       I am Light Yagami
       </button> 
        </>
    )

}