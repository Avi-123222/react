
import { useContext } from "react"
import C from "./C" 
import {MessageContext} from '../store/MessageContext'

const B =({message}) =>{
    const [msg,count,setcount] = useContext(MessageContext)
    return(
        <>
        B
        <div style={{
            border:"2px solid black",
            width:"400px",
            height:'200px',
            padding:"30px"

        }}>
            <button onClick={()=>setcount(count+2)}>Increase by 2</button>
            <C message = {message}/>

        </div>
        </>
    )
}
export default B