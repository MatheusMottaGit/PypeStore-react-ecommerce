import React from 'react'
import { Link } from 'react-router-dom'
import '../../../main.css'

const WomenPresentation = () => {
  return (
    <div className='presentation-women'>
      <div className='w-[60%] ml-36 flex flex-col items-center justify-center h-full'>
        <h1 className='text-7xl'>
          Our female section with brand new parts!
        </h1>

        <p className='w-[50%] text-center text-lg mt-10'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Sed rem eos ab aliquam commodi eius animi suscipit cumque nisi temporibus ad accusamus molestiae totam atque, 
          eveniet est reiciendis dignissimos exercitationem.
        </p>

        <button className='bg-black w-[150px] text-white p-3 mt-10'>
          See more
        </button>
      </div>
    </div>
  )
}

export default WomenPresentation