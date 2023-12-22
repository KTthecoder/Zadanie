import React from 'react'

type Props = {
  color: string,
}

const ArrowIcon = (props: Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12"><path fill="none" stroke={props.color} strokeWidth="3" d="M1 1l8 8 8-8"/></svg>
  )
}

export default ArrowIcon
