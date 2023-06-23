import React from 'react'
import style from "./page.module.css"
import Button from '@/components/Button/Button'
import { Items, items } from './data'
import Image from 'next/image'
import { notFound } from 'next/navigation'

type CategoryProps = {
  params: {
    category: keyof Items;
  }
}

const getData = (cat: keyof Items) => {
  const data = items[cat]
  if (data) {
    return data
  }
  return notFound()
}

const Category: React.FC<CategoryProps> = ({ params }) => {
  const data = getData(params.category)
  return (
    <div>
      <h1 className={style.catTitle}>{params.category}</h1>
      {data.map((item) => (
        <div className={style.item} key={item.id}>
          <div className={style.content}>
            <h1 className={style.title}>{item.title}</h1>
            <p className={style.desc}>{item.desc}</p>
            <Button text="See More" url="#" />
          </div>
          <div className={style.imgContainer}>
            <Image
              className={style.image}
              fill={true}
              src={item.img}
              alt=""
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default Category

