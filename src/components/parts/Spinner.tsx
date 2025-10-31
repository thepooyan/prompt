import { cn } from "@/lib/utils"

interface p {
  size?: "sm" | "md" | "lg"

}
const Spinner = ({size = "md"}:p) => {

  const sizes = {
    sm: "7",
    md: "9",
    lg: "12"
  }

  const box = () => `w-${sizes[size]} h-${sizes[size]}`

  return (
    <div className={cn("relative", box())}>
      <div className="absolute inset-0 rounded-full border-2 border-border"></div>
      <div className="absolute inset-0 animate-spin rounded-full border-2 border-accent border-t-white"></div>
    </div>
  )
}

export default Spinner
