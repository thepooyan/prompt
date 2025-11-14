import { siTelegram, siX} from 'simple-icons';
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { PromptCopyButton } from "./PromptCopyButton"
import Markdwon from "../util/Markdwon"
import SimpleIcon from '../icons/SimpleIcon';
import { Copy } from 'lucide-react';
import { Button } from '../ui/button';
import Copyable from '../ui/copyable';
import { getTelegramShareUrl, getTwitterShareUrl } from '@/lib/utils';
import { PromptWithRelations } from '@/server/dataFetching';
import Link from '../ui/link';
import MyBreadcrumb from '../parts/MyBreadcrumb';
import { promptBreadcrumb } from '../ts/breadcrumb';

interface p { 
  prompt: PromptWithRelations
}
export default function PromptPage({ prompt }:p ) {

  const tagList = prompt.tags.split(",").map((tag) => tag.trim())

  const pageLink = `/Prompts/${prompt.slug}`

  const telegramLink = getTelegramShareUrl(prompt.title, pageLink)
  const twitterLink = getTwitterShareUrl(prompt.title, pageLink)

  return (
    <article className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-[30dvw] w-full overflow-hidden bg-muted">
        <Image src={prompt.picture || "/placeholder.svg"} alt={prompt.title} className="object-cover m-auto object-top"
        fill
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="relative mx-auto flex h-full max-w-4xl flex-col justify-end px-4 pb-12">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            {tagList.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="bg-white/20 text-white backdrop-blur-sm hover:bg-white/30"
              >
                {tag}
              </Badge>
            ))}
            <Badge
              variant={prompt.isFree ? "default" : "secondary"}
              className={
                prompt.isFree
                  ? "bg-green-500 text-white hover:bg-green-600"
                  : "bg-amber-500 text-white hover:bg-amber-600"
              }
            >
              {prompt.isFree ? "رایگان" : "پریمیوم"}
            </Badge>

          </div>

          <h1 className="text-balance text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            {prompt.title}
          </h1>
          <Badge className="bg-white/20 text-white backdrop-blur-sm hover:bg-white/30 mt-5 " asChild >
            <Link href={`/Prompts/${prompt.category.slug}`}>
              دسته بندی: {prompt.category?.name || "-"}
            </Link>
          </Badge>
        </div>
      </div>


      {/* Content Section */}
      <div className="mx-auto max-w-4xl px-4 py-12">
        <MyBreadcrumb items={promptBreadcrumb(prompt)}/>

        {/* Description */}
        <div className="my-12 ">
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">{prompt.excerpt}</p>
        </div>

        {/* Prompt Display */}
        <div className="rounded-lg border bg-card">
          <div className="flex items-center justify-between border-b px-6 py-4">
            <h2 className="text-xl font-semibold">پرامپت</h2>
            <PromptCopyButton text={prompt.prompt} />
          </div>
          <div className="p-6">
            <pre className="ltr whitespace-pre-wrap overflow-hidden font-mono text-sm leading-relaxed">{prompt.prompt}</pre>
          </div>
        </div>

        {/* Sample pic */}
        <div className="flex flex-col items-center mt-10">
          <div className="text-3xl font-bold mb-5">نمونه خروجی واقعی</div>

          <Image
            className="rounded "
            src={prompt.samplePicture || "/placeholder.svg"}
            alt={prompt.title}
            width={1023}
            height={1023}
          />
        </div>

        {/* Usage Tips */}
        <div className="mb-12">
          <div className="prose-lg prose-zinc   p-10 rounded mt-10">
            <Markdwon>{prompt.description}</Markdwon>
          </div>
        </div>

        <div className='flex flex-col items-center'>
          <p className='text-2xl font-bold mb-4'>اشتراک گذاری</p>
           <div className='flex items-center gap-6 mt-10'>
            <a href={telegramLink} target='_blank'>
              <SimpleIcon i={siTelegram} className='fill-blue-700 p-1 bg-white rounded'/>
            </a>
            <a href={twitterLink} target='_blank'>
              <SimpleIcon i={siX} className='bg-white p-1 rounded'/>
            </a>
            <Copyable toCopy={pageLink}>
              <Button variant="secondary">
                <Copy/>
              </Button>
            </Copyable>
          </div> 
        </div>




      </div>
    </article>
  )
}

