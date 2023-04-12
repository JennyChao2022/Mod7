import React, { useContext, useState } from "react";
import { HandleEmoji } from "../context/toggle";

export default function Emoji(){
    const {emoji,handleToggle}=useContext(HandleEmoji)

    const happy = '😄';
    const sad = '😢';
    return(
        <>
        
        {emoji ? happy:sad}
        <button onClick={()=>handleToggle()}>Toggle</button>
        </>
    )
}