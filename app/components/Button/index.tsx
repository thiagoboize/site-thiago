import React, { ButtonHTMLAttributes } from 'react';



interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> { }

const Button = (props: IProps) => {
    return (
        <button {...props} className=' transition-all px-4 py-2 bg-gray-first rounded-md hover:scale-105 flex text-sm  justify-center items-center gap-x-1'>
            {props.children}
        </button>
    );
}

export default Button;