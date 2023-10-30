import React, { useContext, useEffect, useState } from 'react'

import '../../main.css'

import { Info, CreditCard, CopyX, LucideShoppingBag, ShoppingBag} from 'lucide-react'

import { CartContext } from '../contexts/CartContext'
import RemovedModal from '../extra_components/removed/RemovedModal'
import CleanModal from '../extra_components/cleaned/CleanModal'
import Link from 'next/link'

const HomeOptions = () => {

  const { cart, getItemsFromCart, clearCart, removeItemsFromCart } = useContext(CartContext)

  useEffect(()=>{
    getItemsFromCart('cart')
  }, [])

  const cartTotalToPay = cart.reduce((last, current) => last + current.price, 0)

  return (
    <>
        <div className='options grid grid-cols-3 w-fit h-fit m-10'>

          <Link href='/support' className='cursor-pointer flex items-center justify-center border-solid border-[1px] border-zinc-300 w-[200px] h-[80px] mx-[10rem]'>
            <div className='w-[60%] h-full grid grid-cols-2 items-center justify-items-center'>
            <Info size={30} color='orange'/>
            <div>
              <span className='font-bold text-[.8rem]'>Support 24/7</span>
              <p className='text-[.6rem]'>Online 24 hours</p>
            </div>
            </div>
          </Link>

          <div className='cursor-pointer flex items-center justify-center border-solid border-[1px] border-zinc-300 w-[200px] h-[80px] mx-[10rem]'>
            <div className='w-[60%] h-full grid grid-cols-2 items-center justify-items-center'>
            <CreditCard size={30} color='orange'/>
            <div>
              <span className='font-bold text-[.8rem]'>Payment</span>
              <p className='text-[.6rem]'>See the methods</p>
            </div>
            </div>
          </div>

          <Dialog.Root>
            <Dialog.Trigger className='flex items-center justify-center border-solid border-[1px] border-zinc-300 w-[200px] h-[80px] mx-[10rem] mt-[0.1px] rounded-none'>
            
              <div className='w-[60%] h-full grid grid-cols-2 items-center justify-items-center'>
                <ShoppingBag size={30} color='orange'/>
                <div>
                  <span className='font-bold text-[.8rem]'>Your cart</span>
                  <p className='text-[.6rem]'>Save your items</p>
                </div>
              </div>

            </Dialog.Trigger> 

                    <Dialog.Portal>
                      <Dialog.Overlay className='bg-black/80 fixed top-0 right-0 left-0 bottom-0 grid place-items-center overflow-y-auto'/>

                      <Dialog.Content className='fixed flex flex-col items-center justify-center p-10 bg-form rounded-lg w-[60%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:h-[850px]'>

                        <div className='w-full h-[700px] overflow-y-scroll p-6'>
                          {cart.map(item => (
                            <div className='relative group transition overflow-x-hidden w-full h-[150px] text-lg font-bold shadow-sm flex items-center justify-around my-3'>
                              <div className='cursor-pointer absolute top-6 -right-11 group-hover:right-5 text-zinc-900 
                              opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-sm'
                                >
                                <Dialog.Root>
                                  <Dialog.Trigger>
                                    <CopyX
                                      color='orange'
                                      onClick={()=>{
                                        removeItemsFromCart(item)
                                      }} 
                                      size={20}/>
                                  </Dialog.Trigger>
                                  <Dialog.Portal>
                                    <Dialog.Overlay className='bg-black/50 fixed top-0 left-0 right-0 bottom-0 grid place-items-center overflow-y-auto'/>
                                    <Dialog.Content className='advice-modals fixed flex flex-col items-center 
                                                                justify-center p-10 bg-form rounded-lg w-[250px] h-[100px] 
                                                                top-44 left-1/2 -translate-x-1/2 -translate-y-1/2
                                                                '>
                                      <RemovedModal/>
                                    </Dialog.Content>
                                  </Dialog.Portal>
                                </Dialog.Root>

                              </div>
                              <img src={item.url} className='h-[110px] w-[100px]'/>
                              <p>{item.name}</p>
                              <p>${item.price}</p>
                            </div>
                          ))}
                        </div>

                        <div className='bg-white mt-10 m-2 h-[30px] text-white w-full flex items-center justify-around'>
                          
                          <Dialog.Close className='bg-black w-[100px]'>
                            Close cart
                          </Dialog.Close>

                          <span className='bg-black w-fit h-[33px] p-7 text-xl rounded-lg text-white flex items-center justify-center'>
                           Total: ${cartTotalToPay}
                          </span>

                          <Dialog.Root>
                            <Dialog.Trigger className='w-[100px]'>
                              <button 
                                onClick={() => clearCart('cart')}
                                className='bg-black w-[100px] h-[33px] text-xl rounded-lg text-white flex items-center justify-center'>
                              Clear cart
                              </button>
                            </Dialog.Trigger>
                            <Dialog.Portal>
                            <Dialog.Overlay className='bg-black/50 fixed top-0 left-0 right-0 bottom-0 grid place-items-center overflow-y-auto'/>
                            <Dialog.Content className='advice-modals fixed flex flex-col items-center 
                                                        justify-center p-10 bg-white rounded-lg w-[250px] h-[100px] 
                                                        top-44 left-1/2 -translate-x-1/2 -translate-y-1/2
                                                        '>
                              <CleanModal/>
                            </Dialog.Content>
                            </Dialog.Portal>
                          </Dialog.Root>

                        </div>

                      </Dialog.Content>
                    </Dialog.Portal>
          </Dialog.Root>
          
        </div>
    </>
  )
}

export default HomeOptions