import { HtmlHTMLAttributes } from "react"

interface IProps extends HtmlHTMLAttributes<HTMLSpanElement> { }


const Label = (props: IProps) => {
    return (
        <span
            {...props}
        >
            {props.children}
        </span>
    )
}

export default Label