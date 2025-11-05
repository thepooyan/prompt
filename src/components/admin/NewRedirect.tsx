"use client";
import { Button } from "@/components/ui/button";
import { Input } from "../ui/input";
import { useState } from "react";
import { insertCategory, insertRedirect } from "@/server/mutation";
import { toast } from "sonner";
import { useRouter } from "next/navigation";


const NewRedirect = () => {

  const [name, setName] = useState("")
  const [slug, setSlug] = useState("")
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const submit = async () => {
    setLoading(true)
    const {ok} = await insertRedirect({from: name, to: slug})
    setLoading(false)
    if (ok) {
      toast.success("موفقیت!")
      router.refresh()
      setName("")
      setSlug("")
    } else {
      toast.error("خطا")
    }
  }

  return (
    <div className="flex p-5 gap-3">
      <Input placeholder="از" value={name} onChange={e => setName(e.target.value)} className="ltr"/>
      <Input placeholder="به" value={slug} onChange={e => setSlug(e.target.value)} className="ltr"/>
      <Button loading={loading} onClick={submit}>افزودن</Button>
    </div>
  );
};

export default NewRedirect;
