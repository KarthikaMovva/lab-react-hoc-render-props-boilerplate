import React,{useState} from 'react';
const Wrappingcomponent= (OriginalComponent)=>{
 function NewComponent(){
    const[count,setcount]=useState(0);

    const WhenClicked=()=>{
        setcount(count+1)
    }
    return <OriginalComponent count={count} WhenClicked={WhenClicked}/>
 }
 return NewComponent;
}
export default Wrappingcomponent;