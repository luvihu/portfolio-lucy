import { fadeIn } from '@/utils/motionTransitions'
import { motion } from 'framer-motion'
import Image from 'next/image'

export function Introduction() {
    return (
        <div className="bg-[#131424]/60 w-full z-10">
            <div className="w-full h-full bg-gradient-to-r from-[#131424]/10 via-black/30 to-black/10">
                <div className="container grid items-center h-full px-4 mx-auto md:grid-cols-2 md:text-left">
                    <motion.div className="w-full md:w-auto md:h-auto mt-10  h-auto mx-auto md:ml-10 md:mr-auto md:mb-8 md:mt-10"
                        variants={fadeIn('right', 0.5)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                    >
                        <Image src="/assets/lucyDev1.png" priority width="430" height="410" alt="lucy" />
                    </motion.div>

                    <motion.div className="w-full md:w-auto h-auto md:ml-auto md:mr-16 mt-10"
                        variants={fadeIn("left", 0.5)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                    >
                        <h4 className=" flex flex-col ml-14 mb-5 text-xl leading-tight md:mr-16 md:mb-10 md:text-center">Hola, mi nombre es:  <br />
                            <span className="text-secondary text-4xl">Lucy Villogas</span></h4>
                        <h3 className=" flex flex-col ml-14 mb-5 text-4xl pb-5 md:mr-8 md:flex-row md:text-center">
                        Full Stack Developer Jr.
                        </h3>

                        <div className="flex flex-col items-center gap-3 md:gap-10 md:justify-center md:items-center md:flex-row md:mt-10">
                            <a href="/projects" className="px-3 py-3 my-2 transition-all border-2 cursor-pointer w-fit rounded-xl hover:shadow-xl hover:shadow-white/50">
                                Ver proyectos
                            </a>
                            <a href="/contact" className="px-4 py-3 my-2 md:ml-24 transition-all border-2 cursor-pointer text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary">
                                Contacta conmigo
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
