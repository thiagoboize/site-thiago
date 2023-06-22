import Description from "../Description";
import Title from "../Title";


const About = () => {
    return (
        <div className="w-full  bg-darken h-96 flex flex-col justify-center items-center  ">
            <div className="w-full max-w-5xl flex flex-col gap-y-2  justify-center items-center p-4 ">
                <Title>Sobre mim</Title>
                <Description>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </Description>

            </div>
            <div className="w-full max-w-5xl flex justify-center items-center relative h-3">
                <div className="w-full max-w-5xl absolute -bottom-52 left-0 h-36 bg-gray-bg rounded-md flex flex-col justify-center items-center p-4">
                    <Title configs={{ width: "w-fit" }}>Experiência</Title>
                </div>
            </div>

        </div>
    )
}

export default About;