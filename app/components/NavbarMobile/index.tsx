"use client"
import { Code, List, X } from "@phosphor-icons/react"
import { useState } from "react"
import Link from "next/link"


const NavbarMobile = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className="w-full hidden max-md:flex h-16 justify-between items-center px-4 bg-gray-bg sticky z-10 top-0 ">
            <div className='flex justify-center items-center gap-2 '>
                <div className='bg-white rounded-md p-2'>
                    <Code className=' text-[#383838]' weight='bold' size={18} />
                </div>
                <span className='font-semibold text-lg '>Thiago Boize</span>
            </div>
            <button onClick={() => setOpen(!open)} className="flex justify-center items-center ">
                <List size={18} />
            </button>
            {open ? (
                <div className=" transition-all w-full flex flex-col gap-y-6 justify-center p-4 items-center bg-gray-bg shadow absolute top-0 left-0  z-10">
                    <div className="w-full flex justify-between items-center">
                        <div className='bg-white rounded-md p-2'>
                            <Code className=' text-[#383838]' weight='bold' size={18} />
                        </div>
                        <button onClick={() => setOpen(!open)}>
                            <X />
                        </button>
                    </div>
                    <div className=' w-full flex flex-col justify-center items-center gap-x-4'>
                        <div className="w-full flex justify-start items-center border-b border-b-gray-first p-2">
                            <Link onClick={() => { setOpen(!open) }} className="px-4 py-2 hover:bg-gray-first rounded-md" href={'#home'} scroll={false}>Início</Link>
                        </div>
                        <div className="w-full flex justify-start items-center border-b border-b-gray-first p-2">
                            <Link onClick={() => { setOpen(!open) }} className="px-4 py-2 hover:bg-gray-first rounded-md" href={'#about'} scroll={false}>Sobre</Link>
                        </div>
                        <div className="w-full flex justify-start items-center border-b border-b-gray-first p-2">
                            <Link onClick={() => { setOpen(!open) }} className="px-4 py-2 hover:bg-gray-first rounded-md" href={'#habilidades'} scroll={false}>habilidades</Link>
                        </div>
                        <div className="w-full flex justify-start items-center border-b border-b-gray-first p-2">
                            <Link onClick={() => { setOpen(!open) }} className="px-4 py-2 hover:bg-gray-first rounded-md" href={'#projetos'} scroll={false}>Projetos</Link>
                        </div>
                    </div>
                    <div className="w-full  flex justify-start items-center p-4">
                        <Link onClick={() => { setOpen(!open) }} href={"#contato"} scroll={false} className=' transition-all font-semibold text-transparent  bg-clip-text bg-gradient-to-br from-[#00FEFC] to-[#13BB15] p-1 hover:scale-105' >
                            Contate-me
                        </Link>
                    </div>
                </div>
            ) : null}
        </div>
    )
}

export default NavbarMobile