import LoadingSpinner from '@/sharedComponets/ui/loading/LoadingSpinner'
import React from 'react'

export default function LoadingPage() {
  return (
    <div className='w-full h-screen flex items-center justify-center'>
            <LoadingSpinner
                    totalVisuals={5}
                    containerClass="w-6  h-8"
                    squareClasses={["bg-[#6C63FF]", "bg-[#6C63FF]", "bg-[#6C63FF]","bg-[#6C63FF]", "bg-[#6C63FF]"]}
                  />
    </div>
  )
}
