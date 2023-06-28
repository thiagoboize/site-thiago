"use client"
import { Gear, GitBranch, Monitor } from "@phosphor-icons/react"
import Label from "../Label"
import Title from "../Title"
import Description from "../Description"



const Jobs = () => {
    return (
        <div className="w-full max-w-5xl  p-4 flex flex-col min-h-[80vh] items-center justify-center gap-y-4">
            <div className="w-full  flex flex-col items-center justify-center">
                <Title configs={{ width: "w-fit" }}>Entre em contato</Title>
                <Label>Se você  ou sua empresa precisam de trabalhos como:</Label>
            </div>
            <div className="w-full grid grid-cols-3 max-md:grid-cols-2 max-[500px]:grid-cols-1 gap-x-4 max-md:gap-y-4 ">
                <div className=" transition-all w-full flex flex-col justify-center gap-y-4 bg-gray-600 p-4 rounded-lg hover:scale-95 ">
                    <div className=" p-4 max-md:p-2 bg-gray-500 w-fit rounded-md">
                        <Monitor size={36} />
                    </div>
                    <div>
                        <h1 className="text-xl max-lg:text-lg font-semibold">Web Apps</h1>
                        <Description>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</Description>
                    </div>
                </div>
                <div className=" transition-all w-full flex flex-col justify-center gap-y-4 bg-gray-600 p-4 rounded-lg hover:scale-95">
                    <div className=" p-4 max-md:p-2 bg-gray-500 w-fit rounded-md">
                        <GitBranch size={32} />
                    </div>
                    <div>
                        <h1 className="text-xl max-lg:text-lg font-semibold">APIs Rest</h1>
                        <Description>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</Description>
                    </div>
                </div>
                <div className=" transition-all w-full flex flex-col justifyt-center gap-y-4 bg-gray-600 p-4 rounded-lg hover:scale-95">
                    <div className=" p-4 max-md:p-2 bg-gray-500 w-fit rounded-md">
                        <Gear size={36} />
                    </div>
                    <div>
                        <h1 className="text-xl max-lg:text-lg font-semibold">Manutenção de sistemas</h1>
                        <Description>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</Description>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Jobs