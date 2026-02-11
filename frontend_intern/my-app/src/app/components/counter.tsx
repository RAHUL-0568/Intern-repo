"use client"
import { useState } from "react"



export const Counter =()=>{
    console.log("Counter component");
    const [count,setCount]=useState(0);
    return(
        <button onClick={()=>setCount(count+1)}>User Clicked {count}times </button>
    )
}