"use client"

import { ReactNode, createContext, useState } from "react"

type ThemeProps={
    children:ReactNode;
}

export type ThemeContextValue={
    mode:string;
    toggle:()=>void;
}

export const ThemeContext=createContext<ThemeContextValue>(
    {mode:"dark",
    toggle:()=>{},
})

export const ThemeProvider:React.FC<ThemeProps>=({children})=>{
    const [mode,setMode]=useState("dark")
    const toggle=()=>{
        setMode((prev)=>(prev==="dark"?"light":"dark"))
    }
    return(
        <ThemeContext.Provider value={{toggle,mode}}>
            <div className={`theme ${mode}`}>{children}</div>
        </ThemeContext.Provider>
    )
}