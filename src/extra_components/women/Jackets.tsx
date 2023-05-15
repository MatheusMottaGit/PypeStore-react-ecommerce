import React, { useContext, useEffect } from 'react'

import { ProdContext } from '../../contexts/ProdContext'

import * as Dialog from '@radix-ui/react-dialog'
import ItemSavedModal from '../saved/ItemSavedModal'
import { MdOutlineLibraryAdd } from 'react-icons/md'
import { CartContext } from '../../contexts/CartContext'
import { Prods } from '../../types/types'
import { Link } from 'react-router-dom'

const Jackets = () => {

    const { prods, getProds } = useContext(ProdContext)

    const filteredJacketsProds = prods.filter(
      prod => prod.clothe === 'jacket' && prod.category === "women's"
    )

    const soldThisWeek = filteredJacketsProds.filter(prod => prod.id % 2 === 0)

    const cheapOnes = filteredJacketsProds.filter(prod => prod.price < 100)

    const { cart, setCart, addItemsToCart } = useContext(CartContext)

    const handleClick = (prod: Prods) =>{
      const thereIsElement = cart.find((element)=> element.id === prod.id)

      if(thereIsElement){
        const arrFilter = cart.filter((element)=> element.id != prod.id)
        setCart(arrFilter)
        addItemsToCart('cart', arrFilter)
      }else{
        setCart([...cart, prod])
        addItemsToCart('cart', [...cart, prod])
      }
    }

    useEffect(()=>{
      getProds()
    }, [])

  return (
    <>
      <div className='flex flex-col items-center justify-center w-full'>
        <h1 className='font-bold p-8'>
          Most popular
        </h1>
        <div className='op-prods grid grid-cols-6 place-items-center gap-12 mb-24'>
          {filteredJacketsProds.map(prod=>(
            <div className='flex flex-col justify-center items-center h-[300px] w-[250px] shadow-xl shadow-zinc-400 hover:-mt-3 hover:transition-all hover:duration-500 relative overflow-hidden group transition'>
              <div className='cursor-pointer absolute top-6 -right-11 group-hover:right-5 text-zinc-900 
                              opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-sm'
                >
                <Dialog.Root>
                  <Dialog.Trigger>
                    <MdOutlineLibraryAdd
                      color='orange'
                      onClick={()=>{
                        handleClick(prod)
                      }} 
                      size={20}/>
                  </Dialog.Trigger>
                  <Dialog.Portal>
                    <Dialog.Overlay className='bg-black/50 fixed top-0 left-0 right-0 bottom-0 grid place-items-center overflow-y-auto'/>
                    <Dialog.Content className='advice-modals fixed flex flex-col items-center 
                                                justify-center p-10 bg-form rounded-lg w-[250px] h-[100px] 
                                                top-44 left-1/2 -translate-x-1/2 -translate-y-1/2
                                                '>
                      <ItemSavedModal/>
                    </Dialog.Content>
                  </Dialog.Portal>
                </Dialog.Root>

              </div>
              <Link to={`/products/${prod.id}`}>
                <img
                  className='w-full h-[200px]' 
                  src={prod.url}
                />
              </Link>

              <p className='font-bold m-4 text-[1.2rem]'>{prod.name}</p>
              <p className='font-bold text-[1.2rem]'>${prod.price}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='flex flex-col items-center justify-center w-full'>
        <h1 className='font-bold'>
          Sold this week
        </h1>
        <div className='op-prods grid grid-cols-6 place-items-center gap-12 mb-24'>
          {soldThisWeek.map(prod=>(
            <div className='flex flex-col justify-center items-center h-[300px] w-[250px] shadow-xl shadow-zinc-400 
                            hover:-mt-3 hover:transition-all hover:duration-500 relative overflow-hidden group transition'>
              <div className='cursor-pointer absolute top-6 -right-11 group-hover:right-5 text-zinc-900 
                              opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-sm'
                >
                <Dialog.Root>
                  <Dialog.Trigger>
                    <MdOutlineLibraryAdd
                      color='orange'
                      onClick={()=>{
                        handleClick(prod)
                      }} 
                      size={20}/>
                  </Dialog.Trigger>
                  <Dialog.Portal>
                    <Dialog.Overlay className='bg-black/50 fixed top-0 left-0 right-0 bottom-0 grid place-items-center overflow-y-auto'/>
                    <Dialog.Content className='advice-modals fixed flex flex-col items-center 
                                                justify-center p-10 bg-form rounded-lg w-[250px] h-[100px] 
                                                top-44 left-1/2 -translate-x-1/2 -translate-y-1/2
                                                '>
                      <ItemSavedModal/>
                    </Dialog.Content>
                  </Dialog.Portal>
                </Dialog.Root>

              </div>
              <Link to={`/products/${prod.id}`}>
                <img
                  className='w-full h-[200px]' 
                  src={prod.url}
                />
              </Link>

              <p className='font-bold m-4 text-[1.2rem]'>{prod.name}</p>
              <p className='font-bold text-[1.2rem]'>${prod.price}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='flex flex-col items-center justify-center w-full'>
        <h1 className='font-bold'>
          Cheap ones
        </h1>
        <div className='op-prods grid grid-cols-6 place-items-center gap-12 mb-24'>
          {cheapOnes.map(prod=>(
            <div className='flex flex-col justify-center items-center h-[300px] w-[250px] shadow-xl shadow-zinc-400 hover:-mt-3 hover:transition-all hover:duration-500 relative overflow-hidden group transition'>
              <div className='cursor-pointer absolute top-6 -right-11 group-hover:right-5 text-zinc-900 
                              opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-sm'
                >
                <Dialog.Root>
                  <Dialog.Trigger>
                    <MdOutlineLibraryAdd
                      color='orange'
                      onClick={()=>{
                        handleClick(prod)
                      }} 
                      size={20}/>
                  </Dialog.Trigger>
                  <Dialog.Portal>
                    <Dialog.Overlay className='bg-black/50 fixed top-0 left-0 right-0 bottom-0 grid place-items-center overflow-y-auto'/>
                    <Dialog.Content className='advice-modals fixed flex flex-col items-center 
                                                justify-center p-10 bg-form rounded-lg w-[250px] h-[100px] 
                                                top-44 left-1/2 -translate-x-1/2 -translate-y-1/2
                                                '>
                      <ItemSavedModal/>
                    </Dialog.Content>
                  </Dialog.Portal>
                </Dialog.Root>

              </div>
              <Link to={`/products/${prod.id}`}>
                <img
                  className='w-full h-[200px]' 
                  src={prod.url}
                />
              </Link>

              <p className='font-bold m-4 text-[1.2rem]'>{prod.name}</p>
              <p className='font-bold text-[1.2rem]'>${prod.price}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Jackets