"use client"

import { authClient } from "@/lib/auth-client";
import Image from "next/image";

const ContinueWithGoogle = () => {
  const clickHndlr = async () => {
    await authClient.signIn.social({
      provider: "google",
      errorCallbackURL: "/error",
      callbackURL: "/",
      newUserCallbackURL: "/welcome"
    }).catch(err => {
      alert(err)
    })
  }
  return (
    <button onClick={clickHndlr} className={`  border-1 bg-input rounded-lg w-full  flex justify-center 
      py-3 gap-3 items-center cursor-pointer hover:bg-accent transition-colors
      `}>
      <Image width={40} height={40} src="/google.svg" alt="Google logo"/>
      با گوگل ادامه دهید
    </button>
  );
};

export default ContinueWithGoogle;
