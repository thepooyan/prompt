"use client"

import { authClient } from "@/lib/auth-client"
import Link from "next/link";

export type user = {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    email: string;
    emailVerified: boolean;
    name: string;
    image?: string | null | undefined;
};
const LoginButton = () => {

  const session = authClient.useSession()
  const a = () => {
    console.log(session.data)
  }

  return (
    <div className="flex items-center gap-3" onClick={a}>
      {session.error && session.error.message}
      {session.isPending && "pending..."}
      {session.data !== null ? 
        `welcome! ${session.data?.user.email}`
        :
        <Link href="/#" className="bg-primary px-4 py-2 rounded-lg font-medium">ثبت‌نام / ورود</Link>
      }
    </div>
  )
}

export default LoginButton

