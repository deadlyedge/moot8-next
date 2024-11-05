import Image from "next/image"

export default function Menu() {
  return (
    <div>
      <Image
        className='shadow-lg border-white border-2'
        src='/full-name-logo.png'
        alt='logo'
        width={150}
        height={32}
      />
    </div>
  )
}
