import { Input } from "../ui/input";

export default function SearchBar() {
  return (
    <div className="flex items-center justify-center">
      <Input placeholder="Search" className="w-96 border-white" />
    </div>
  )
}