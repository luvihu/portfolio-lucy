
"use client"
import { fadeIn } from "@/utils/motionTransitions"
import { motion } from 'framer-motion'
import { cardContent } from "./Projects.data"
import { useState } from "react";
import { BiRightArrow } from "react-icons/bi";
import { FaCreditCard } from "react-icons/fa";
import { SiGithub } from "react-icons/si"

export function Projects() {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

    const handleClick = (index: number) => {
       
        setExpandedIndex((prevIndex) => (prevIndex === index ? null : index))
    }

    const cardVariants = {
        expanded: {
            width: "600px",
            opacity: 1
        },
        collapsed: {
            width: "450px",
            opacity: 0.6,
            marginRight: "50px",
            marginBottom: "30px"
        }
    }

    return (
        <div className="h-screen">
                        
            <div className="grid pb-32 md:min-h-screen place-items-center">
                <div>
                    <motion.h1
                        variants={fadeIn('left', 0.5)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="mt-32 text-2xl text-center md:text-4-xl "
                    >Mis <span className="text-secondary">proyectos</span>
                    </motion.h1>
                    <motion.div
                        className="flex justify-center items-center h-full gap-10 px-2 md:flex-row flex-wrap"
                        variants={fadeIn('up', 0.5)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                    >
                        {cardContent.map(({ id, title, imageUrl, description, skills, demo, github }) => (
                            <motion.div key={id}
                                className={`card cursor-pointer h-[412px] bg-auto bg-no-repeat bg-center rounded-[20px] ${id === expandedIndex && 'expanded'}`}
                                initial={{ opacity: 1 }}
                                variants={cardVariants}
                                animate={id === expandedIndex ? 'expanded' : 'collapsed'}
                                exit={{
                                    opacity: 1
                                }}
                                transition={{ duration: 0.5 }}
                                onClick={() => handleClick(id)}
                                style={{
                                    backgroundImage: `url(/assets/${imageUrl})`
                                }}
                            >
                                <div className="flex flex-col justify-end h-full">
                                    <div className="card-footer rounded-b-[20px] bg-gray-800 bg-opacity-75 min-h-[100px] flex flex-col items-center justify-center p-3">
                                        <h2 className="flex items-center text-xl font-semibold text-center text-white">{title} <BiRightArrow className="ml-2" /></h2>
                                        {id === expandedIndex && (
                                            <>
                                                <p>{description}</p>
                                                <div className="flex gap-5 mt-3">
                                                    {skills.map((data, index) => (
                                                        <p key={index}>{data.icon}</p>
                                                    ))}
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </div>
                             
                               <div className="flex gap-5 mt-5 ml-4 w-72">
                                 <a href={demo} target="_blank" rel="noopener noreferrer"><span className="flex items-center text-center text-secondary "><FaCreditCard size="20" className="mr-1"/>-Demo</span></a>
                                 <a href={github} target="_blank" rel="noopener noreferrer"><span className="flex items-center justify-center text-secondary w-36"><SiGithub size="20" className="mr-1" />-Github</span></a>
                               </div>
                            </motion.div>
                        ))}
                       
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

