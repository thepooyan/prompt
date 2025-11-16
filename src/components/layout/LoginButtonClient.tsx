"use client"
import Link from "next/link";
import UserDropdown from "../parts/UserDropdown";
import { authClient } from "@/lib/auth-client";

export type user = {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    email: string;
    emailVerified: boolean;
    name: string;
    image?: string | null | undefined;
};
const LoginButtonClient = () => {
  const {data} = authClient.useSession()
  const user = data?.user

  return (
    <div className="flex items-center gap-3">
      {user ? 
          <UserDropdown user={user}/>
          :
          <Link href="/Login" className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium">ثبت‌نام / ورود</Link>
      }
    </div>
  )
}

export default LoginButtonClient

