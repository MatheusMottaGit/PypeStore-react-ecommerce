import React from 'react'

const MenPresentation = () => {
  return (
    <div className='presentation-men flex items-center justify-between'>
      <div className='w-[60%] ml-36 flex flex-col items-center justify-center'>
        <h1 className='text-7xl'>
          Our male section is now available!
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

export default MenPresentation