import Image from 'next/image'
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Experiences from './components/Experiences'

export default function Home() {
  return (
    <main className="w-full h-full m flex flex-col gap-y-4 justify-center items-center ">
      <Navbar />
      <Header />
      <About />
      <Experiences />

    </main>
  )
}
