"use client"
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { motion } from 'framer-motion'
import { fadeIn } from '@/utils/motionTransitions'
import { dataNavbar } from './Navbar.data';
import Link from 'next/link';
import { RiFileTextLine } from "react-icons/ri";
import { FiMenu, FiX } from 'react-icons/fi';

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathName = usePathname();
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <motion.div
            className="fixed top-0 z-20 w-full bg-white/10 backdrop-blur-sm md:rounded-full"
            variants={fadeIn('right', 0.5)} initial="hidden" animate="show" exit="hidden"
        >
          <div className="flex items-center justify-start px-4 py-3 md:px-8 md:py-5">
            <div className="flex items-center space-x-4 ">
                <button onClick={toggleMenu} className="text-xl md:hidden">
                    {isOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>
            <div className={`flex-col md:flex md:flex-row md:items-center md:gap-x-10 ${isOpen ? 'flex' : 'hidden'} md:flex`}>
                {dataNavbar.map(({ name, path, icon }) => (
                    <div key={name} className="relative">
                        <Link href={path} className={`${path === pathName ? 'currentIconPage' : ''} group transition-all duration-400 flex items-center`}>
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
                <Link href="/assets/Cv-LucyVillogasH.pdf" passHref legacyBehavior>
                  <a target="_blank" rel="noopener noreferrer" className="flex items-center "><RiFileTextLine size="30" /><span className="ml-2">CV</span></a>
                </Link>
            </div>
          </div>
        </motion.div>
    )
}
