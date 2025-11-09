import Link from "next/link";
import UserDropdown from "../parts/UserDropdown";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export type user = {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    email: string;
    emailVerified: boolean;
    name: string;
    image?: string | null | undefined;
};
const LoginButton = async () => {

  const session = await auth.api.getSession({headers: await headers()})

  return (
    <div className="flex items-center gap-3">
      {session !== null ? 
          <UserDropdown user={session.user}/>
          :
          <Link href="/Login" className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium">ثبت‌نام / ورود</Link>
      }
    </div>
  )
}

export default LoginButton

