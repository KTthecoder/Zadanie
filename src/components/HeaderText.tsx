import React from 'react'

type Props = {
  text: string,
  center: boolean
}

const HeaderText = (props: Props) => {
  return (
    <p className={`${props.center ? 'md:w-[440px] xl:w-[550px]' : 'md:text-start'} text-[#9194A1] text-center mt-4 xl:text-lg xl:leading-8 xl:py-2`}>{props.text}</p>
  )
}

export default HeaderText