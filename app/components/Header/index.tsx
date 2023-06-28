"use client"
import React from 'react';
import Button from '../Button';
import { FileArrowDown } from '@phosphor-icons/react';
import Lottie from "lottie-react";
import CodeAnimation from "../../../public/code.json";

const Header = () => {
    return (
        <div id='home' className='w-full max-w-5xl flex flex-col max-md:flex-col-reverse justify-center items-center gap-y-4 min-h-[100vh] p-6'>
            <div className='w-full flex flex-col justify-center items-center max-[366px]:items-start gap-y-2'>
                <span className='text-2xl max-md:text-lg max-sm:text-base max-[366px]:text-sm'>Olá, meu nome é Thiago sou um</span>
                <h1 className='text-5xl max-md:text-3xl max-sm:text-xl font-semibold text-transparent  bg-clip-text bg-gradient-to-br from-[#00FEFC] to-[#13BB15] p-1'>Desenvolvedor FullStack</h1>
                <Button>Currículo <FileArrowDown size={20} /></Button>
            </div>
            <Lottie className='w-96 h-80' animationData={CodeAnimation} />
        </div>
    );
}

export default Header;