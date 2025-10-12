import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <h2 className="mb-4 text-4xl font-bold">Prompt Not Found</h2>
      <p className="mb-8 text-center text-muted-foreground">
        {"The prompt you're looking for doesn't exist or has been removed."}
      </p>
      <Button asChild>
        <Link href="/">Return Home</Link>
      </Button>
    </div>
  )
}
