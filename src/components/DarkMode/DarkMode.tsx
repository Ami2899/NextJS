"use client"

import React, { useContext } from 'react'
import style from "./DarkMode.module.css"
import { ThemeContext,ThemeContextValue } from '../../../context/ThemeContext'

const DarkMode = () => {
    const {toggle,mode}=useContext<ThemeContextValue>(ThemeContext)
    return (
        <div className={style.container} onClick={toggle}>
            <div className={style.icon}>🌙</div>
            <div className={style.icon}>🔆</div>
            <div className={style.ball}
                style={mode === "light" ? { left: "2px" } : { right: "2px" }} />
        </div>
    )
}

export default DarkMode
