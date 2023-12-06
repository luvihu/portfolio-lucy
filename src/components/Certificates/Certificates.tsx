"use client"
import { fadeIn } from "@/utils/motionTransitions";
import { motion } from 'framer-motion';
import Image from 'next/image'
import { certificados } from './certificados';

export function Certificates() {
    return (
        <div className="md:inline-block items-center h-screen">
                        
            <div className="flex flex-col text-center mt-36 md:text-center ">
                <motion.h1 
                   className="mb-4 text-3xl"
                   variants={fadeIn('up', 0.5)}
                    initial="hidden"
                    animate="show"
                    exit="hidden" >           
                    Mis <span className="text-secondary">certificados</span>
                </motion.h1>
            </div>
            <div className="flex text-center justify-center gap-14 flex-wrap p-4 ml-8">
              {certificados.map((certificado, index) => (
                <motion.div
                    key={index}
                    variants={fadeIn('left', 0.5)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="relative md:inline-block max-w-6xl p-5 bg-secondary/20 rounded-md"
                >
                <Image
                src={certificado.image}
                width={450}
                height={300}
                alt="Certificado"
                priority
                className="md:ml-6"
                />
               <p className="text-center mt-2 text-secondary">{certificado.text}</p>
               <div className="flex md:text-center mt-2 max-w-md max-h-20 md:pl-8 md:ml-4">{certificado.description}</div>
               </motion.div>
               ))}
            </div>
            
       </div>
    )
}