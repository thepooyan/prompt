import Script from "next/script"
import { schema } from "./schema"

interface p {
    schema: schema
}
const RenderSchema = ({schema}:p) => {
  return (
    <Script
        id="schema-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }}
    />
  )
}

export default RenderSchema