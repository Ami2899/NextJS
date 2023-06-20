import React, { ReactNode } from 'react'
import style from "./page.module.css"

type LayoutProps={
    children:ReactNode
}

const Layout:React.FC<LayoutProps> = ({children}) => {
  return (
    <div>
      <h1 className={style.mainTitle}>Our Works</h1>
      {children}
    </div>
  )
}

export default Layout
