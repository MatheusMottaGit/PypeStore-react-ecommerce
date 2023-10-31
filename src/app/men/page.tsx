'use client'
import FilteredProducts from '@/components/filtered-products'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Clothe, SelectValues } from '@/types/types'
import { ArrowDown, SlidersHorizontal } from 'lucide-react'
import React, { useState } from 'react'

const selectValues: SelectValues[] = [
  {
    id: '23892',
    value: 't-shirt',
    title: 'T-shirts',
    clothe: 't-shirt',
  },
  {
    id: '21123',
    value: 'pants',
    title: 'Pants',
    clothe: 'pants',
  },
  {
    id: '28323',
    value: 'jackets',
    title: 'Jackets',
    clothe: 'jacket',
  },
  {
    id: '22334',
    value: 'shoes',
    title: 'Shoes',
    clothe: 'shoes',
  },
]

const Men = () => {
  const [clothe, setClothe] = useState<Clothe>("t-shirt")

  return (
    // men page
    <main>

      {/* presentation */}
      <div className="h-[40vh] bg-[url('../assets/men.png')] bg-center bg-cover flex items-center justify-start px-44">
        <div className="flex flex-col gap-4">
          <h1 className="text-7xl font-bold">Male section available!</h1>

          <span className="w-2/4 text-zinc-900">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et ullam dolorem ad, exercitationem doloribus nostrum voluptatum odit doloremque! Debitis est iure nobis molestiae vel tempore quia quis minima harum sunt?
          </span>

          <Button className="w-64 mt-12 bg-ground text-zinc-300 gap-1">
            View products
            <ArrowDown className="w-4 h-4"/>
          </Button>
        </div>
      </div>

      {/* products section */}
      <div className="bg-zinc-100 flex items-center flex-col gap-16 py-5 px-32">

        {/* filter management bar*/}
        <div className='flex items-center justify-between w-full'>
          <div className='flex space-x-2 items-center'>
            <SlidersHorizontal className='w-4 h-4'/>
            <h2 className='border-r px-2 border-r-ground'>Filters</h2>

            <span className='flex items-center gap-2 pl-3'>
              Results
              <Badge>
                0
              </Badge>
            </span>
          </div>

          <Select>
            <SelectTrigger className='w-52'>
              <SelectValue placeholder='Sort By'/>
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {selectValues.map((select) => {
                  return (
                    <SelectItem key={select.id} value={select.value} onClick={() => setClothe(select.clothe)}>
                      {select.title}
                    </SelectItem>
                  )
                })}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {/* filtered products */}
        <FilteredProducts 
          clothe={clothe}
        />
      </div>
    </main>
  )
}

export default Men