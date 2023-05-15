import React from 'react'
import { FiCheckSquare } from 'react-icons/fi'

import '../../../main.css'

const ItemSavedModal = () => {
  return (
    <div className='flex items-center justify-center gap-4 text-[1.6rem] font-bold'>
      <FiCheckSquare color='green' size={20}/>
      <span>Item saved in your cart!</span>
    </div>
  )
}

export default ItemSavedModal