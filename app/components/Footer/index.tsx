"use client"
import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react"
import AvatarImage from "../Images/avatar"
import Title from "../Title"

const Footer = () => {
    return (
        <div id="contato" className="w-full flex justify-center items-center bg-darken min-h-[40vh]">
            <div className="flex p-2 max-[560px]:flex-col max-[560px]:gap-y-2 justify-center gap-x-2 items-center">
                <AvatarImage />
                <div className="w-full flex flex-col justify-center items-centers">
                    <Title>Thiago Boize</Title>
                    <span className="max-[560px]:text-sm "><strong>Email:</strong> thiagoboize@gmail.com</span>
                    <span className="max-[560px]:text-sm "><strong>Telefone</strong> (41) 99753-9207</span>
                    <div className="flex max-[560px]:flex-col max-[560px]:gap-y-4 max-[560px]:items-start items-center gap-x-4">
                        <div className=" flex items-center gap-x-2">
                            <div className=" w-fit p-2 rounded-full bg-gray-600 ">
                                <GithubLogo size={28} />
                            </div>
                            <span className="text-sm">@thiagoboize</span>
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