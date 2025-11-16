import { User } from "better-auth";

export const isAdmin = (user: User) => {
  if (user.email === "thepooyan@gmail.com") return true
  return false
}
