'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import MenuIcon from '@/static/icons/icon-hamburger.svg'
import LogoIcon from '@/static/icons/logo-bookmark'
import CloseIcon from '@/static/icons/icon-close.svg'
import DrawerNavLink from './DrawerNavLink'
import NavLink from './NavLinks'
import IconTwitter from '@/static/icons/icon-twitter'
import IconFacebook from '@/static/icons/icon-facebook'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)

  useEffect(() => {
    if(showMenu){
      document.body.style.overflow = 'hidden'
    } else{
      document.body.style.overflow = 'auto'
    }
  }, [showMenu])

  return (
    <div className='flex flex-col items-center z-30'>
      <div className={`${showMenu ? 'opacity-0' : 'opacity-100'} flex justify-between w-[85%] mt-7 items-center lg:max-w-[1200px]`}>
        <Link href='/'>
          <LogoIcon circleColor='#5267DF' iconColor='#fff' textColor='#242A45'/>
        </Link> 
        <div className='hidden md:flex'>
          <NavLink title='FEATURES' link='/features'/>
          <NavLink title='PRICING' link='/pricing'/>
          <NavLink title='CONTACT' link='/contact'/>
          <Link href='/login' className='bg-[#FA5757] rounded-md font-medium text-white tracking-wide px-8 py-2 text-sm md:hover:bg-white md:hover:text-[#FA5757] transition border-[#FA5757] border-2 box-content btnShadow'>LOGIN</Link>
        </div>
        <button onClick={() => setShowMenu(true)} className='block md:hidden'>
          <Image src={MenuIcon} alt='Menu'/>
        </button>
      </div>
      <div className={`${showMenu ? 'flex' : 'hidden'} bg-[#252b46ec] flex flex-col w-full h-screen absolute pt-7 items-center`}>
        <div className='flex flex-col w-[85%] justify-between h-screen'>
          <div className='flex flex-col'>
            <div className='flex flex-row justify-between border-b border-b-[#9194A1] pb-10'>
              <Link href='/'>
                <LogoIcon circleColor='#fff' iconColor='#252b46ec' textColor='#fff'/>
              </Link>
              <button onClick={() => setShowMenu(false)}>
                <Image src={CloseIcon} alt='Close'/>
              </button>
            </div>
            <div className='flex flex-col items-center'>
              <DrawerNavLink link='/features' title='FEATURES'/>
              <DrawerNavLink link='/pricing' title='PRICING'/>
              <DrawerNavLink link='/contact' title='CONTACT'/>
              <Link href='/login' className='border-2 rounded-md mt-6 w-full text-center text-white py-2 font-medium tracking-widest text-lg'>LOGIN</Link>
            </div>
          </div>
          <div className='flex w-full justify-center pb-8'>
            <a href='https://www.facebook.com/' target='_blank' className='pr-4'>
              <IconFacebook/>
            </a>
            <a href='https://twitter.com/' target='_blank' className='pl-4'>
              <IconTwitter/>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar