import { Lock } from "lucide-react"
import { Button } from "../ui/button"
import { Card } from "../ui/card"

const LockedPrompt = () => {
  return (
    <Card className={`flex justify-center items-center gap-2 flex-col `}>
      <Lock className="text-primary" />
        این پرامپت ویژه است!
      <p className="text-card-foreground/60">
        برای دیدن این پرامپت، میتوانید اشتراک ویزه پرامپت بازار تهیه کنید
      </p>
      <Button className="mt-5">خرید اشتراک</Button>
    </Card>
  )
}

export default LockedPrompt
