import React from 'react'
import { Card, CardDescription, CardTitle } from './ui/card'
import Image from 'next/image'
import { Product } from '@/types/types'

const ProductCard = ({ id, name, price, url }: Product) => {
  return (
    <Card key={id} className='rounded-sm text-center space-y-4 p-2'>
      <Image 
        src={url}
        alt=''
        width={200}
        height={200}
        className='h-56'
      />

      <CardTitle>
        {name}
      </CardTitle>
      <CardDescription className='font-semibold'>
        R$ {price}
      </CardDescription>
    </Card>
  )
}

export default ProductCard