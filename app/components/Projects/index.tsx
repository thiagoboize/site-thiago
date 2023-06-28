"use client"
import Label from "../Label"
import SliderComponent from "../SliderComponent"
import Title from "../Title"


const Projects = () => {
    return (
        <div id="projetos" className="w-full flex justify-center bg-darken py-4 my-4">
            <div className="w-full max-w-5xl flex flex-col items-center gap-y-4 px-4 py-6">
                <div className="w-full flex flex-col justify-center items-center">
                    <Title configs={{ width: "w-fit" }} >Meus Projetos</Title>
                    <Label>Lorem, ipsum dolor sit amet consectetur adipisicing elit</Label>
                </div>
                <SliderComponent />
            </div>
        </div>
    )
}


export default Projects