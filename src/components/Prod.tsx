import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { CartContext } from '../contexts/CartContext'
import { ProdContext } from '../contexts/ProdContext'
import { Prods } from '../types/types'
import Footer from './Footer'

import NavBarProdsPages from './NavBarProdsPages'

import * as Dialog from '@radix-ui/react-dialog'
import { MdOutlineLibraryAdd } from 'react-icons/md'
import ItemSavedModal from '../extra_components/saved/ItemSavedModal'

const Prod = () => {

  const { id } = useParams()

  const { individualProd, getProdDetails } = useContext(ProdContext)
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
    const url = `http://localhost:3000/products/${id}`
    getProdDetails(url)
  }, [])

  return (
    <>
    {
      individualProd &&
         <>
          <NavBarProdsPages/>

          <section className='h-[85vh] w-screen gap-32 flex items-center justify-center'>
            <div className='h-[650px] w-[400px] shadow-2xl shadow-zinc-500 flex items-center justify-center'>
              <img src={individualProd.url}/>
            </div>
            <div className='flex flex-col items-start justify-start h-4/5 w-1/5'>
              <span className='font-bold text-[2rem] mt-10'>
                {individualProd.name}
              </span>

              <p className='font-bold text-[1.4rem] mt-7'>
                ${individualProd.price.toString()}
              </p>

              <p className='w-1/2 mt-10 text-[1rem] opacity-75'>
                {individualProd.overview}
              </p>

              <div className='flex items-start justify-start -ml-16 mt-5'>
              <Dialog.Root>
                  <Dialog.Trigger>
                    <button onClick={()=>{
                      handleClick(individualProd)
                    }} className='w-[100px] text-[.9rem] bg-orange-500 text-zinc-200'>
                       Add to cart
                    </button>
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
                <button className='w-[130px] -ml-10 mt-9 text-[.9rem] bg-orange-500 text-zinc-200'>
                  Buy
                </button>
              </div>

            </div>
          </section>

          <Footer/>
         </>
    }
    </>
  )
}

export default Prod
