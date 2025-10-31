"use client"
import { Plus, X } from "lucide-react"
import { Button } from "./button"
import { Input } from "./input"
import { Dispatch, SetStateAction, useState } from "react"
import { Badge } from "./badge"

interface p<T> {
    array: T[]
    onChange: (val: string[]) => void
}
function ArrayInput({array, onChange}:p<string>) {

    const [strValue, setStrValue] = useState("")

    const submit = () => {
        onChange && onChange([...array, strValue])
        setStrValue("")
    }
    const remove = (i: number) => {
        onChange && onChange([...array.filter((_,ii) => ii !== i)])
    }


    return (
    <>
        <div className="flex gap-2">
            <Input
                value={strValue}
                onChange={e => setStrValue(e.target.value)}
                onKeyDown={e => e.key === "Enter" && (e.preventDefault(), submit()) }
            />
            <Button type="button" onClick={submit} size="sm">
                <Plus className="h-4 w-4" />
            </Button>
        </div>

        {array.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
                {array.map((tag,i) => (
                    <Badge key={i} variant="secondary" className="flex items-center gap-1" onClick={() => remove(i)}>
                        {tag}
                        <X className="h-3 w-3 cursor-pointer hover:text-destructive" />
                    </Badge>
                ))}
            </div>
        )}

    </>
    )
}

export default ArrayInput