import React from 'react'

import men from '../assets/men.png'

const ToMenPage = () => {
  return (
    <div className='h-[80vh] w-screen flex items-center justify-center gap-24 bg-orange-200 shadow-inner'>
            <div className='w-1/4 text-center text-[1.6rem] font-bold flex flex-col items-center'>
                <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium perspiciatis laborum officia nobis, 
                    voluptas omnis corrupti est atque! 
                    Ab quisquam culpa itaque est eligendi repudiandae quasi voluptates vitae quis vero.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, officia distinctio. 
                    Praesentium, quas temporibus ut quo atque tempore provident fuga doloribus, 
                    ratione quisquam voluptas dicta soluta autem, expedita incidunt asperiores!
                </span>
                <button className='bg-zinc-700 w-1/4 p-6 rounded-none font-normal text-white m-10'>
                    See more
                </button>
            </div>
            <img src={men} className='h-[450px] w-[400px] rounded-xl'/>
    </div>
  )
}

export default ToMenPage