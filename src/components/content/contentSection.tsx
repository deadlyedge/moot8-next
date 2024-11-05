import WordCard from "./card"

export default function ContentSection() {
  return (
    <div className='max-w-2xl mx-auto mt-16 shadow-md flex flex-col gap-2'>
      <WordCard />
      <WordCard />
      <WordCard />
    </div>
  )
}
