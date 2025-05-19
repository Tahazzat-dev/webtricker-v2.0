import React from 'react'
import ServicesBanner from './components/ServicesBanner'
import OurServices from './components/OurServices'
import ServicesPanel from './components/ServicesPanel'

export default function ServicesPage() {
  return (
    <main className="w-full z-0">
     <ServicesBanner />
     <OurServices />
     <ServicesPanel />
    </main>
  )
}
