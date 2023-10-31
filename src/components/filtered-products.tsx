'use client'
import { api } from '@/lib/axios'
import { Clothe, Product } from '@/types/types'
import React, { useEffect, useState } from 'react'
import ProductCard from './product-card'

interface FilteredProductsProps {
  clothe: Clothe
}

const FilteredProducts = ({ clothe }: FilteredProductsProps) => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])

  async function getFilteredProducts(clothe: Clothe){
    const response = await api.get('/products')
    const products: Product[] = response.data

    const filtered = products.filter((prod) => {
      prod.clothe === clothe
    })

    setFilteredProducts(filtered)
  }

  useEffect(() => {
    getFilteredProducts(clothe)
  }, [filteredProducts])

  return (
    <div>
      {filteredProducts.map((prod => {
        return (
          <ProductCard 
            key={prod.id}
            id={prod.id}
            name={prod.name}
            clothe={prod.clothe}
            price={prod.price}
            url={prod.url}
          />
        )
      }))}
    </div>
  )
}

export default FilteredProducts