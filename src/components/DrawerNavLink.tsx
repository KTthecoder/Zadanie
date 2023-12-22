import Link from 'next/link'
import React from 'react'

type Props = {
  link: string,
  title: string
}

const DrawerNavLink = (props: Props) => {
  return (
    <Link href={props.link} className='py-5 border-b border-b-[#9194A1] w-full text-center text-white tracking-widest text-lg font-normal'>{props.title}</Link>
  )
}

export default DrawerNavLink