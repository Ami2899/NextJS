"use client"
import React from 'react'
import style from "./page.module.css"
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const Login = () => {
  const session=useSession()
  const router=useRouter()

  if(session.status==="loading"){
    return <p>Loading</p>
  }
  if(session.status==="authenticated"){
    router?.push("/dashboard")
  }
  
  const handleSubmit=async(e:any)=>{
    e.preventDefault()
    const email=e.target[0].value;
    const password=e.target[1].value;
    signIn("credentials",{email,password})
  }

  return (
    <div className={style.container}>
      <form className={style.form} onSubmit={handleSubmit}>
        <input type="email" placeholder='email' className={style.input} required />
        <input type="password" placeholder='password' className={style.input} required />
        <button className={style.button}>Login</button>
      </form>
      <button onClick={()=>signIn("google")}>Log in with Google</button>
    </div>
  )
}

export default Login