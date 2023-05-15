import React from 'react'
import { FiGithub } from 'react-icons/fi'
import { GrInstagram } from 'react-icons/gr'
import { MdLocationOn, MdOutlineEmail } from 'react-icons/md'
import { RiPhoneFill } from 'react-icons/ri'
import { TbBrandTwitter } from 'react-icons/tb'

const Footer = () => {
  return (
    <footer className='footer bg-zinc-800 h-[20vh] w-screen grid grid-cols-2 place-items-center text-form'>
        <div className='grid grid-rows-3 gap-5'>
          <div className='flex items-center text-[1.2rem] gap-2'>
            <MdLocationOn size={15}/>
            <p>Volta Redonda, Brazil</p>
          </div>
          <div className='flex items-center text-[1.2rem] gap-2'>
            <RiPhoneFill size={15}/>
            <p>55+ 24 1234567</p>
          </div>
          <div className='flex items-center text-[1.2rem] gap-2'>
            <MdOutlineEmail size={15}/>
            <p>pypesupport@gmail.com</p>
          </div>
        </div>
        <div className='flex flex-col items-start justify-center'>
          <span className='font-bold text-[.7rem] mb-6'>
            About the company
          </span>
          <p className='text-start w-1/3 opacity-50 mb-6'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Eaque alias quaerat optio ducimus ad praesentium repudiandae totam velit excepturi perferendis voluptatum, 
              doloribus consequatur recusandae eius odio cumque labore asperiores explicabo.
          </p>
          <div className='flex items-center mt-2 gap-11'> 
            <GrInstagram size={15} color='darkgrey'/>
            <TbBrandTwitter size={15} color='darkgrey'/>
            <FiGithub size={15} color='darkgrey'/>
          </div>
        </div>
    </footer>
  )
}

export default Footer