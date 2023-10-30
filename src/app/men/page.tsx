import { Button } from '@/components/ui/button'
import { ArrowDown, SlidersHorizontal } from 'lucide-react'
import React from 'react'

const Men = () => {
  return (

    // men page
    <main>

      {/* presentation */}
      <div className="h-[40vh] bg-[url('assets/men.png')] bg-center bg-cover flex items-center justify-start px-44">
        <div className="flex flex-col gap-4">
          <h1 className="text-7xl font-bold">Male section available!</h1>

          <span className="w-2/4 text-zinc-900">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et ullam dolorem ad, exercitationem doloribus nostrum voluptatum odit doloremque! Debitis est iure nobis molestiae vel tempore quia quis minima harum sunt?
          </span>

          <Button className="w-64 mt-12 bg-ground text-zinc-300 gap-1">
            See products
            <ArrowDown className="w-4 h-4"/>
          </Button>
        </div>
      </div>

      {/* products section */}
      <div className="bg-zinc-100 flex items-center flex-col gap-16 py-5 px-32">

        {/* filter management */}
        <div className='flex items-center justify-between w-full'>
          <div className='flex space-x-2 items-center border-r border-black px-2'>
            <SlidersHorizontal className='w-4 h-4'/>
            <h2>Filters</h2>
          </div>

          <div className='flex'>
            <span>
              Results
            </span>

            
          </div>
        </div>
      </div>
    </main>
  )
}

export default Men