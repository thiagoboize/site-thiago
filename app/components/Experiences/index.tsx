import Description from "../Description"
import Computer from "../Images/computer"
import Title from "../Title"


const Experiences = () => {
    return (
        <div  className="w-full flex max-md:flex-col justify-center ">
            <div className="w-full max-w-5xl bg-gray-bg shadow-md rounded-md flex flex-col justify-center items-center p-4 -translate-y-16">
                <Title configs={{ width: "w-fit" }}>Experiência</Title>
                <div className="w-full  grid grid-cols-2 max-md:grid-cols-1 max-md:gap-6 p-6">
                    <div className="w-full flex flex-col p-4 max-md:p-0">
                        <div className="w-full flex flex-col p-4 max-md:p-2 border-l-[1px] border-white relative">
                            <div className="w-4 h-4 rounded-full bg-white absolute -top-4 -left-2" />
                            <Title>Desenvolvimento Frontend</Title>
                            <Description>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</Description>
                        </div>
                        <div className="w-full flex flex-col p-4 max-md:p-2 border-l-[1px] border-white relative">
                            <div className="w-4 h-4 rounded-full bg-white absolute -top-4 -left-2" />
                            <Title>Desenvolvimento Backend</Title>
                            <Description>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</Description>
                        </div>
                    </div>
                    <div className="w-full flex justify-center items-center">
                        <Computer />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Experiences