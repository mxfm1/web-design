'use client'

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { NAV_LINKS } from "@/constants/constants"

import Button from "./Button"
import MobileNavbar from "./globals/MobileNavbar"

const Navbar = () => {
    const[isOpen,setIsOpen] = useState(false);
  return (
    
    <>
        <nav className="flexBetween max-container padding-container relative z-30 py-5 border border-b-green-900">
            <Link href="/">
                <Image src="/hilink-logo.svg" alt='logo' height={29} width={74}/>
            </Link>
            <ul className="hidden h-full gap-12 lg:flex">
                {NAV_LINKS.map((item)=>(
                    <Link href={item.href} key={item.key}
                    className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold hover:underline"
                    >
                        <li>{item.label}</li>
                    </Link>
                ))}
            </ul>
            <div className="hidden lg:flexCenter">
                <Link href="/login">
                    <Button
                    title="Login"
                    icon="/user.svg"
                    variant="btn_dark_green"/>
                </Link>
            </div>
            <button onClick={()=>setIsOpen(!isOpen)}
                className="inline-block lg:hidden cursor-pointer"
            >
                {isOpen ?
                <Image src="/close.svg"
                        alt="close"
                        width={32}
                        height={32}
                        className=""
                        style={{ filter: 'invert(1)'}}
                />
                :
                <Image
                    src="/menu.svg"
                    alt="menu"
                    width={32}
                    height={32}
                />}
            </button>
        </nav>
    <div className={`${isOpen ? '' : 'transform -translate-x-full'} absolute top-0 left-0 h-full pb-20 bg-gradient-to-t from-white to-orange-800 ease-in-out transition-transform duration-500 delay-75 w-10/12 sm:w-[400px] lg:hidden z-[40] overflow-y-auto transform right-shadow text-sidebar`}>
        <MobileNavbar header1="Inicio"/>
    </div>
    </>
  )
}

// absolute top-0 left-0 h-full pb-20 bg-gradient-to-t from-white to-brown ease-in-out transition-transform duration-500 delay-75 w-10/12 sm:w-[400px] lg:hidden z-[10] overflow-y-auto transform right-shadow text-sidebar

export default Navbar
