import { getLogoUrl } from "@/config/config";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center justify-center gap-3">
      <Image src={getLogoUrl()} width={80} height={80} alt="prompt Bazar's logo" className="w-18 h-18 md:w-auto md:h-auto"/>

      <div className="ltr text-center hidden lg:block">
        <p className="font-bold text-lg hidden sm:block">
          PROMPT <span className="text-primary">BAZAR</span>
        </p>
        <p className="text-muted-foreground sm:block hidden">
          Ignite. Discover. Automate.
        </p>
      </div>
    </Link>
  );
};

export default Logo;
