"use client"

import { authClient } from "@/lib/auth-client"
import Link from "next/link";

import { useEffect, useState } from "react"
type  user = {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    email: string;
    emailVerified: boolean;
    name: string;
    image?: string | null | undefined;
};
const LoginButton = () => {
  const [user, setUser] = useState<user|null>(null)
  useEffect(() => {
    (async() => {
      const a = await authClient.getSession()
      console.log(a)
      setUser(a.data?.user || null)
    })()
  })
  return (
    <div className="flex items-center gap-3">
      {user !== null ? 
        `welcome! ${user.email}`
        :
        <Link href="/Login" className="bg-primary px-4 py-2 rounded-lg font-medium">ثبت‌نام / ورود</Link>
      }
    </div>
  )
}

export default LoginButton
