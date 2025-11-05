import Link from "next/link"
import M from "react-markdown"
import remarkGfm from 'remark-gfm'

const Markdwon = ({children}:{children: string}) => {
  return (
    <M
      remarkPlugins={[remarkGfm]}
      components={{
        a: ({ href, children }) =>  <Link href={href || ""}>{children}</Link>
      }}>
      {children}
    </M>
  )
}

export default Markdwon
