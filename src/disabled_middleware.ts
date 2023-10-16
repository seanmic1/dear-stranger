// Without a defined matcher, this one line applies next-auth
// to the entire project
// export { default } from "next-auth/middleware"

// Applies next-auth only to matching routes - can be regex
// Ref: nextjs middleware matcher
// export const config = { matcher: ["/writeletter","/respondletter","/readresponse/(.*)"]}

// import { NextResponse, NextRequest } from 'next/server'

//set theme cookie onload
// export function middleware(request: NextRequest) {
//   const response = NextResponse.next()
//   if (request.cookies.get("theme") === undefined){
//     response.cookies.set('theme', 'light')
//   }

//   return response
// }