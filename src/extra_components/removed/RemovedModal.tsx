import React from 'react'

import {CiCircleRemove} from 'react-icons/ci'

const RemovedModal = () => {
  return (
    <div className='flex items-center justify-center gap-4 text-[1.4rem] font-bold w-[500px]'>
      <CiCircleRemove color='red' size={25}/>
      <span>Item removed from your cart!</span>
    </div>
  )
}

export default RemovedModal