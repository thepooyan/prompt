import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Mail, Github, Linkedin, Twitter, Globe } from 'lucide-react'
import { Author } from '@/db/schema'

interface AuthorProfileProps {
  author: Author
}

export function AuthorProfile({ author }: AuthorProfileProps) {
  const initials = author.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        <div className="space-y-12">
          {/* Header Section */}
          <div className="flex flex-col items-center gap-8 text-center md:flex-row md:items-start md:gap-12 md:text-left">
            <Avatar className="h-32 w-32 border-4 border-border md:h-40 md:w-40">
              <AvatarImage src={author.picture || undefined} alt={author.name} />
              <AvatarFallback className="bg-muted text-3xl font-semibold text-muted-foreground md:text-4xl">
                {initials}
              </AvatarFallback>
            </Avatar>

            <div className="flex-1 space-y-4">
              <div>
                <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                  {author.name}
                </h1>
                <p className="mt-2 text-lg text-muted-foreground">Author & Writer</p>
              </div>

              <p className="text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
                Passionate about crafting compelling stories and sharing insights on technology, design, and the
                creative process. Join me on a journey through ideas and innovation.
              </p>
            </div>
          </div>

          {/* Contact & Social Section */}
          <Card className="border-2 bg-card p-8">
            <h2 className="mb-6 text-2xl font-semibold text-card-foreground">Connect</h2>

            <div className="grid gap-6 sm:grid-cols-2">
              {/* Email */}
              {author.email && (
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-muted-foreground">Email</h3>
                  <Button
                    variant="outline"
                    className="h-auto w-full justify-start gap-3 px-4 py-3 text-left"
                    asChild
                  >
                    <a href={`mailto:${author.email}`}>
                      <Mail className="h-5 w-5 shrink-0 text-accent" />
                      <span className="truncate text-sm">{author.email}</span>
                    </a>
                  </Button>
                </div>
              )}

              {/* Website */}
              {author.website && (
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-muted-foreground">Website</h3>
                  <Button
                    variant="outline"
                    className="h-auto w-full justify-start gap-3 px-4 py-3 text-left"
                    asChild
                  >
                    <a href={author.website} target="_blank" rel="noopener noreferrer">
                      <Globe className="h-5 w-5 shrink-0 text-accent" />
                      <span className="truncate text-sm">{author.website.replace(/^https?:\/\//, '')}</span>
                    </a>
                  </Button>
                </div>
              )}

              {/* GitHub */}
              {author.github && (
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-muted-foreground">GitHub</h3>
                  <Button
                    variant="outline"
                    className="h-auto w-full justify-start gap-3 px-4 py-3 text-left"
                    asChild
                  >
                    <a href={`https://github.com/${author.github}`} target="_blank" rel="noopener noreferrer">
                      <Github className="h-5 w-5 shrink-0 text-accent" />
                      <span className="truncate text-sm">@{author.github}</span>
                    </a>
                  </Button>
                </div>
              )}

              {/* LinkedIn */}
              {author.linkedin && (
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-muted-foreground">LinkedIn</h3>
                  <Button
                    variant="outline"
                    className="h-auto w-full justify-start gap-3 px-4 py-3 text-left"
                    asChild
                  >
                    <a
                      href={`https://linkedin.com/in/${author.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-5 w-5 shrink-0 text-accent" />
                      <span className="truncate text-sm">@{author.linkedin}</span>
                    </a>
                  </Button>
                </div>
              )}

              {/* Twitter */}
              {author.twitter && (
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-muted-foreground">Twitter</h3>
                  <Button
                    variant="outline"
                    className="h-auto w-full justify-start gap-3 px-4 py-3 text-left"
                    asChild
                  >
                    <a href={`https://twitter.com/${author.twitter}`} target="_blank" rel="noopener noreferrer">
                      <Twitter className="h-5 w-5 shrink-0 text-accent" />
                      <span className="truncate text-sm">@{author.twitter}</span>
                    </a>
                  </Button>
                </div>
              )}
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

