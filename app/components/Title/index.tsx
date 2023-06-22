import { HTMLAttributes, HtmlHTMLAttributes } from "react";

type TitleType = {
    width: "w-fit"
}


interface IProps extends HtmlHTMLAttributes<HTMLHeadElement> {
    configs?: TitleType
}


const Title = (props: IProps) => {
    return (
        <h1 {...props}
            className={` ${props.configs || "w-full"}  text-2xl font-semibold `}
        >
            {props.children}
        </h1>
    )
}

export default Title;