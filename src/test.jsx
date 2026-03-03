import React, {useEffect, useState, useMemo } from "react"
import { DisplayIsEven } from "./display";

export const Test = (props) => {
  const [counter,setCounter] = useState(0); 
  const [counter2,setCounter2] = useState(0);
  useEffect(()=>{
    console.log("hii")
  },[])
  const display = useMemo(()=>{
    if(counter>6){
      setCounter(0);
    }
    return counter%2 === 0 ?  "yes" : "No"
  },[counter])
  const callbackfun = () =>{
    setCounter2(2)
  }
  return (
    <div  style={{display : "flex",justifyContent:"center", alignItems:"center"}}>
    <div>
      <h1>Counter</h1>  
      <div><button style ={{height:"80px", width:"30px"}}onClick={()=> {setCounter(counter+1)}}>{counter}</button></div>
      <DisplayIsEven display={display} counter={counter} callbackfun={callbackfun}/>
      {/* {counter2} */}
    {/* {counter}  is even{display} */}
    </div>
    </div>
  )
};

