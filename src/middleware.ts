// Without a defined matcher, this one line applies next-auth
// to the entire project
export { default } from "next-auth/middleware"

// Applies next-auth only to matching routes - can be regex
// Ref: nextjs middleware matcher
export const config = { matcher: ["/writeletter","/respondletter"]}