import { env } from "@/server/env"

const TagManagerBody = () => {
  console.log("body")
  return (
    <noscript>
    <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${env.NEXT_PUBLIC_GTM_ID}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
    ></iframe>
    </noscript>
  )
}

export default TagManagerBody

