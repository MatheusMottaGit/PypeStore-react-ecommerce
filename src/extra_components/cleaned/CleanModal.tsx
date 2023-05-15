import React from 'react'
import { BiReset } from 'react-icons/bi'

const CleanModal = () => {
  return (
    <div className='flex items-center justify-center gap-4 text-[1.6rem] font-bold'>
      <BiReset color='green' size={20}/>
      <span>Cart cleaned!</span>
    </div>
  )
}

export default CleanModal