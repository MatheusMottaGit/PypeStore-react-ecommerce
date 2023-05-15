import React, { useContext } from 'react'
import NavBar from '../components/NavBar'
import { CartContext } from '../contexts/CartContext'
import CleanModal from '../extra_components/cleaned/CleanModal'
import { Link } from 'react-router-dom'
import * as Dialog from '@radix-ui/react-dialog'
import RemovedModal from '../extra_components/removed/RemovedModal'
import { MdOutlineRemoveModerator } from 'react-icons/md'

const Cart = () => {

    const { cart, clearCart, removeItemsFromCart } = useContext(CartContext)

    const cartTotalToPay = cart.reduce((last, current) => last + current.price, 0)

  return (
    <>
      <NavBar/>

      <div className='w-screen h-[85vh] overflow-y-scroll'>
        {cart.map(item => (
          <div key={item.id} className='cursor-pointer relative group transition my-10 border-solid border-2 border-zinc-200 shadow-2xl flex items-center justify-around p-3 h-[300px] w-[90%] translate-x-32'>
            
              <div className='cursor-pointer absolute top-6 -right-11 group-hover:right-5 text-zinc-900 
                              opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-sm'
                >
                <Dialog.Root>
                  <Dialog.Trigger>
                    <MdOutlineRemoveModerator
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

              <Link to={`/products/${item.id}`}>
                <img 
                  src={item.url}
                  className='h-[200px] w-[200px]'
                />
              </Link>

              <p className='font-bold text-base'>
                ${item.price}
              </p>

              <p className='font-bold text-base'>
                {item.name}
              </p>

          </div>
        ))}
      </div>

      <div className='w-screen h-[8vh] flex items-center justify-around font-bold text-2xl text-white'>
        
        <Dialog.Root>
          <Dialog.Trigger className='w-[100px]'>
            <span 
              onClick={() => clearCart('cart')}
              className='bg-black p-4 w-fit rounded-lg cursor-pointer'>
              Clear cart
            </span>
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

        <span className='bg-black p-4 w-fit rounded-lg'>
         Total: ${cartTotalToPay}
        </span>

      </div>
    </>
  )
}

export default Cart