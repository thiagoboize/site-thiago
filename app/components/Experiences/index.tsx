import Description from "../Description"
import Title from "../Title"


const Experiences = () => {
    return (
        <div className="w-full flex justify-center ">
            <div className="w-full max-w-5xl bg-gray-bg shadow rounded-md flex flex-col justify-center items-center p-4 -translate-y-16">
                <Title configs={{ width: "w-fit" }}>Experiência</Title>
                <div className="w-full  grid grid-cols-2 p-6">
                    <div className="w-full flex flex-col p-4">
                        <div className="w-full flex flex-col p-2 border-l-2 border-white relative">
                            <div className="w-5 h-5 rounded-full bg-white absolute -top-3 -left-3" />
                            <Title>Desenvolvimento Frontend</Title>
                            <Description>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</Description>
                        </div>
                        <div className="w-full flex flex-col p-2 border-l-2 border-white relative">
                            <div className="w-5 h-5 rounded-full bg-white absolute -top-3 -left-3" />
                            <Title>Desenvolvimento Frontend</Title>
                            <Description>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</Description>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Experiences