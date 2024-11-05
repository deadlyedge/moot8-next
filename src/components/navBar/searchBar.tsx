import { CircleEllipsis } from "lucide-react"
import { Input } from "../ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip"
import { Switch } from "../ui/switch"
import { Label } from "../ui/label"
import { Checkbox } from "../ui/checkbox"

export default function SearchBar() {
  return (
    <div className='flex items-center justify-center'>
      <Input
        placeholder='Search'
        className='w-56 h-10 text-lg sm:w-80 border-white border-2'
      />
      <Popover>
        <PopoverTrigger className='h-8'>
          <CircleEllipsis className='w-8 h-8 ml-2' />
          {/* <p>Filters</p> */}
        </PopoverTrigger>
        <PopoverContent className='flex flex-col items-center justify-start gap-2'>
          <div className='flex items-center gap-2'>
            <Switch id='nsfw-content' />
            <Label htmlFor='nsfw-content'>NSFW Content</Label>
          </div>
          <div className='flex items-center gap-2'>
            <Checkbox id='cat-1' />
            <Label htmlFor='cat-1'>Cataglory-1</Label>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}
