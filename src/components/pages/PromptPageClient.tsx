import { siTelegram, siX} from 'simple-icons';
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
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
import { PromptCard } from '../PromptCard';
import { AuthorCard } from '../author/AuthorCard';
import PromptDisplay from '../parts/PromptDisplay';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import Comments from '../prompt/Comments';

interface p { 
  prompt: PromptWithRelations
  related: PromptWithRelations[]
}
export default function PromptPage({ prompt, related }:p ) {

  const tagList = prompt.tags.split(",").map((tag) => tag.trim())

  const pageLink = `/Prompts/${prompt.slug}`

  const telegramLink = getTelegramShareUrl(prompt.title, pageLink)
  const twitterLink = getTwitterShareUrl(prompt.title, pageLink)

  return (
    <article className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-[30dvw] min-h-90 w-full overflow-hidden bg-muted">
        <Image src={prompt.picture || "/placeholder.svg"} alt={prompt.title} className="object-cover m-auto object-top"
        fill
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="relative mx-auto flex h-full max-w-4xl flex-col justify-end px-4 sm:pb-12">
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

        <PromptDisplay prompt={prompt.prompt}/>

        {/* Sample pic */}
        {prompt.samplePicture && 
        <div className="flex flex-col items-center mt-10">
          <div className="text-3xl font-bold mb-5">نمونه خروجی واقعی</div>

          <Image
            className="rounded "
            src={prompt.samplePicture || "/placeholder.svg"}
            alt={prompt.title}
            width={1023}
            height={1023}
          />
        </div>}

        {/* Usage Tips */}
        <div className="mb-12">
          <div className="prose-lg prose-zinc   sm:p-10 rounded mt-10">
            <Markdwon>{prompt.description}</Markdwon>
          </div>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
          <Card>
              <CardHeader>
                <CardTitle>
                  نویسنده
                </CardTitle>
                <CardDescription>
                  با نویسنده این مطلب بیشتر آشنا شوید
                </CardDescription>
              </CardHeader>
              <CardContent>
                <AuthorCard author={prompt.author}/>
              </CardContent>
          </Card>

          <Card>
              <CardHeader>
                <CardTitle>اشتراک گذاری</CardTitle>
                <CardDescription>این مطلب را با دوستان خود به اشتراک بگذارید</CardDescription>
              </CardHeader>
             <CardContent className='flex items-center justify-center h-full gap-6'>
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
            </CardContent> 
          </Card>
        </div>

        <Comments/>

        {related.length > 0 && <>
          <p className='text-center text-3xl mt-40 font-bold  '>مطالب مرتبط</p>
          <div className='grid grid-cols-1 md:grid-cols-2 justify-items-center gap-5  mt-20'>
            {related.map(r => <PromptCard prompt={r} key={r.slug}/>)}
          </div>
        </>}
      </div>
    </article>
  )
}

