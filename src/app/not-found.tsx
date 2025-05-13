import PublicNavbar from '@/sharedComponets/ui/header/PublicNavbar'
import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
   <>
   <PublicNavbar />
    <div className='w-full h-full min-h-[600px] flex flex-col items-center justify-center'>
       <h1 className='acp_fs-3xl text-center'>404</h1>
         <p>Sorry, the page you are looking for does not exist.</p>
         <Link href="/" className='mt-10 hover:underline duration-300'>Home</Link>
    </div>
    
   </>
  )
}
