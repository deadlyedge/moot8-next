"use client"

import { useTheme } from "next-themes"
import { RadioGroup, RadioGroupItem } from "../ui/radio-group"
import { Label } from "../ui/label"

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme()

  return (
    <RadioGroup
      defaultValue={theme}
      onValueChange={setTheme}
      className='flex items-center gap-2'>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='dark' id='dark' />
        <Label htmlFor='dark'>dark</Label>
      </div>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='light' id='light' />
        <Label htmlFor='light'>light</Label>
      </div>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='system' id='system' />
        <Label htmlFor='system'>system</Label>
      </div>
    </RadioGroup>
  )
}
