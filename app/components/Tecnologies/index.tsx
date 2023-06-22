import Label from "../Label"
import Title from "../Title"


const Tecnologies = () => {
    return (
        <div className="w-full max-w-5xl flex flex-col  justify-center items-center">
            <div className="w-full flex flex-col justify-center items-center">
                <Title configs={{ width: "w-fit" }} >Habilidades e Tecnologias</Title>
                <Label>Abaixo algumas das tecnologias que uso no dia a dia</Label>
            </div>
            <div className="w-full flex flex-col ">
            <h2 className="font-semibold text-transparent  bg-clip-text bg-gradient-to-br from-[#00FEFC] to-[#13BB15]">Frontend</h2>
            </div>
        </div>
    )
}



export default Tecnologies