import { Sparkles } from "lucide-react";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center justify-center gap-3">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#8a2be2] to-[#6a1bb2] glow-purple-sm">
        <Sparkles className="h-6 w-6 text-white" />
      </div>
      <h1 className="text-2xl font-bold bg-gradient-to-l from-[#8a2be2] to-[#b47eff] bg-clip-text text-transparent">
        پرامپت بازار
      </h1>
    </Link>
  );
};

export default Logo;
