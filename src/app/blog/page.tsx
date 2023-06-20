import React from 'react'
import style from "./page.module.css";
import Button from '@/components/Button/Button';
import Image from 'next/image';
import Link from 'next/link';

const Blog = () => {
  return (
    <div className={style.maincontainer}>
      <Link href="/blog/testId" className={style.container}>
        <div className={style.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
            alt=""
            width={400}
            height={250}
            className={style.image}
          />
        </div>
        <div className={style.content}>
          <h1 className={style.title}>Test</h1>
          <p className={style.desc}>Desc</p>
        </div>
      </Link>
      <Link href="/blog/testId" className={style.container}>
        <div className={style.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
            alt=""
            width={400}
            height={250}
            className={style.image}
          />
        </div>
        <div className={style.content}>
          <h1 className={style.title}>Test</h1>
          <p className={style.desc}>Desc</p>
        </div>
      </Link>
      <Link href=".blog/testId" className={style.container}>
        <div className={style.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
            alt=""
            width={400}
            height={250}
            className={style.image}
          />
        </div>
        <div className={style.content}>
          <h1 className={style.title}>Test</h1>
          <p className={style.desc}>Desc</p>
        </div>
      </Link>
    </div>
  )
}

export default Blog
