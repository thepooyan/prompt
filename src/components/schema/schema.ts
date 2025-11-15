import { Author } from "@/db/schema"

export type schema = Record<string, string | object>

// export const mainSchema:schema = {
//     '@context': 'http://schema.org',
//     '@type': 'WebPage',
//     name: 'پرامپت بازار',
//     description: 'پرامپت بازار یک پلتفرم آنلاین است که بهترین پرامپت‌ها برای مدل‌های هوش مصنوعی را ارائه می‌دهد.',
//     url: 'https://promptbazar.ir',
//     publisher: {
//         '@type': 'Organization',
//         name: 'پرامپت بازار',
//         logo: 'https://yourwebsite.com/logo.png',
//     },
// }
//


export function getAuthorSchema(author: Author) {
  const schema: Record<string, any> = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: author.name
  };

  if (author.email) schema.email = `mailto:${author.email}`;
  if (author.website) schema.url = author.website;
  if (author.picture) schema.image = author.picture;

  const sameAs = [author.github, author.linkedin, author.twitter, author.website].filter(Boolean);
  if (sameAs.length > 0) schema.sameAs = sameAs;

  return schema;
}
