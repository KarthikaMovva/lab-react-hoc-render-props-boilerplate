import { useState } from "react";

function Counter({render}){
const[count,setcount]=useState(0)

const handleclick= ()=>{
    setcount(count+1)}

return render({count,handleclick})}
export default Counter;