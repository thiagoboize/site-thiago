import { HtmlHTMLAttributes } from "react"


interface IProps extends HtmlHTMLAttributes<HTMLParagraphElement> { }

const Description = (props: IProps) => {
    return (
        <p
            {...props}
            className="text-base"
        >
            {props.children}
        </p>
    )
}


export default Description