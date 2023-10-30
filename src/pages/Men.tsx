import React from 'react'
import Footer from '../components/Footer'

import NavBarProdsPages from '../components/NavBarProdsPages'
import Jackets from '../extra_components/men/Jackets'
import MenPresentation from '../extra_components/men/MenPresentation'
import Office from '../extra_components/men/Office'
import Shoes from '../extra_components/men/Shoes'
import Tshirts from '../extra_components/men/Tshirts'
import { useSteps } from '../hooks/useSteps'

const Men = () => {

    const components = [
        <Shoes/>, //0
        <Office/>, // 1
        <Tshirts/>, // 2
        <Jackets/> // 3
    ]

    // const {getProds, prods} = useContext(ProdContext)
    const {changeSteps, currentStep, currentComponent} = useSteps(components)

  return (
    <main className='main-women'>
      <NavBarProdsPages/>
      <MenPresentation/>
      <section className='prods text-center flex flex-col items-center justify-center'>
        <h1 className='font-bold p-16'>Choose by categories</h1>

        <div className='w-screen h-fit'>
          <ul className='types-ul flex items-center justify-around shadow-md h-fit'>
              {
                currentStep === 0 

                  ?

                  <li onClick={()=>changeSteps(0)} className='cursor-pointer text-[1.2rem] text-zinc-400 font-bold border-solid border-b-2 border-b-orange-600'>
                    Footwear
                  </li>

                  :

                  <li onClick={()=>changeSteps(0)} className='cursor-pointer text-[1.2rem] text-zinc-400 font-bold'>
                    Footwear
                  </li>
              }

              {
                currentStep === 1

                  ?

                  <li onClick={()=>changeSteps(1)} className='cursor-pointer text-[1.2rem] text-zinc-400 font-bold border-solid border-b-2 border-b-orange-600'>
                    Office
                  </li>

                  :

                  <li onClick={()=>changeSteps(1)} className='cursor-pointer text-[1.2rem] text-zinc-400 font-bold'>
                    Office
                  </li>
              }

              {
                currentStep === 2

                  ?

                  <li onClick={()=>changeSteps(2)} className='cursor-pointer text-[1.2rem] text-zinc-400 font-bold border-solid border-b-2 border-b-orange-600'>
                    Shirts
                  </li>

                  :

                  <li onClick={()=>changeSteps(2)} className='cursor-pointer text-[1.2rem] text-zinc-400 font-bold'>
                    Shirts
                  </li>
              }

              {
                currentStep === 3

                  ?

                  <li onClick={()=>changeSteps(3)} className='cursor-pointer text-[1.2rem] text-zinc-400 font-bold border-solid border-b-2 border-b-orange-600'>
                    Jackets
                  </li>

                  :

                  <li onClick={()=>changeSteps(3)} className='cursor-pointer text-[1.2rem] text-zinc-400 font-bold'>
                    Jackets
                  </li>
              }

          </ul>

          <div className='w-full flex items-center justify-center flex-col'>
            {currentComponent}
          </div>
        </div>
      </section>

      <Footer/>
    </main>
  )
}

export default Men