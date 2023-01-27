import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faInstagram} from '@fortawesome/free-brands-svg-icons'





export const Footer = () => {
   
  return (
    <div>
        <footer className='bg-black h-auto '>
            <div>
            <Link to={`/`}>
            <h1 className='flex place-content-center text-white text-3xl  sm:text-4xl md:text-6xl lg:text-6xl xl:text-6xl font-bold  '>GYM  <h1 className='text-red-500 text-3xl  sm:text-4xl md:text-6xl lg:text-6xl xl:text-6xl'> TURONES</h1></h1>
            </Link>
            <div>
                <div className='text-white text-4xl text-center hover:text-red-500'>
                    <a href='https://www.instagram.com/gymturones/?hl=es'>
                        <FontAwesomeIcon icon={faInstagram}/>
                        </a>
                    </div>
            </div>

            </div>
        </footer>
    </div>
  )
}
