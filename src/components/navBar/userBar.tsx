import { CircleUserRound, DiamondPlus } from "lucide-react"
import Link from "next/link"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip"
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"

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
      <SignedOut>
        {/* <SignInButton /> */}
        <SignInButton mode='modal'>
          <CircleUserRound className='w-8 h-8 ml-2' />
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  )
}
