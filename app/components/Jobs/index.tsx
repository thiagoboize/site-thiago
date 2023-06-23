"use client"
import { Monitor } from "@phosphor-icons/react"
import Label from "../Label"
import Title from "../Title"



const Jobs = () => {
    return (
        <div className="w-full max-w-5xl  p-4  my-5 flex flex-col items-center gap-y-4">
            <div className="w-full  flex flex-col items-center">
                <Title configs={{ width: "w-fit" }}>Entre em contato</Title>
                <Label>Se você  ou sua empresa precisam de trabalhos como:</Label>
            </div>
            <div className="w-full grid grid-cols-3 gap-x-4">
                <div className="w-full flex flex-col gap-y-4 h-56 bg-gray-600 p-4 rounded-lg">
                    <div>
                        <Monitor size={40} />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Jobs