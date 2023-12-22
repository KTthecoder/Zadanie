import Image from 'next/image'
import React from 'react'
import DotsSVG from '@/static/icons/bg-dots.svg'

type Props = {
  icon: any,
  title: string,
  version: string,
  nr: number
}

const ExtensionBlock = (props: Props) => {
  return (
    <article className={`flex flex-col items-center featureBlockShadow rounded-lg pt-10 mb-16 lg:mx-5 ${props.nr === 2 ? 'lg:mt-10' : props.nr === 3 ? 'lg:mt-20' : null}`}>
      <Image src={props.icon} alt={props.title}/>
      <h2 className='font-semibold text-xl tracking-wide text-[#111] text-center mt-8'>Add to {props.title}</h2>
      <p className='text-[#9194A1] text-center mt-2 mb-8'>Minimum version {props.version}</p>
      <Image src={DotsSVG} alt='Dots'/>
      <button className='text-center bg-[#5368DF] border-[#5368DF] border-2 text-white rounded-md px-7 py-2 my-7 md:hover:bg-white md:hover:border-[#5368DF] md:hover:text-[#5368DF] transition'>Add & Install Extension</button>
    </article>
  )
}

export default ExtensionBlock