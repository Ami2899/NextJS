import React from 'react'
import style from "./page.module.css"
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={style.container}>
      <div>©2023 NextJS. All rights reserved.</div>
      <div>
        <div className={style.social}>
          <Image src="/1.png" height={15} width={15} className={style.icon} alt="Next"/>
          <Image src="/2.png" height={15} width={15} className={style.icon} alt="Next"/>
          <Image src="/3.png" height={15} width={15} className={style.icon} alt="Next"/>
          <Image src="/4.png" height={15} width={15} className={style.icon} alt="Next"/>
        </div>
      </div>
    </div>
  )
}

export default Footer
