"use client"

import { User } from "@prisma/client"
import Link from "next/link"
import { NextRequest } from "next/server"
import { FormEvent, cache, use } from "react"
import css from "styled-jsx/css"
import { square } from "../../../styled-system/patterns"


export default function CreateUser() {

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
 
    const formData = new FormData(event.currentTarget)
    const response = await fetch('/api/users', {
      method: 'POST',
      body: formData,
    })
 
    // Handle response if necessary
    const data = await response.json()
    // ...
  }

  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="email" />      
      <input type="text" name="name" />
      <input type="text" name="country" />
      <br></br>
      <button type="submit" style={{background:"gray"}}>Submit</button>
    </form>
  )
}
