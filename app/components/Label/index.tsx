import { HtmlHTMLAttributes } from "react"

interface IProps extends HtmlHTMLAttributes<HTMLSpanElement> { }


const Label = (props: IProps) => {
    return (
        <span
            {...props}
            className="max-md:text-xs"
        >
            {props.children}
        </span>
    )
}

export default Label