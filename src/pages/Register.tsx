import React, { FormEvent, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { apiAuth } from '../services/api'
import { User } from '../types/types'

import {HiPencilAlt} from 'react-icons/hi'

import '../../main.css'

const Register = () => {

        const navigate = useNavigate()

        const [data, setData] = useState<User>({
          name: '',
          email: '',
          password: ''
        })

        const handleCreateUser = async (event: FormEvent, name: string, email: string, password: string) =>{
          event.preventDefault()

          await apiAuth.post('/create', {
            name,
            email,
            password
          })
            .then(response => console.log(response.data))
            navigate('/login')
        }

  return (
    <div className='h-screen w-screen flex items-center justify-center bg-mainBg'>
      <div className='flex items-center justify-center flex-col bg-form h-[45vh] w-[27vw] rounded-lg'>

        <div className='w-[70%] text-start'>
          <h1 className='flex items-center'>
            Register
            <HiPencilAlt color='black' size={20} className='ml-1'/>
          </h1>
        </div>

        <input type="text" placeholder='Name...' onChange={(e)=>{
          setData({...data, name: e.target.value})
        }} />
        <input type="email" placeholder='Email...' onChange={(e)=>{
          setData({...data, email: e.target.value})
        }} />
        <input type="password" placeholder='Password...' onChange={(e)=>{
          setData({...data, password: e.target.value})
        }} />

        <button className='bg-button text-white' onClick={(e)=>{
          handleCreateUser(e, data.name!, data.email!, data.password!)
        }}>Create</button>

        <div className='flex items-center justify-center text-[1.1rem] m-3'>
          <div className='bg-gray-400 w-[8vw] h-[1px] m-2'></div>
            <p>or</p>
          <div className='bg-gray-400 w-[8vw] h-[1px] m-2'></div>
        </div>
        
        <Link to='/login' className='underline text-[1.2rem]'>
          Log-In
        </Link>

      </div>
    </div>
  )
}

export default Register