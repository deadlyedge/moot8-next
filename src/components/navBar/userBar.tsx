import { CircleUserRound, DiamondPlus } from "lucide-react"
import Link from "next/link"
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip"
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"
import { initialProfile } from "@/lib/initialProfile"
import { currentUser } from "@clerk/nextjs/server"
import { cn } from "@/lib/utils"

export default async function UserBar() {
  const user = await currentUser()

  if (user) {
    await initialProfile()
  }

  return (
    <div className='flex items-center justify-center gap-1'>
      <div className='flex items-center justify-center'>
        <Tooltip>
          <TooltipTrigger>
            {user ? (
              <Link href='/addword'>
                <DiamondPlus className='w-8 h-8 ml-2' />
              </Link>
            ) : (
              <Link href='/sign-in'>
                <DiamondPlus className='w-8 h-8 ml-2 text-white/20' />
              </Link>
            )}
          </TooltipTrigger>
          <TooltipContent>
            <p>Add Your Word</p>
          </TooltipContent>
        </Tooltip>
      </div>
      <div className='flex items-center justify-center cursor-pointer'>
        <SignedOut>
          <SignInButton mode='modal'>
            <CircleUserRound className='w-8 h-8' />
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton
            appearance={{
              elements: {
                userButtonAvatarBox: "w-8 h-8",
              },
            }}
          />
        </SignedIn>
      </div>
    </div>
  )
}
