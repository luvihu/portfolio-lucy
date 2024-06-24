"use client"
import { motionTransitionsAbout } from "@/utils/motionTransitions";
import { Avatar } from "../Avatar";
import { motion } from 'framer-motion'
import { dataAboutSkills } from "./About.data";
import { useState } from "react";
import { BiDownArrow, BiLeftArrow } from "react-icons/bi";

export function About() {
    const [index, setIndex] = useState(0)

    return (
        <div className="min-h-screen px-6 mx-6 md:mt-4 md:flex md:max-w-5xl items-center">
            <Avatar />

            <motion.div
                initial={motionTransitionsAbout.initial}
                animate={motionTransitionsAbout.animate}
                transition={motionTransitionsAbout.transition}
                className="md:ml-4"
            >
                <h1 className="mb-2 md:text-xl mt-7"><br /></h1>
                 <p className="mb-6">Acerca de mí: <br/>Soy Licenciada en Economía, sin embargo, siempre sentí gran interés y admiración por la programación, lo cual me impulsó a 
                    adentrarme en el mundo de la tecnología, luego de un buen tiempo siendo autodidacta decidí afianzar mis conocimientos en 
                    el bootcamp Henry donde me gradué luego de mas de +800hs de aprendizaje.
                    Mi experiencia en las ciencias económicas aporta una perspectiva versátil para abordar desafíos, y estoy emocionada por seguir 
                    creciendo y enfrentar nuevos proyectos tecnológicos, siempre abierta a colaboraciones y aprendizaje en equipo.
                    Estoy en constante estudio, me gusta aprender nuevas tecnologías y mejorar las que ya conozco, creo que lo más hermoso 
                    de este campo es que está en constante evolución y siempre hay algo más que aprender, es por ello que puedo contribuir 
                    significativamente en cualquier entorno.
                    </p>
               
               
                <div className="flex flex-col mb-3 md:flex-row justify-between md:mt-3 md:mb-2">
                    {dataAboutSkills.map((dataText, itemIndex) => {
                        const { id, text } = dataText;

                        return (
                            <div key={id}
                                className={`${index === id ? 'text-secondary duration-300 transition-all border-secondary' : 'border-white'} 
                                        cursor-pointer md:text-lg relative px-2 md:px-8 py-2 border-2 rounded-xl flex justify-between items-center my-3`}
                                onClick={() => setIndex(itemIndex)}
                            >
                                <p className="mr-2 md:text-lg">{text}</p>
                                {index === id ? (
                                    <BiDownArrow />
                                ) : (
                                    <BiLeftArrow />
                                )}
                            </div>
                        )
                    })}
                </div>
                <div className="max-w-6xl p-2 mx-auto bg-secondary/20 rounded-xl">
                    {dataAboutSkills[index].skills.map((items, index) => (
                        <div key={index} className="flex justify-start max-w-md gap-4 mx-auto">
                            <span>{items.title}</span>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    )
}
