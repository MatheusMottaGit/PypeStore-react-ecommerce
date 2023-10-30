import Link from 'next/link'
import React from 'react'
import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/hover-card'

const MenuList = () => {
  return (
    <ul className='flex items-center gap-12 text-xs cursor-pointer'>
      <Link href='/'>
        Home
      </Link>

      <HoverCard>
        <HoverCardTrigger>
          Products
        </HoverCardTrigger>
        <HoverCardContent>
          <div className='flex flex-col gap-6'>
            <Link href='/men'>
              Men
            </Link>
            <Link href='/women'>
              Women
            </Link>
          </div>
        </HoverCardContent>
      </HoverCard>

      <Link href='/contact'>
        Contact
      </Link>
    </ul>
  )
}

export default MenuList