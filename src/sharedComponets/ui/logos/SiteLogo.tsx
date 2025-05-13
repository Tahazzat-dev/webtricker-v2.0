import Image from 'next/image'
import React from 'react'
import siteLogo from '@/assets/images/navbar/site-logo.png'
import Link from 'next/link'

export default function SiteLogo() {
  return (
    <Link href="/" className='w-full'>
        <Image className='inline dark:hidden w-[160px] md:w-[200px] lg:w-[220px] xl:w-[250px] 2xl:w-[282px] h-auto' src={siteLogo} width={282} height={74} alt='Site logo' />
        <h3 className='dark:block hidden acp_fs-4xl '>Accompanied</h3>
        {/* <Image src={siteLogo} width={282} height={74} alt='Site logo' /> */}
    </Link>
  )
}
