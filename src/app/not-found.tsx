
import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
   <>
    <div className='w-full h-full min-h-[600px] flex flex-col items-center justify-center'>
       <h1 className='wt_fs-4xl text-center mb-2'>404</h1>
         <p>Sorry, the page you are looking for does not exist.</p>
         <Link href="/" className='mt-10 hover:underline duration-300'>Home</Link>
    </div>
    
   </>
  )
}
