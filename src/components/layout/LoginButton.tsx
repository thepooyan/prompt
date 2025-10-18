"use client"

import { authClient } from "@/lib/auth-client"
import Link from "next/link";
import UserDropdown from "../parts/UserDropdown";
import Spinner from "../parts/Spinner";

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

  return (
    <div className="flex items-center gap-3">
      {session.isPending ? <Spinner size="sm"/> : 
        session.data !== null ? 
          <UserDropdown user={session.data.user}/>
          :
          <Link href="/Login" className="bg-primary px-4 py-2 rounded-lg font-medium">ثبت‌نام / ورود</Link>
      }
    </div>
  )
}

export default LoginButton

