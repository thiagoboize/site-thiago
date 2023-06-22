"use client"
import React from 'react';
import Button from '../Button';
import { FileArrowDown } from '@phosphor-icons/react';
import Lottie  from "lottie-react";
import CodeAnimation from "../../../public/code.json";

const Header = () => {
    return (
        <div className='w-full flex flex-col justify-center items-center gap-y-4 min-h-[80vh] p-6'>
            <div className='w-full flex flex-col justify-center items-center gap-y-2'>
                <span className='text-2xl'>Olá, meu nome é Thiago sou um</span>
                <h1 className='text-5xl font-semibold text-transparent  bg-clip-text bg-gradient-to-br from-[#00FEFC] to-[#13BB15] p-1'>Desenvolvedor FullStack</h1>
                <Button>Currículo <FileArrowDown size={20} /></Button>
            </div>
            <Lottie className='w-96' animationData={CodeAnimation} />
        </div>
    );
}

export default Header;