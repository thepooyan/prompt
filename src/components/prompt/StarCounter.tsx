import { cn } from "@/lib/utils"
import { Star } from "lucide-react"

const StarCounter = ({whole, fraction}:{whole: number, fraction: number}) => {
  return (
    <div className="flex gap-.5">
      {Array.from({length: whole}).map((_,i) => <Star key={i} className={cn(
        "text-transparent fill-yellow-50",
        i < fraction && "fill-yellow-500",
      )}/>)}
    </div>
  )
}

export default StarCounter
