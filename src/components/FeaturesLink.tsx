import React from 'react'

type Props = {
  title: string,
  show: boolean,
  setScreen: React.Dispatch<React.SetStateAction<1 | 2 | 3>>,
  nr: React.SetStateAction<1 | 2 | 3>
}

const FeaturesLink = (props: Props) => {
  return (
    <div className='relative w-full flex-col flex'>
      <button className={`${props.show ? 'md:border-b-[#FA5757] text-[#333]' : 'border-b-[#9194a154] text-[#9194A1]'} border-b font-medium tracking-wide py-4 md:border-b-2 pb-5 md:w-full md:text-center md:hover:text-[#FA5757] transitionText`} onClick={() => props.setScreen(props.nr)}>{props.title}</button>
      {props.show ? <span className='border-b-[#FA5757] border-b-2 w-[150px] absolute bottom-0 self-center md:hidden'></span> : null}
    </div>
  )
}

export default FeaturesLink