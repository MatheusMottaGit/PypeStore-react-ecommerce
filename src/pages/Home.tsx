import React, { useContext, useEffect } from 'react'

import '../../main.css'
import NavBar from '../components/NavBar'
import HomePresentation from '../components/HomePresentation'

import { ProdContext } from '../contexts/ProdContext'
import HomeOptions from '../components/HomeOptions'

import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import ItemSavedModal from '../extra_components/saved/ItemSavedModal'

import * as Dialog from '@radix-ui/react-dialog'
import { MdOutlineLibraryAdd } from 'react-icons/md'
import { CartContext } from '../contexts/CartContext'
import { Prods } from '../types/types'

// import { CartContext } from '../contexts/CartContext'

const Home = () => {
    
    const {getProds, prods} = useContext(ProdContext)

    const {cart, setCart, addItemsToCart} = useContext(CartContext)

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
    <main>

      <NavBar/>

      <HomePresentation/>

      <section className='prods flex flex-col items-center justify-center'>

        <HomeOptions/>

        <div className='w-fit font-bold text-[1.4rem] m-10'>Popular this week</div>
        <div className='populars-grid w-[90%] grid grid-cols-5 m-4'>
          {prods.slice(0, 10).map(prod=>(
            <div key={prod.id} className='each shadow-2xl h-[300px] w-[250px] mb-4 relative overflow-hidden group transition'>
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
              <div className='prod-container w-full h-full flex flex-col justify-center items-center text-[1.6rem] font-bold'>
                <Link to={`/products/${prod.id}`}>
                  <img 
                  className='h-[200px]'
                  src={prod.url}
                  />
                </Link>
                <p className='m-4'>
                  {prod.name}
                </p>
                <p className='m-4'>
                  ${prod.price.toString()}
                </p>
              </div>

            </div>
          ))}
        </div>
        
      </section>

      <Footer/>
      
    </main>
  )
}

export default Home