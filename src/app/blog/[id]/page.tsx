import React from 'react'
import style from "./page.module.css"
import Image from 'next/image'

const Blogpost = () => {
  return (
    <div  className={style.container}>
      <div className={style.top}>
        <div  className={style.info}>
          <h1  className={style.title}>
            Lorem ipsum dolor sit amet.
          </h1>
          <p  className={style.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quidem totam quae expedita ullam necessitatibus rem vero nobis dicta provident?
          </p>
          <div  className={style.author}>
            <Image src="https://images.pexels.com/photos/2916450/pexels-photo-2916450.jpeg" alt="" width={40} height={40}  className={style.avatar}/>
            <span  className={style.username}>John Doe</span>
          </div>
        </div>
        <div  className={style.imgContainer}>
          <Image src="https://images.pexels.com/photos/2916450/pexels-photo-2916450.jpeg" alt="" fill={true}  className={style.image}/>
        </div>
      </div>
      <div className={style.content}>
          <p className={style.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ducimus beatae magnam unde totam, velit laboriosam similique impedit dolorem dignissimos adipisci pariatur. Dicta, impedit consequuntur. Temporibus ex eius quas ipsum.
          </p>
        </div>
    </div>
  )
}

export default Blogpost
