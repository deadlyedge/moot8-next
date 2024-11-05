import { CircleUserRound, DiamondPlus } from "lucide-react"
import Link from "next/link"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip"

export default function UserBar() {
  return (
    <div className='flex items-center justify-center'>
        <Tooltip>
          <TooltipTrigger>
            <Link href='/addword'>
              <DiamondPlus className='w-8 h-8 ml-2' />
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>Add Your Word</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger>
            <Link href='/user'>
              <CircleUserRound className='w-8 h-8 ml-2' />
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>Sign In</p>
          </TooltipContent>
        </Tooltip>
    </div>
  )
}
