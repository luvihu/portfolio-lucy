"use client"
import { fadeIn } from "@/utils/motionTransitions";
import { motion } from 'framer-motion';
import Image from 'next/image'
import { certificados } from './certificados';

export function Certificates() {
    return (
        <div className=" flex flex-col items-center min-h-screen">
                        
            <div className="flex flex-col text-center mt-36 md:mt-32 ">
                <motion.h1 
                   className="mb-4 text-3xl md:text-4xl lg:text-4xl"
                   variants={fadeIn('up', 0.5)}
                    initial="hidden"
                    animate="show"
                    exit="hidden" >           
                    Mis <span className="text-secondary">certificados</span>
                </motion.h1>
            </div>
            <div className="flex flex-wrap justify-center gap-10 p-4">
              {certificados.map((certificado, index) => (
                <motion.div
                    key={index}
                    variants={fadeIn('left', 0.5)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="w-full md:w-1/2 lg:w-1/3 p-5 bg-secondary/20 rounded-md"
                >
                <Image
                src={certificado.image}
                width={450}
                height={300}
                alt="Certificado"
                priority
                className="rounded"
                />
               <p className="text-center mt-2 text-secondary">{certificado.text}</p>
               <div className="text-center mt-2">{certificado.description}</div>
               </motion.div>
               ))}
            </div>
            
       </div>
    )
}