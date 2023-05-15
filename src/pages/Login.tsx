import React, { FormEvent, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { User } from '../types/types'

import '../../main.css'
import { CgLogIn } from 'react-icons/cg'
import { useForm } from 'react-hook-form'

const Login = () => {
    
    const auth = useAuth()
    const navigate = useNavigate()

    const { register, handleSubmit } = useForm<User>()

    const handleLogin = async (data: User) =>{
        await auth.signIn(data.email!, data.password!)
        console.log(data)
    }

    if(auth.signed){
        navigate('/home')
    }else{
        return (
            <div className='h-screen w-screen flex items-center justify-center bg-mainBg'>

              <div className='flex items-center justify-center gap-32 flex-col bg-form h-[65vh] w-[27vw] rounded-lg'>
          
                <Link to='/home' className='border-solid border-4 -mt-10 border-zinc-800 p-2 text-[4rem] font-bold m-8'>
                  PypeStore
                </Link>
        
                <div className='w-full flex flex-col items-center justify-center'>

                  <div className='w-[70%] text-start mb-4'>
                    <h1 className='flex items-center'>
                      Log-In
                      <CgLogIn color='black' size={20} className='ml-1'/>
                    </h1>
                  </div>

                  <input type="email" placeholder='Email...'
                    {...register('email')}
                  />
                  <input type="password" placeholder='Password...'
                    {...register('password')}
                  />
          
                  <button 
                    className='bg-button text-mainBg'
                    onClick={handleSubmit(handleLogin)}
                  >
                    Sign-in
                  </button>
                </div>
    
              </div>

            </div>
          )
    }
}

export default Login