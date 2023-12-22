import React from 'react'

type Props = {
  title: string,
  center: boolean
}

const HeaderTitle = (props: Props) => {
  return (
    <h1 className={`${props.center ? '' : 'md:text-start'} text-2xl font-semibold text-[#111] text-center lg:text-3xl xl:text-5xl`}>{props.title}</h1>
  )
}

export default HeaderTitle