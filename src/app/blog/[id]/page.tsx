"use client"
import React from 'react';
import style from './page.module.css';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ObjectId } from 'mongodb';

type BlogProps = {
  params: {
    id: ObjectId;
  };
};

async function getData({ id }: { id: ObjectId }) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: 'no-store',
  });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

const Blogpost: React.FC<BlogProps> = ({ params }) => {
  const [data, setData] = React.useState<any>(null);

  React.useEffect(() => {
    console.log("ID:", params.id);
    (async () => {
      try {
        const jsonData = await getData({ id: params.id });
        console.log("Received blog post data:", jsonData);
        setData(jsonData);
      } catch (error) {
        setData(notFound);
      }
    })();
  }, [params.id]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className={style.container}>
      <div className={style.top}>
        <div className={style.info}>
          <h1 className={style.title}>{data.title}</h1>
          <p className={style.desc}>{data.desc}</p>
          <div className={style.author}>
            <Image
              src={data.img}
              alt=""
              width={40}
              height={40}
              className={style.avatar}
            />
            <span className={style.username}>{data.username}</span>
          </div>
        </div>
        <div className={style.imgContainer}>
          <Image
            src={data.img}
            alt=""
            fill={true}
            className={style.image}
          />
        </div>
      </div>
      <div className={style.content}>
        <p className={style.text}>
          {data.content}
        </p>
      </div>
    </div>
  );
};

export default Blogpost;
