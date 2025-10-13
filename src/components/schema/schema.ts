export type schema = Record<string, string | object>

export const mainSchema:schema = {
    '@context': 'http://schema.org',
    '@type': 'WebPage',
    name: 'پرامپت بازار',
    description: 'پرامپت بازار یک پلتفرم آنلاین است که بهترین پرامپت‌ها برای مدل‌های هوش مصنوعی را ارائه می‌دهد.',
    url: 'https://promptbazar.ir',
    publisher: {
        '@type': 'Organization',
        name: 'پرامپت بازار',
        logo: 'https://yourwebsite.com/logo.png',
    },
}