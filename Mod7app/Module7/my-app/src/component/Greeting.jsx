import React, { useState } from "react";
import Emoji from "./emoji";

export default function Greeting({name}){
    const [text,setText]=useState(true)
    const handleChange=()=>{setText(!text)}

   
    return (
        <>
        
        <h1>{name} {text ? "hello world" : "world"}</h1>
        <button onClick={handleChange}>Replace</button>
        <br />
        
        
        </>
    )
}