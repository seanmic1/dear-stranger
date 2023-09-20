"use client"

import { User } from "@prisma/client"
import { cache, use } from "react"

const getUsers = cache(() =>
  fetch("/api/users").then((res) => res.json())
)

export default function ListUsers() {

  let users = use<User[]>(getUsers())

  return (
    <div
    style={{
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr 1fr",
      gap: 20,
    }}
  >
    {users.map((user) => (
      <div
        key={user.id}
        style={{ border: "1px solid #ccc", textAlign: "center" }}
      >
        <h3>{user.id}</h3>
        <h3>{user.email}</h3>
        <h3>{user.country}</h3>
        <h3>{user.name}</h3>
      </div>
    ))}
  </div>
  )
}
