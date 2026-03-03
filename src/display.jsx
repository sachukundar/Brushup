import React, {useEffect, useState, useMemo } from "react"


export const DisplayIsEven = ({counter,display,callbackfun}) =>{
    useEffect(()=>{
        callbackfun(counter+2)
    },[counter])
    return (<>
    {counter}  is even {display}
    </>)
}