import { TooltipProvider } from "../ui/tooltip"
import Menu from "./menu"
import SearchBar from "./searchBar"
import UserBar from "./userBar"

export default function NavBar() {
  return (
    <div className='w-full fixed h-14 top-0 z-10 bg-purple-900/90 flex items-center justify-between p-2'>
      <TooltipProvider>
        <Menu />
        <SearchBar />
        <UserBar />
      </TooltipProvider>
    </div>
  )
}
