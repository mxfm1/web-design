import React from 'react'
import Image from 'next/image'
import { SIDEBAR_LINKS1, SIDEBAR_LINKS2 } from '@/constants/constants'
type MobileNavbarProps = {
    header1: string,
    header2?: string,
    header3?: string
}

const MobileNavbar = ({header1,header2,header3}:MobileNavbarProps) => {
  return (
    <>
        <div className=''>
            {true && <span>Bienvenido usuario</span>}
        </div>
        <h1 className='text-3xl pt-3 mx-2'>{header1}</h1>
        <ul>
        {SIDEBAR_LINKS1.map((item) => (
            <li>
                <Image src={item.icon} alt='icon' width={20} height={20} />
                <span>{item.label}</span>
            </li>
        ))}
        </ul>
        <h1 className="text-3xl pt-3 mx-2">{header2}</h1>
        <ul className='space-y-3'>
            {SIDEBAR_LINKS2.map((item) => (
                <li className='w-full h-[50px] flex items-center rounded-full hover:bg-red-100 pl-6'>
                    <Image src={item.icon} alt='icon'width={20} height={20}/>
                    <label>{item.label}</label>
                </li>
            ))}
        </ul>
    </>
  )
}

export default MobileNavbar
