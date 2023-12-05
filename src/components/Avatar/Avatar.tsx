"use client"
import { fadeIn } from '@/utils/motionTransitions'
import { motion } from 'framer-motion'
import Image from 'next/image'

export function Avatar() {
    return (
        <motion.div variants={fadeIn('left', 0.5)} initial="hidden" animate="show" exit="hidden" className="top-40 right-10 hidden md:inline-block md:absolute">
            <Image src="/assets/foto-circle.png" width="250" height="250" alt="Particles" priority/>
        </motion.div>
    )
}
