import Link from 'next/link'
import React from 'react'

type Props = {
  link: string,
  title: string,
}

const FooterLink = (props: Props) => {
  return (
    <Link href={props.link} className='text-[#9194A1] font-medium tracking-widest mb-5 md:mb-0 md:mx-5 md:text-sm md:hover:text-[#FA5757] transitionText'>{props.title}</Link>
  )
}

export default FooterLink