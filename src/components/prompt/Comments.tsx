import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import StarCounter from './StarCounter';

const comments = [
  {msg: "عالیه! دیگه لازم نیست هر لحظه قیمت رو چک کنم.", name: "علی از اصفهان "},
  {msg: "خیلی راحت نصب شد و کار می‌کنه. ممنون!", name: "سارا از تهران"},
]

const Comments = () => {
  return (
    <Card className='mt-10'>
      <CardHeader>
        <CardTitle>نظرات</CardTitle>
        <CardDescription>امتیاز و نظر کاربران</CardDescription>
      </CardHeader>
      <CardContent>
        {comments.map(c => <Box {...c} key={c.name}/>)}
      </CardContent>
      <CardFooter className='justify-between font-bold'>
        امتیاز کل: ۴ از ۵
        <StarCounter whole={5} fraction={4}/>
      </CardFooter>
    </Card>
  )
}

const Box = ({msg, name}:{msg: string, name: string}) => {
  return (
    <div className='bg-muted p-5 rounded-lg mb-5 text-muted-foreground'>
      {msg}
      <p className='text-muted-foreground/70'>
        {name}
      </p>
    </div>
  )
}

export default Comments
