import React from 'react'
import style from "./page.module.css";
import Button from '@/components/Button/Button';
import Image from 'next/image';
import Link from 'next/link';
import { ObjectId } from 'mongodb';

export type ItemValue={
  _id:ObjectId;
  id:string;
  img:string;
  title:string;
  desc:string;
}

async function getData() {
  const res = await fetch('http://localhost:3000/api/posts', {
   cache:"no-store",
  });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

const Blog = async () => {
  const data = await getData()
  return (
    <div className={style.mainContainer}>
      {data.map((item: ItemValue) => (
        <Link href={`/blog/${item._id}`} className={style.container} key={item.id}>
          <div className={style.imageContainer}>
            <Image
              src={item.img}
              alt=""
              width={400}
              height={250}
              className={style.image}
            />
          </div>
          <div className={style.content}>
            <h1 className={style.title}>{item.title}</h1>
            <p className={style.desc}>{item.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Blog