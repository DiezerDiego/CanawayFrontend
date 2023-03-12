import React from 'react'
import Logo from '../../public/SVG/Recurso 6.svg'
export const Footer = () => {
  return (
    <div className='mt-4 xs:px-6 my-4 px-4  border-t-2 border-slate-100 sm:px-14'>

    <footer className='flex items-center mt-4'
    
    >
                <img src={Logo} alt="" className='w-12' />
        <a href="" className='ml-2 font-medium text-xl'><span className='text-xl font-bold'>D</span>iego <span className='text-xl font-bold'>C</span>ode</a>
    </footer>
    
    </div>
  )
}
