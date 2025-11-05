import { SimpleIcon as t } from "simple-icons/icons";
import { cn } from "@/lib/utils";

interface p {
  i: t,
  className?: string
}
const SimpleIcon = ({i, className}:p) => {
  return (
    <div
      dangerouslySetInnerHTML={{__html: i.svg}}
      className={cn(
        "w-10 h-10",
        className
      )}
    />
  );
};

export default SimpleIcon;
