import { createContext, useState } from "react";


export const HandleEmoji=createContext();

export function HandleEmojiProvider({children}){
    const[emoji,setEmoji]=useState(true)
    const handleToggle=()=>{setEmoji(!emoji)}
    
    return (
        <HandleEmoji.Provider value={{emoji,handleToggle}}>{children}</HandleEmoji.Provider>
    )
}