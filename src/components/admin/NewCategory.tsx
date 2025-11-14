"use client";
import { Button } from "@/components/ui/button";
import { Input } from "../ui/input";
import { useState } from "react";
import { insertCategory } from "@/server/mutation";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { promptType } from "@/db/schema";

interface p {
  type: promptType
}
const NewCategory = ({type}:p) => {

  const [name, setName] = useState("")
  const [slug, setSlug] = useState("")
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const submit = async () => {
    setLoading(true)
    const {ok} = await insertCategory({name, slug, type})
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
      <Input placeholder="نام" value={name} onChange={e => setName(e.target.value)}/>
      <Input placeholder="اسلاگ" value={slug} onChange={e => setSlug(e.target.value)}/>
      <Button loading={loading} onClick={submit}>افزودن</Button>
    </div>
  );
};

export default NewCategory;
