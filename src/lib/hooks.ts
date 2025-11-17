import { useRouter } from "next/navigation";
import { DependencyList, EffectCallback, useEffect, useRef } from "react";
import { authClient } from "./auth-client";

export const useDidMountEffect = (
  func: EffectCallback,
  deps: DependencyList | undefined,
) => {
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) func();
    else didMount.current = true;
  }, deps);
};

export const useCheckAuth = () => {
  const session = authClient.useSession()
  const user = session.data?.user
  const router = useRouter()

  useDidMountEffect(() => {
    if (user === null)
      router.push("/auth")
  }, [user])
}