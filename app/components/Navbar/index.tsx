"use client"
import { Code } from '@phosphor-icons/react';
import React from 'react';
import Link from "next/link";

const Navbar = () => {
    return (
        <div className='w-full flex justify-center items-center sticky top-0 z-40 bg-gray-bg'>

            <div className='w-full max-w-5xl p-4 max-lg:px-4 max-md:hidden flex justify-between items-center'>
                <div className='flex justify-center items-center gap-2 '>
                    <div className='bg-white rounded-md p-2'>
                        <Code className=' text-[#383838]' weight='bold' size={18} />
                    </div>
                    <span className='font-semibold text-lg'>Thiago Boize</span>
                </div>
                <div className='flex justify-center items-center gap-x-4'>
                    <Link href={'#home'}>Home</Link>
                    <Link href={'#about'} scroll={false} >Sobre</Link>
                    <Link href={'#habilidades'} scroll={false} >Habilidades</Link>
                    <Link href={'#projetos'} scroll={false}>Projetos</Link>
                </div>
                <Link href={'#contato'} className=' transition-all font-semibold text-transparent  bg-clip-text bg-gradient-to-br from-[#00FEFC] to-[#13BB15] p-1 hover:scale-105' >
                    Contate-me
                </Link>
            </div>
        </div>
    );
}

export default Navbar;