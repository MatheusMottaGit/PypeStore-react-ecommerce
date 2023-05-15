import { useState } from "react"
import { apiAuth } from "../services/api"
import { User } from "../types/types"
import { AuthContext } from "./AuthContext"

export const AuthProvider = ({children}: {children: JSX.Element}) =>{

    const[user, setUser] = useState<User | null>(null)

    const signIn = async (email: string, password: string) =>{
        const response = await apiAuth.post('/auth', {
            email,
            password
        })

            if(response.data.error){
                alert(response.data.error)
            }else{
                setUser(response.data)

                apiAuth.defaults.headers.common[
                    "Authorization"
                ] = `Bearer ${response.data.token}`

                localStorage.setItem('@Auth:token', response.data.token)
                localStorage.setItem('@Auth:user', JSON.stringify(response.data.user))
            }
    }

    const signOut = () =>{
        localStorage.clear()
        setUser(null)
    }

        return(
            <AuthContext.Provider value={{...user!, signed: !!user, signIn, signOut}}>
                {children}
            </AuthContext.Provider>
        )
}