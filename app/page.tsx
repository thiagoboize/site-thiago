import Image from 'next/image'
import Navbar from './components/Navbar'
import Header from './components/Header'

export default function Home() {
  return (
    <main className="w-full h-full max-w-5xl flex flex-col gap-y-4 justify-center items-center ">
      <Navbar />
      <Header />
    </main>
  )
}
