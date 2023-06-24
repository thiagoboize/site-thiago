"use client"
import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react"
import AvatarImage from "../Images/avatar"
import Title from "../Title"

const Footer = () => {
    return (
        <div className="w-full  flex justify-center items-center bg-darken h-[40vh]">
            <div className="flex  justify-center gap-x-2 items-center">
                <AvatarImage />
                <div className="w-full flex flex-col justify-center items-centers">
                    <Title>Thiago Boize</Title>
                    <span><strong>Email:</strong> thiagoboize@gmail.com</span>
                    <span><strong>Telefone</strong> (41) 99753-9207</span>
                    <div className="flex items-center gap-x-4">
                        <div className=" flex items-center gap-x-2">
                            <div className=" w-fit p-2 rounded-full bg-gray-600 ">
                                <GithubLogo size={28} />
                            </div>
                            <span>@thiagoboize</span>
                        </div>
                        <div className=" flex items-center gap-x-2">
                            <div className=" w-fit p-2 rounded-full bg-gray-600 ">
                                <LinkedinLogo size={28} />
                            </div>
                            <span>@thiagoboize</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer