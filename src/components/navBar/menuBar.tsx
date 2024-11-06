import Image from "next/image"
import { CircleEllipsis, Menu } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import { Switch } from "../ui/switch"
import { Label } from "../ui/label"
import { Checkbox } from "../ui/checkbox"
import Link from "next/link"
import { Separator } from "../ui/separator"

export default function MenuBar() {
  return (
    <div className='flex items-center gap-2'>
      <Link href='/'>
        <Image
          className='hidden sm:block shadow-lg border-white border-2'
          src='/logo_with_name.png'
          alt='logo_with_name'
          width={150}
          height={32}
        />
        <Image
          className='block sm:hidden shadow-lg border-white border-2'
          src='/logo.png'
          alt='logo'
          width={40}
          height={40}
        />
      </Link>
      {/* <Popover>
        <PopoverTrigger className='h-8'>
          <Menu className='w-8 h-8' />
        </PopoverTrigger>
        <PopoverContent className='flex flex-col items-center justify-start gap-2 w-40'>
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
        </PopoverContent>
      </Popover> */}
    </div>
  )
}
