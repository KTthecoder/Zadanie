import React from 'react'
import LogoIcon from '@/static/icons/logo-bookmark'
import Link from 'next/link'
import FooterLink from './FooterLink'
import FooterForm from './forms/FooterForm'
import IconTwitter from '@/static/icons/icon-twitter'
import IconFacebook from '@/static/icons/icon-facebook'
import FooterCountdown from './FooterCountdown'

const Footer = () => {
  return (
    <div className='flex flex-col bg-[#5368DF] mt-28 pt-16 items-center'>
        <FooterCountdown/>
        <h2 className='text-white text-semibold text-2xl text-center mt-3 w-[85%] md:w-[400px] md:font-medium md:text-3xl md:mt-6 md:mb-2'>Stay up-to-date with what we&apos;re doing</h2>
        <FooterForm/>
        <div className='bg-[#252b46] pt-10 mt-10 w-full items-center flex flex-col md:flex-row md:py-7 md:justify-center md:mt-14'>
            <div className='flex flex-col items-center md:flex-row md:w-[85%] md:max-w-[1550px]'>
                <div className='flex flex-col items-center w-[85%] md:flex-row'>
                    <Link href='/' className='mb-10 md:mb-0 lg:mr-10'>
                        <LogoIcon circleColor='#5267DF' iconColor='#fff' textColor='#fff'/>
                    </Link> 
                    <div className='flex flex-col items-center md:flex-row'>
                        <FooterLink title='FEATURES' link='/features'/>
                        <FooterLink title='PRICING' link='/pricing'/>
                        <FooterLink title='CONTACT' link='/contact'/>
                    </div>
                </div>
                <div className='flex justify-center pb-8 mt-5 w-[85%] md:pb-0 md:mt-0 md:justify-end'>
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

export default Footer