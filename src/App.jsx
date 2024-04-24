import { useState } from 'react'
import Nav from './Nav'
import Heading from './Heading'
import Information from './Information'
import Output from './Output'
import AboutUs from './AboutUs'
import ContactUs from './ContactUs'



function App() {
  

  return (
    <>
    
    <div className='bg-slate-900'>
     <Nav />
    </div>

    <div className='bg-gray-700'>
      <Heading />
      <Information />
      <Output />
    </div>

    <div className='bg-gray-700 px-8 py-20 flex flex-row justify-center gap-10'>

      <AboutUs />
      <ContactUs />
      <h1 className='text-white'>Coming soon</h1>

    

    
      
    </div>

   
    
    </>
  )
}

export default App









