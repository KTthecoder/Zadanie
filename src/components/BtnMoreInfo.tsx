import React from 'react'

type Props = {}

const BtnMoreInfo = (props: Props) => {
  return (
    <button className={`rounded-md bg-[#5368DF] border-2 border-[#5368DF] text-sm px-7 text-white py-3 font-medium btnShadow md:hover:text-[#5368DF] md:hover:bg-[#fff] transition`}>More Info</button>
  )
}

export default BtnMoreInfo