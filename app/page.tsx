import Image from 'next/image'
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <main className="w-full h-full max-w-5xl flex justify-center items-center ">
      <Navbar />
    </main>
  )
}
