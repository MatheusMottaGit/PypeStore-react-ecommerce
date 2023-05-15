//authentication context
export interface IAuthContext extends User{
    signed: boolean
    signIn: (email: string, password: string)=> Promise<void>
    signOut: ()=> void
}



//user
export interface User{
    id?: number
    token?: string
    name?: string
    email?: string
    password?: string
}



//products 
export interface Prods{
    id: number
    name: string
    url: string
    price: number
    clothe: string
    category: string
    overview: string
}



export interface IProdContext{
    prods: Prods[]
    individualProd: Prods | null
    getProds: ()=> Promise<void>
    getProdDetails: (url: string)=> Promise<void>
}



//cart 
export interface ICartContext{
    cart: Prods[]
    setCart: React.Dispatch<React.SetStateAction<Prods[]>> 
    addItemsToCart: (key: string, value: Prods[])=> void
    getItemsFromCart: (key: string) => void
    removeItemsFromCart: (prod: Prods) => void
    clearCart: (key: string) => void
    cartAdvice: (component: JSX.Element)=> JSX.Element
}


