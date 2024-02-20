import React from 'react'
import './Contato.css'

function Contato() {


  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold">
        <div className="fundoContato hidden lg:block"></div>
        <form className='flex justify-center items-center flex-col w-2/8 gap-6' >
          <h2 className='text-teal-900 text-5xl'> Fale com a gente! </h2>
          <div className="flex flex-col w-full">
            <label htmlFor="nome"></label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Nome"
              className="border-2 border-teal-700 rounded p-3"
             
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="email"></label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Digite seu email"
              className="border-2 border-teal-700 rounded p-3"
            />
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="assunto"></label>
            <input 
              type="text"
              id="assunto"
              name="assunto"
              placeholder ="Assunto"
              className="border-2 border-teal-700 rounded p-3"
            />
          </div>

          <div className="flex flex-col w-full">
          <label htmlFor="mensagem"></label>
          <textarea 
          name="mensagem" 
          id="mensagem" 
          placeholder='Digite aqui sua mensagem' 
          className="border-2 border-teal-700 rounded p-3" rows={6} cols={60}>

          </textarea>
          </div>


          <div className="flex justify-around w-full gap-8">
            <button className='rounded text-white bg-teal-900 hover:bg-teal-700 w-1/2 py-2' type='submit'>
              Enviar mensagem
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Contato