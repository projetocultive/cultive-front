import React from 'react'
import {  Envelope, House, UsersFour,  } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'

function Footer() {
 
  

  return (
    <>
        <div className="flex justify-center bg-teal-900 text-white">
          <div className="container flex flex-col items-center py-4 ">
            <p className='text-xl font-bold'> Cultive &copy; </p>
            
            <div className='flex gap-12 mt-5'>
            <Link
              to="/home"
              className="font-legue flex justify-center items-center gap-2 hover:bg-gray-200 hover:text-teal-800 py-1 px-2 rounded-3xl duration-300"
            >
              <House size={20} /> Início
            </Link>
            
            <Link
              to="/quemSomos"
              className="font-legue flex justify-center items-center gap-2 hover:bg-gray-200 hover:text-teal-800 py-1 px-2 rounded-3xl duration-300"
            >
              <UsersFour size={20} /> Quem somos?
            </Link>
            
            <Link
              to="/contato"
              className="font-legue flex justify-center items-end gap-2 hover:bg-gray-200 hover:text-teal-800 py-1 px-2 rounded-3xl duration-300"
            >
              <Envelope size={20} /> Contato
            </Link>
            </div>

            <div className='flex gap-2'>
                
            </div>
          </div>
        </div>
      </>
  )
}

export default Footer