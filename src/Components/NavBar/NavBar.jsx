import React from 'react'
import {Link} from 'react-router-dom'

export const NavBar = () => {
  return (
    <div>
        <div>
        <nav className='bg-black h-auto'>
            <div className='p-4 '>
                <h1 className='flex place-content-center text-white text-3xl  sm:text-4xl md:text-6xl lg:text-6xl xl:text-6xl font-bold  '>GYM  <h1 className='text-red-500 text-3xl  sm:text-4xl md:text-6xl lg:text-6xl xl:text-6xl'> TURONES</h1></h1>
            </div>
            <div>
                <ul className='p-4 flex place-content-center '>
                    <Link to={`/`}>
                    <li className='text-white text-lg p-2 text-center hover:text-red-500'>| Home |   </li>
                    </Link>
                    <Link to={`/nosotros`}>
                    <li className='text-white text-lg p-2 text-center hover:text-red-500'>Nosotros |</li>
                    </Link>
                    <Link to={`/products`}>
                    <li className='text-white text-lg p-2 text-center hover:text-red-500'>Productos |</li>
                    </Link>
                    
                </ul>
            </div>
        </nav>
        </div>
    </div>
  )
}
