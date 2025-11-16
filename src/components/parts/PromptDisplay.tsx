"use client"
import { useEffect, useRef, useState } from "react";
import { PromptCopyButton } from "../pages/PromptCopyButton";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

interface p {
  prompt: string
}
const PromptDisplay = ({prompt}:p) => {

  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(false)
  const preRef = useRef<HTMLPreElement>(null)

  useEffect(() => {
    const el = preRef.current
    if (!el) return
    if (el?.clientHeight < el?.scrollHeight) setActive(true)
  }, [])
  
  return (
    <div className="rounded-lg border bg-card">
      <div className="flex items-center justify-between border-b px-6 py-4">
        <h2 className="text-xl font-semibold">پرامپت</h2>
        <PromptCopyButton text={prompt} />
      </div>
      <div className="p-6">
        <pre className={cn("ltr whitespace-pre-wrap overflow-hidden text-sm leading-relaxed max-h-70 transition-all",
          open && "max-h-200"
        )} ref={preRef}>
          {prompt}
        </pre>
        {active && 
        <Button variant="outline" className="m-auto mt-5 block" onClick={() => setOpen(prev => !prev)}>
          مشاهده {open ? "کمتر" : "بیشتر"}
        </Button>}
      </div>
    </div>
  );
};

export default PromptDisplay;
