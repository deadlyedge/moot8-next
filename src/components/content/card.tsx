import { Flag, ThumbsDown, ThumbsUp } from "lucide-react"
import { Button } from "../ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card"

export default function WordCard() {
  return (
    <Card className='p-2 rounded-md bg-white/20 shadow-md text-zinc-100'>
      <CardHeader>
        <CardTitle className='text-3xl font-serif'>
          Card Title
        </CardTitle>
        <CardDescription className='text-md'>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p className='text-xs text-zinc-400 before:content-["_-_"] after:content-["_-_"]'>
          xdream oldlu
        </p>
        <p>
          its all basically dumb people using dumb words just to be sleazy
          skeezy and down right bad just to be able to smoke marijuana or other
          gay paraphernalia from some genitalia shaped device for 5 minutes of a
          shitty pointless non-enlightening false high. they use weed code words
          in front of teachers and parents and other "know better" people
          because they know what they are doing is stupid and wrong and they
          hide it cause they don't want to get caught because its STUPID and
          WRONG!
        </p>
      </CardContent>
      <CardFooter className='flex items-center justify-between'>
        <div className='flex items-center'>
          <Button className='flex items-center border shadow-sharp border-white p-3 pr-2 pl-4 rounded-l-3xl rounded-r-none hover:bg-lime-500 min-w-14 cursor-pointer'>
            <ThumbsUp />
            30
          </Button>
          <Button className='flex items-center border shadow-sharp border-white p-3 pl-2 pr-4 rounded-r-3xl rounded-l-none hover:bg-lime-500 min-w-14 cursor-pointer'>
            <ThumbsDown />
            30
          </Button>
        </div>
        <Button className='flex items-center border shadow-sharp border-white p-3 rounded-3xl hover:bg-lime-500 min-w-14 cursor-pointer'>
          <Flag />
          follow
        </Button>
      </CardFooter>
    </Card>
  )
}
