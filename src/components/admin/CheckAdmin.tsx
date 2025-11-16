"use client"

import { authClient } from "@/lib/auth-client"
import { isAdmin } from "@/server/serverUtil"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

const CheckAdmin = () => {
  const session = authClient.useSession()
  const router = useRouter()
  const user = session.data?.user

  useEffect(() => {
    if (!user) router.replace("/")
    if (user && !isAdmin(user)) router.replace("/")
  }, [user, router])

  return null
}

export default CheckAdmin

