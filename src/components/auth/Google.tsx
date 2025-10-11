"use client"

import { authClient } from "@/lib/auth-client";

const ContinueWithGoogle = () => {
  const clickHndlr = async () => {
    await authClient.signIn.social({
      provider: "google",
      requestSignUp: true
    })
  }
  return (
    <button onClick={clickHndlr} className="  border-1 bg-zinc-700 rounded-lg w-full  flex justify-center 
      py-3 gap-3 items-center cursor-pointer hover:bg-zinc-800
      ">
      <img src="/google.svg" alt="Google logo" width="40" height="40"/>
      با گوگل ادامه دهید
    </button>
  );
};

export default ContinueWithGoogle;
