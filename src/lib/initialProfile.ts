import { auth, currentUser } from "@clerk/nextjs/server"
// import { RedirectToSignIn } from "@clerk/nextjs"

import { db } from "@/lib/db"
import { redirect } from "next/navigation"

export const initialProfile = async () => {
  const user = await currentUser()
  if (!user) return redirect('/') 

  const profile = await db.profile.findUnique({
    where: {
      userId: user.id,
    },
  })

  if (profile) return profile

  const newProfile = await db.profile.create({
    data: {
      userId: user.id,
      userName: `${user.fullName}`,
      email: user.emailAddresses[0].emailAddress,
      imageUrl: user.imageUrl,
    },
  })

  console.log("profile initialed.")

  return newProfile
}
