import { User } from "better-auth";

export const isAdmin = (user: User) => {
  if (user.email === "thepooyan@gmail.com") return true
  if (user.email === "p.kalantar.n@gmail.com") return true
  return false
}
