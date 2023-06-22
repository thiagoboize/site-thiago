import Label from "../Label"
import Title from "../Title"
import HtmlIcon from "../Images/htmlIcon"
import CssIcon from "../Images/cssIcon"
import JavascriptIcon from "../Images/javascriptIcon"
import TypescripIcon from "../Images/typescripIcon"
import TailwindIcon from "../Images/tailwindIcon"
import StyledComponentsIcon from "../Images/styledComponentsIcon"
import NextIcon from "../Images/nextIcon"
import ReactIcon from "../Images/reactIcon"
import NodeIcon from "../Images/nodeIcon"
import ExpressIcon from "../Images/expressIcon"
import MongoIcon from "../Images/mongoIcon"
import PostgresIcon from "../Images/postgres"
import DockerIcon from "../Images/dockerIcon"
import LinuxIcon from "../Images/linuxIcon"
import GithubIcon from "../Images/githubIcon"
import JestIcon from "../Images/jestIcon"

const frontTechnologies = [
    { title: "html5", experience: "2 anos", icon: <HtmlIcon /> },
    { title: "css3", experience: "2 anos", icon: <CssIcon /> },
    { title: "javascript", experience: "2 anos", icon: <JavascriptIcon /> },
    { title: "typescript", experience: "2 anos", icon: <TypescripIcon /> },
    { title: "tailwindcss", experience: "2 anos", icon: <TailwindIcon /> },
    { title: "styled components", experience: "2 anos", icon: <StyledComponentsIcon /> },
    { title: "nextjs", experience: "2 anos", icon: <NextIcon /> },
    { title: "reactjs", experience: "2 anos", icon: <ReactIcon /> },
]

const backendTechnologies = [
    { title: "nodejs", experience: "2 anos", icon: <NodeIcon /> },
    { title: "express", experience: "2 anos", icon: <ExpressIcon /> },
    { title: "mongodb", experience: "2 anos", icon: <MongoIcon /> },
    { title: "postgresql", experience: "2 anos", icon: <PostgresIcon /> },
    { title: "docker", experience: "2 anos", icon: <DockerIcon /> },
    { title: "linux", experience: "2 anos", icon: <LinuxIcon /> },
    { title: "github", experience: "2 anos", icon: <GithubIcon /> },
    { title: "Jest", experience: "2 anos", icon: <JestIcon /> },

]



const Tecnologies = () => {
    return (
        <div className="w-full max-w-5xl flex flex-col py-4 gap-y-4 justify-center items-center">
            <div className="w-full flex flex-col justify-center items-center">
                <Title configs={{ width: "w-fit" }} >Habilidades e Tecnologias</Title>
                <Label>Abaixo algumas das tecnologias que uso no dia a dia</Label>
            </div>
            <div className="w-full flex flex-col gap-y-4 ">
                <h2 className="text-transparent text-2xl font-semibold  bg-clip-text bg-gradient-to-br from-[#00FEFC] to-[#13BB15]">Frontend</h2>
                <div className="w-full grid grid-cols-4 gap-4">
                    {frontTechnologies.map((item) => {
                        return (
                            <div key={item.title} className=" transition-all w-full flex justify-center items-center rounded-lg p-4 gap-x-2 bg-gray-first hover:scale-95">
                                <div className="w-11 h-11">
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="uppercase font-semibold text-sm" >{item.title}</h3>
                                    <span>Experiência: {item.experience}</span>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="w-full flex flex-col gap-y-4 ">
                <h2 className="text-transparent text-2xl font-semibold  bg-clip-text bg-gradient-to-br from-[#00FEFC] to-[#13BB15]">Backend</h2>
                <div className="w-full grid grid-cols-4 gap-4">
                    {backendTechnologies.map((item) => {
                        return (
                            <div key={item.title} className=" transition-all w-full flex justify-center items-center rounded-lg p-4 gap-x-2 bg-gray-first hover:scale-95">
                                <div className="w-11 h-11">
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="uppercase font-semibold text-sm" >{item.title}</h3>
                                    <span>Experiência: {item.experience}</span>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}



export default Tecnologies