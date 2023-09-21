"use client"


import { FormEvent } from "react"
import { css } from "../../../styled-system/css"
import { container } from "../../../styled-system/patterns"
import { useSession, signIn, signOut } from "next-auth/react"
import { User } from "next-auth"


export default function WriteLetter() {

  const {data: session} = useSession()

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
 
    const formData = new FormData(event.currentTarget)
    formData.set("email",String(session?.user?.email))
    const response = await fetch('/api/letters', {
      method: 'POST',
      body: formData
    })
 
    // Handle response if necessary
    const data = await response.json()
    // ...
  }

  return (
    <div className={container({maxW: "4xl"})}>
      <p className={css({fontSize:"3xl", textAlign: "center", p:"8"})}>
        Write a letter
      </p>
      <form onSubmit={onSubmit}>
        <textarea name="content" defaultValue={"Dear Stranger,\n\n"}
        className={css({
          background:"gray.300", 
          width:"100%", 
          height:"20rem", 
          padding: "12px 20px", 
          border: "2px solid black",
          _focus: {
            outline: "none",
          }
          })}></textarea>
          <button type="submit" className={css({
            padding: "2",
            rounded: "md",
            background: "blue.400",
            border: "2px solid transparent",
            boxSizing: "border-box",
            _hover:{
              border: "2px solid black",
            }
          })}>Send letter</button>
          <br/>
          ID: {session?.user?.email}
          <br/>
          User: {session?.user?.name}
      </form>
    </div>
  )
}
