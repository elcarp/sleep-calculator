'use client'

import Link from 'next/link'
import React from 'react'
import { Vortex } from '~components/ui/vortex'

export default function Hero() {
  return (
    <div className='w-[calc(100%-4rem)] mx-auto rounded-md h-screen overflow-hidden'>
      <Vortex
        backgroundColor='black'
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className='flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full'>
        <h1 className='text-white text-2xl md:text-6xl font-bold text-center'>
          Baby Sleep Calculator
        </h1>
        <p className='text-white text-xs md:text-2xl max-w-xl mt-6 text-center'>
          No one needs to add mental math to their list of things to do when
          you're sleep-deprived. This baby sleep calculator helps estimate nap
          times and bedtime based on wake time and age-appropriate wake windows.
        </p>
        <div className='flex flex-col sm:flex-row items-center gap-4 mt-6'>
          <Link href='#calculator' className='px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]'>
            Get Started
          </Link>
         
        </div>
      </Vortex>
    </div>
  )
}
