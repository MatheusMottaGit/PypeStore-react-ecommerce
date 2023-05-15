import React, { useState } from 'react'
import NavBar from '../components/NavBar'

import support from '../assets/support.jpg'
import Footer from '../components/Footer'

import {useForm} from 'react-hook-form'
import NavBarProdsPages from '../components/NavBarProdsPages'

type SupportInputs = {
    name: string,
    email: string,
    rating: string
}

const Support = () => {

    console.log('render')

    const {
        register, 
        handleSubmit, 
        formState: {errors}, 
        reset
    } = useForm<SupportInputs>()

    const onSubmit = (data: SupportInputs) =>{
        console.log(data)
        reset({
            name: '',
            email: '',
            rating: ''
        })
    }

  return (
    <>
      <NavBarProdsPages/>
      <section className='w-screen h-[85vh] flex items-center justify-center bg-aliceblue md:w-screen'>
        <div className='container-form w-[100rem] h-[50rem] rounded-md flex items-center justify-around
                       bg-form border-solid border-[1px] border-zinc-300 shadow-inner'
        >
            <div className='w-full h-full flex flex-col items-center justify-center'>

                <h1 className='mt-8'>
                  Contact Us
                </h1>

                <input 
                    type="text" 
                    placeholder='Name...'
                    {...register('name', {required: true})}
                    className={errors.name && 'border-solid border-orange-600 border-2'}
                />  
                  {errors.name?.type === 'required' && 
                    <p className='text-orange-600 text-lg w-[70%]'>
                     required field...
                    </p>
                  }

                <input 
                    type="email" 
                    placeholder='E-mail...'
                    {...register('email', {required: true})}
                    className={errors.email && 'border-solid border-orange-600 border-2'}
                />
                  {errors.email?.type === 'required' && 
                    <p className='text-orange-600 text-lg w-[70%]'>
                     required field...
                    </p>
                  }

                <textarea 
                    placeholder='Leave your comment, recommendation, rate (optional)...'
                    {...register('rating', {required: false})}
                />

                <button 
                onClick={()=> handleSubmit(onSubmit)()}
                className='bg-orange-400 text-form'
                >
                  Send
                </button>
                
            </div>

            <div className=' m-2 h-full'>
                <img src={support}/>
            </div>
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default Support