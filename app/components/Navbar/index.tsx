"use client"
import { Code } from '@phosphor-icons/react';
import React from 'react';
import Link from "next/link";

const Navbar = () => {
    return (
        <div className='w-full max-w-5xl py-4 flex justify-between items-center'>
            <div className='flex justify-center items-center gap-2 '>
                <div className='bg-white rounded-md p-2'>
                    <Code className=' text-[#383838]' weight='bold' size={18} />
                </div>
                <span className='font-semibold text-lg'>Thiago Boize</span>
            </div>
            <div className='flex justify-center items-center gap-x-4'>
                <Link href={'#anchor'}>Home</Link>
                <Link href={'#anchor'}>Sobre</Link>
                <Link href={'#anchor'}>Projetos</Link>
                <Link href={'#anchor'}>Blog</Link>
            </div>
            <button className=' transition-all font-semibold text-transparent  bg-clip-text bg-gradient-to-br from-[#00FEFC] to-[#13BB15] p-1 hover:scale-105' >
              Contate-me
            </button>
        </div>
    );
}

export default Navbar;