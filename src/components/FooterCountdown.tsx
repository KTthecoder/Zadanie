'use client'
import React, { useEffect, useState } from 'react'

type Props = {}

const FooterCountdown = (props: Props) => {
    const [counter, setCounter] = useState(35000)

    useEffect(() => {
        if (counter <= 0) return

        const timeout = setTimeout(() => {
            setCounter(counter - 175)
        }, 100)

        return () => clearTimeout(timeout)
    }, [counter])

    return (
        <p className='text-white text-center tracking-widest text-sm w-[85%]'>{counter} + ALREADY JOINED</p>
    )
}

export default FooterCountdown