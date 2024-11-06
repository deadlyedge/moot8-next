import { CircleEllipsis } from "lucide-react"
import { Input } from "../ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip"
import { Switch } from "../ui/switch"
import { Label } from "../ui/label"
import { Checkbox } from "../ui/checkbox"
import Link from "next/link"
import { Separator } from "../ui/separator"

export default function SearchBar() {
  return (
    <div className='flex items-center justify-center'>
      <Input
        placeholder='Search'
        className='w-40 h-10 text-lg sm:w-80 border-white border-2'
      />
      <Popover>
        <PopoverTrigger className='h-8'>
          <div className='flex items-center justify-center mx-2'>
            <span className='hidden sm:block'>&</span>
            <span>
              <CircleEllipsis className='w-8 h-8 mx-1' />
            </span>
            <span className='hidden sm:block'>more</span>
            {/* <p>Filters</p> */}
          </div>
        </PopoverTrigger>
        <PopoverContent className='flex flex-col items-center justify-start gap-2 w-52'>
          <div className='flex items-center gap-2'>
            <Switch id='nsfw-content' />
            <Label htmlFor='nsfw-content'>NSFW Content</Label>
          </div>
          <div className='flex items-center gap-2'>
            <ul>
              <li className='my-2'>
                <Link href='/'>Home</Link>
              </li>
              <Separator />
              <li className='my-2'>
                <Link href='/'>Movies</Link>
              </li>
              <Separator />
              <li className='my-2'>
                <Link href='/'>Store</Link>
              </li>
              <Separator />
              <li className='my-2'>
                <Link href='/'>Developers</Link>
              </li>
            </ul>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}
