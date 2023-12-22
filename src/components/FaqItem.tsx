'use client'
import ArrowIcon from '@/static/icons/icon-arrow'
import React, { useState } from 'react'

type Props = {
    title: string,
    text: string
}

const FaqItem = (props: Props) => {
    const [show, setShow] = useState(false)

    return (
        <article onClick={() => setShow(!show)} className='flex flex-col items-center cursor-pointer md:hover:text-[#FA5757] text-[#222] transitionText'>
            <div className='flex flex-row justify-between w-full items-center border-b border-b-[#9194A1] py-5'>
                <h3 className='font-medium pr-5 lg:text-lg'>{props.title}</h3>
                {show ? <button onClick={() => setShow(false)} className='-rotate-180'>
                    <ArrowIcon color='#FA5757'/>
                </button> : <button onClick={() => setShow(true)}>
                    <ArrowIcon color='#5267DF'/>
                </button>}
            </div>
            <div className={`${show ? 'flex' : 'hidden'}`}>
                <p className='py-5 tracking-wide leading-8 text-[#9194A1]'>{props.text}</p>
            </div>
        </article>
    )
}

export default FaqItem