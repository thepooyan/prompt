import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Mail, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { Author } from '@/db/schema'
import RenderSchema from '../schema/RenderSchema'
import { getAuthorSchema } from '../schema/schema'

interface AuthorCardProps {
  author: Author
}

export function AuthorCard({ author }: AuthorCardProps) {
  const initials = author.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()

  return (
    <Card className="p-6 max-w-md m-auto border-none">
      <RenderSchema schema={getAuthorSchema(author)}/>
      <div className="flex items-start gap-4">
        <Avatar className="h-16 w-16 border-2 border-border">
          <AvatarImage src={author.picture || undefined} alt={author.name} />
          <AvatarFallback className="bg-muted text-lg font-semibold text-muted-foreground">
            {initials}
          </AvatarFallback>
        </Avatar>

        <div className="flex-1 space-y-3">
          <div>
            <h3 className="text-lg font-semibold text-foreground">{author.name}</h3>
            {author.email && (
              <a
                href={`mailto:${author.email}`}
                className="mt-1 flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Mail className="h-4 w-4" />
                <span className="truncate">{author.email}</span>
              </a>
            )}
          </div>

          <Button variant="outline" size="sm" className="w-full gap-2" asChild>
            <Link href={`/Author/${author.id}`}>
              مشاهده بیشتر
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </Card>
  )
}

