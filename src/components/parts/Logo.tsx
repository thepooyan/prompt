import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center justify-center gap-3">
      <Image src="/logo.png" width={100} height={100} alt="prompt Bazar's logo"/>

      <div className="ltr text-center">
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
