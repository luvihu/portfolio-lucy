"use client"
import { fadeIn } from '@/utils/motionTransitions'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { socialNetworks } from './dataHeader'

export function Header() {
    return (
        <div className='absolute z-20 inline-block w-full top-5 md:top-10'>
            <motion.div variants={fadeIn('up', 0.5)} initial="hidden" animate="show" exit="hidden">
                <div className="container md:justify-end md:mx-auto md:flex md:mb-5">
                     <div className="flex md:items-center md:justify-center md:gap-7 md:mr-6 gap-4 justify-end mr-2 ">
                        {socialNetworks.map(({ logo, src }) => (
                            <Link key={src} href={src} target="_blank" className="transition-all duration-300 hover:text-secondary">
                                {logo}
                            </Link>
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
