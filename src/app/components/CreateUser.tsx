"use client"

import { FormEvent, cache, use } from "react"


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

    let myForm = document.getElementById("createUser") as HTMLFormElement

    myForm.reset()

  }

  return (
    <form id="createUser" onSubmit={onSubmit}>
      <input type="text" name="email" placeholder="email" />      
      <input type="text" name="name" placeholder="name"/>
      <input type="text" name="country" placeholder="country"/>
      <br></br>
      <button type="submit" style={{background:"gray"}}>Submit</button>
    </form>
  )
}
