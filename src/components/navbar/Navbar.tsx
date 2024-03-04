/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useContext, useState } from 'react';
import cultive from '../../assets/img/cultivelogo.png';
import {
  UserCircle,
  ShoppingCart,
  Heart,
  MagnifyingGlass,
} from '@phosphor-icons/react';
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { toastAlerta } from '../../utils/toastAlerta';

function Navbar() {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isUserOpen, setIsUserOpen] = useState(false)
  const { usuario, handleLogout } = useContext(AuthContext)

  function logout() {
    handleLogout()
    toastAlerta('Usuário deslogado com sucesso', 'sucesso')
    Navigate('/login')
  }

  const toggleProductsDropdown = () => {
    setIsProductsOpen(!isProductsOpen);
  };

  const toggleUserDropdown = () => {
    setIsUserOpen(!isUserOpen);
  };

  const closeDropdowns = () => {
    setIsProductsOpen(false);
    setIsUserOpen(false);
  };

  return (
    <>
      <div className="w-full bg-teal-800 text-white flex justify-center py-2">
        <div className="container flex justify-between text-lg">
          <div className="">
            <Link to="/">
              <img src={cultive} alt="" className="w-2/3" />
            </Link>
          </div>

          <div className="flex justify-center items-center m-2 gap-2 relative">
            {/* Botão de Produtos */}
            <Link
              to="/produtos"
              className="font-legue hover:bg-gray-200 hover:text-teal-800 py-1 px-2 rounded-3xl duration-300"
            >
              Produtos{' '}
            </Link>
            <Link
              to="/categorias"
              className="font-legue hover:bg-gray-200 hover:text-teal-800 py-1 px-2 rounded-3xl duration-300"
            >
              Categorias
            </Link>

            {/* Links de navegação */}
            <Link
              to="/quemSomos"
              className="font-legue hover:bg-gray-200 hover:text-teal-800 py-1 px-2 rounded-3xl duration-300"
            >
              Quem somos?
            </Link>
            <Link
              to="/contato"
              className="font-legue hover:bg-gray-200 hover:text-teal-800 py-1 px-2 rounded-3xl duration-300"
            >
              Contato
            </Link>

            {/* Barra de pesquisa */}
            <div className="relative">
              <input
                type="text"
                id='pesquisa'
                name='pesquisa'
                placeholder="Pesquisar..."
                className="border border-gray-300 text-teal-800 rounded-3xl py-1 px-2 pl-8 focus:outline-none"
              />
              <span className="absolute left-2 top-1/2 transform -translate-y-1/2">
                <MagnifyingGlass size={24} />
              </span>
              <button
                onClick={closeDropdowns}
                className="absolute right-0 top-0 mt-1 mr-2 font-legue bg hover:bg-gray-400 hover:text-teal-800 py-1 px-2 rounded-3xl duration-300 focus:outline-none"
              >
                <MagnifyingGlass size={24} className="text-teal-600" />
              </button>
            </div>
            {/* Ícone do usuário */}
            <div className="relative">
              <Link to="/login">
                <button
                  onClick={closeDropdowns}
                  className="font-legue hover:bg-gray-200 hover:text-teal-800 py-1 px-2 rounded-3xl duration-300 focus:outline-none"
                >
                  <UserCircle size={20} />
                </button>
              </Link>
            </div>

            {/* Ícone do carrinho de compras */}
            <div className="relative">
              <button
                onClick={closeDropdowns}
                className="font-legue hover:bg-gray-200 hover:text-teal-800 py-1 px-2 rounded-3xl duration-300 focus:outline-none"
              >
                <ShoppingCart size={20} />
              </button>
            </div>

            {/* Ícone de favoritos */}
            <div className="relative">
              <button
                onClick={closeDropdowns}
                className="font-legue hover:bg-gray-200 hover:text-teal-800 py-1 px-2 rounded-3xl duration-300 focus:outline-none"
              >
                <Heart size={20} />
              </button>
              <Link to='' onClick={logout} className='hover:font-bold'>Sair</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
