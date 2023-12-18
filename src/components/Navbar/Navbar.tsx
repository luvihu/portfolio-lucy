"use client"
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { fadeIn } from '@/utils/motionTransitions'
import { dataNavbar } from './Navbar.data'
import Link from 'next/link';
import { RiFileTextLine } from "react-icons/ri";

export function Navbar() {
    const pathName = usePathname()

    return (
        <motion.div
            className="fixed top-0 z-20 flex flex-row items-center w-full mt-8 ml-14 md:justify-center md:h-20 md:max-w-md"
            variants={fadeIn('right', 0.5)} initial="hidden" animate="show" exit="hidden"
        >
            <div className="flex items-center justify-start w-auto px-1 py-2 md:py-5 md:px-8 md:flex-row md:justify-center md:gap-x-20 gap-x-10 mt-10 bg-white/10 backdrop-blur-sm md:rounded-full">
                {dataNavbar.map(({ name, path, icon }) => (
                    <div key={name}>
                        <Link href={path} className={`${path === pathName && 'currentIconPage'} group transition-all duration-400`}>
                            <div className="absolute top-4 hidden mt-8 rounded-sm md:group-hover:flex md:group-hover:items-center">
                                <div className="relative flex md:justify-end items-center p-1 leading-none text-black capitalize bg-white rounded-sm">
                                    {name}
                                </div>
                                <div className="absolute border-t-8 border-b-0 border-solid border-t-white border-x-transparent border-x-4 -top-5" />
                            </div>
                            {icon}
                        </Link>
                    </div>
                ))}
                <Link href="/assets/cvLucyVillogas.pdf" passHref legacyBehavior>
                  <a target="_blank" rel="noopener noreferrer" className="flex items-center "><RiFileTextLine size="30" /><span className="ml-2">CV</span>         
                  </a>
                </Link>
            </div>
        </motion.div>
    )
}
