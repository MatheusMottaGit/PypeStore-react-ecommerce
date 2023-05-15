import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

export const Private = () => {

    const auth = useAuth()

    return auth.signed ? <Outlet/> : <Navigate to='/'/>

}