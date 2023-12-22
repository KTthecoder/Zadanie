import Link from 'next/link'
import React from 'react'

type Props = {
  link: string,
  title: string,
}

const NavLink = (props: Props) => {
  return (
    <Link href={props.link} className='mr-10 flex items-center tracking-wider text-sm text-[#242A45] md:hover:text-[#FA5757] transitionText'>{props.title}</Link>
  )
}

export default NavLink