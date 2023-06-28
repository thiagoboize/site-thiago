import Description from "../Description";
import Experiences from "../Experiences";
import Title from "../Title";


const About = () => {
    return (
        <div id="about" className="w-full  bg-darken  flex flex-col justify-center items-center h-[30rem]">
            <div className="max-w-5xl w-full h-full flex flex-col justify-center items-center gap-y-4 relative ">
                <div className="w-full  flex flex-col gap-y-2  justify-center items-center p-4  ">
                    <Title>Sobre mim</Title>
                    <Description>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </Description>
                </div>
            </div>
        </div>
    )
}

export default About;