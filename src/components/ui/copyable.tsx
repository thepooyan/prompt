import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import clsx from "clsx";
import { copyToClipboard } from "@/lib/utils";
import { ReactNode, useState } from "react";
import { CircleCheck } from "lucide-react";

interface props {
  toCopy: string;
  children: ReactNode
}
const Copyable = ({ children, toCopy }: props) => {
  const [copied, setCopied] = useState(false);
  const [open, setOpen] = useState(false);

  const click = () => {
    copyToClipboard(toCopy).catch((e) => alert(e));
    setCopied(true)
    setTimeout(() => setCopied(false), 3000)
  };
  const limitSize = (str: string) => {
    let limit = 20;
    if (str.length > limit) return str.substring(0, limit).concat("...");
    return str;
  };
  return (
    <Tooltip open={open}>
      <TooltipTrigger onMouseOver={() => setOpen(true)} onMouseOut={() => setOpen(false)}>
        <div className="cursor-pointer inline select-none" onClick={click}>
          {children ? children : limitSize(toCopy)}
        </div>
      </TooltipTrigger>
      <TooltipContent className={clsx(copied && " rtl z-20")}>
        {!copied ? "برای کپی کلیک کنید" : <>
          کپی شد!
          <CircleCheck className="inline mr-2 " size="15" />
        </>}
      </TooltipContent>
    </Tooltip>
  );
};

export default Copyable;
