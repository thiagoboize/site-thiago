import React, { useState } from "react"
import "../../keenSlider.css"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Title from "../Title"
import Description from "../Description"
import RifejaImg from "../../../public/assets/rifeja-image.png"
import Image from "next/image"
import Button from "../Button"
import { ArrowRight, CheckCircle } from "@phosphor-icons/react"

export default function SliderComponent() {
    const [currentSlide, setCurrentSlide] = React.useState(0)
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        initial: 0,
        loop: true,
        slideChanged(slider) {
            if ([...Array(slider.track.details.rel)].length > 1) {
                setCurrentSlide(slider.track.details.rel)
            }
        },
        created(s) {
            setLoaded(true)
        },
    },
        [
            (slider) => {
                let timeout: ReturnType<typeof setTimeout>
                let mouseOver = false
                function clearNextTimeout() {
                    clearTimeout(timeout)
                }
                function nextTimeout() {
                    clearTimeout(timeout)
                    if (mouseOver) return
                    timeout = setTimeout(() => {
                        slider.next()
                    }, 5000)
                }
                slider.on("created", () => {

                    if ([...Array(slider.track.details.rel)].length > 1) {

                        slider.container.addEventListener("mouseover", () => {
                            mouseOver = true
                            clearNextTimeout()
                        })
                        slider.container.addEventListener("mouseout", () => {
                            mouseOver = false
                            nextTimeout()
                        })
                        nextTimeout()
                    }
                })
                slider.on("dragStarted", clearNextTimeout)
                slider.on("animationEnded", nextTimeout)
                slider.on("updated", nextTimeout)
            },
        ]

    )

    return (
        <>
            <div className="navigation-wrapper w-full">
                <div ref={sliderRef} className="keen-slider">
                    <div className="keen-slider__slide w-full h-full flex max-md:flex-col-reverse gap-4 justify-center items-center ">
                        <div className="w-full h-full flex flex-col gap-y-4 justify-center items-center">
                            <Title>Plataforma Rifeja</Title>
                            <Description>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum expedita vitae asperiores obcaecati enim maiores laborum dolores dicta? Consectetur, accusamus nostrum cumque consequuntur iusto quis ipsum nihil iure repellat sed.</Description>
                            <div className="w-full flex gap-x-2">
                                <div className="px-4 py-2 bg-gradient-to-br  from-[#00FEFC] to-[#13BB15] rounded-md">
                                    <span className="text-black text-sm flex items-center gap-x-1">Concluído <CheckCircle size={18} /> </span>
                                </div>
                                <Button>Conheça <ArrowRight size={18} /></Button>
                            </div>
                        </div>
                        <div className="w-full h-full flex justify-center items-center">
                            <Image src={RifejaImg} alt="Imagem da plataforma de rifas Rifeja" />
                        </div>
                    </div>
                    <div className="keen-slider__slide w-full h-44 bg-blue-500 ">2</div>

                    {/* <div className="keen-slider__slide number-slide2">2</div>
                    <div className="keen-slider__slide number-slide3">3</div>
                    <div className="keen-slider__slide number-slide4">4</div>
                    <div className="keen-slider__slide number-slide5">5</div>
                    <div className="keen-slider__slide number-slide6">6</div> */}
                </div>

            </div>
            {loaded && instanceRef.current && (

                <div className="dots">
                    {[
                        ...Array(instanceRef.current.track.details.slides.length).keys(),
                    ].map((idx) => {

                        return (
                            <button
                                key={idx}
                                onClick={() => {
                                    instanceRef.current?.moveToIdx(idx)
                                }}
                                className={"dot" + (currentSlide === idx ? " active" : "")}
                            ></button>
                        )
                    })}
                </div >
            )
            }
        </>
    )
}


