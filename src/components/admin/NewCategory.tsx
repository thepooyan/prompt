"use client";
import { Button } from "@/components/ui/button";
import { Input } from "../ui/input";
import { useState } from "react";
import { insertCategory } from "@/server/mutation";
import { toast } from "sonner";
import { useRouter } from "next/navigation";


const NewCategory = () => {

  const [name, setName] = useState("")
  const [slug, setSlug] = useState("")
  const router = useRouter()

  const submit = async () => {
    const {ok} = await insertCategory({name, slug})
    if (ok) {
      toast("موفقیت!")
      router.refresh()
      setName("")
      setSlug("")
    } else {
      toast("خطا")
    }
  }

  return (
    <div className="flex p-5 gap-3">
      <Input placeholder="نام" value={name} onChange={e => setName(e.target.value)}/>
      <Input placeholder="اسلاگ" value={slug} onChange={e => setSlug(e.target.value)}/>
      <Button onClick={submit}>افزودن</Button>
    </div>
  );
};

export default NewCategory;
