import style from "./page.module.css"
import React from 'react'
import Link from "next/link"

const Portfolio = () => {
  return (
    <div className={style.container}>
      <h1 className={style.selectTitle}>Choose a gallery</h1>
      <div className={style.items}>
        <Link href="/portfolio/illustrations" className={style.item}>
          <span className={style.title}>Illustrations</span>
        </Link>
        <Link href="/portfolio/websites" className={style.item}>
          <span className={style.title}>Websites</span>
        </Link>
        <Link href="/portfolio/applications" className={style.item}>
          <span className={style.title}>Application</span>
        </Link>
      </div>
    </div>
  )
}

export default Portfolio
