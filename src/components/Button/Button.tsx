import React from 'react'
import  style from "./button.module.css"
import Link from 'next/link'

type ButtonProps={
    text:string;
    url:string
}

const Button:React.FC<ButtonProps> = ({text,url}) => {
  return (
    <div className={style.container}>
      <Link href={url}>
        <button className={style.container}>{text}</button>
      </Link>
    </div>
  )
}

export default Button
