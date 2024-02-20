import React from 'react'
import {  Envelope,  } from '@phosphor-icons/react'

function Footer() {
 
  

  return (
    <>
        <div className="flex justify-center bg-teal-900 text-white">
          <div className="container flex flex-col items-center py-4 ">
            <p className='text-xl font-bold'> Cultive &copy; </p>
            
            <div className='flex gap-12'>

            <p className=''>Home</p>
            <p>Sobre nós</p>
            <p>Contato </p>
            <p>Equipe</p>
            </div>
            

            <div className='flex gap-2'>
                <Envelope size={20} />
            </div>
          </div>
        </div>
      </>
  )
}

export default Footer