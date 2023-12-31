"use client"
import { motion } from 'framer-motion'
import { fadeIn } from "@/utils/motionTransitions"
import { SiGithub } from 'react-icons/si'
import { RiLinkedinFill, RiMailLine } from "react-icons/ri"
import Image from 'next/image'

export function Contact() {
  return (
    <div>
      <motion.h1
          variants={fadeIn('left', 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="mt-44 text-2xl text-center md:text-4-xl h-auto w-auto "
          ><span className="text-secondary pl-24">Encuentrame</span> en: 
      </motion.h1>
      <div className='flex md:justify-center md:items-center md:flex-row md:gap-10 flex-col gap-8 items-center mt-6 h-auto w-auto'>
      <Image src="/assets/contactam.png" priority width="300" height="300" alt="lucy" />
      <a href="https://github.com/luvihu" target="_blank" rel="noopener noreferrer"><SiGithub size="45"/></a>
      <a href="https://www.linkedin.com/in/lucyvillogas/" target="_blank" rel="noopener noreferrer"><RiLinkedinFill size="45"/></a>
      <a href="mailto:luvillogas@gmail.com" target="_blank" rel="noopener noreferrer"><RiMailLine size="45"/></a>
      </div>
      </div>
  )
}

