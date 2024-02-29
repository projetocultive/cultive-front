import cultive from '../../assets/img/cultive.png';
import { UserCircle } from '@phosphor-icons/react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { useContext } from 'react';
import { toastAlerta } from '../../utils/toastAlerta';

function Navbar() {
  
  let navigate = useNavigate()

  const { usuario, handleLogout } = useContext(AuthContext)

  function logout() {
      handleLogout()
      toastAlerta('Usuário deslogado com sucesso', "sucesso")
      navigate('/login')
  }

  // let navbarComponent

  return (
    <>
      <div className="w-full bg-teal-900 text-orange-100 flex justify-center py-4">
        <div className="container flex justify-between text-lg">
          <div className="">
            <img src={cultive} alt="" className="w-2/3" />
          </div>

          <div className="flex justify-center items-center m-3 gap-14">
            <Link
              to="/home"
              className="font-size: text-1xl font-league hover:bg-amber-50 hover:text-teal-800 py-1 px-4 rounded duration-300 cursor-pointer"
            >
              Início
            </Link>
            <Link
              to="/produtos"
              className="font-size: text-1xl font-league hover:bg-amber-50 hover:text-teal-800 py-1 px-4 rounded duration-300 cursor-pointer"
            >
              Produtos
            </Link>
            <Link
              to="/categorias"
              className="font-size: text-1xl font-league hover:bg-amber-50 hover:text-teal-800 py-1 px-4 rounded duration-300 cursor-pointer"
            >
              Categorias
            </Link>
            <Link
              to="/equipe"
              className="font-size: text-1xl font-league hover:bg-amber-50 hover:text-teal-800 py-1 px-4 rounded duration-300 cursor-pointer"
            >
              Equipe
            </Link>
            <Link
              to="/contato"
              className="font-size: text-1xl font-league hover:bg-amber-50 hover:text-teal-800 py-1 px-4 rounded duration-300 cursor-pointer"
            >
              Contato
            </Link>
            <Link
              to="/quemSomos"
              className="font-size: text-1xl font-league hover:bg-amber-50 hover:text-teal-800 py-1 px-4 rounded duration-300 cursor-pointer"
            >
              Quem somos?
            </Link>
            <Link
              to="/login"
              className="font-size: text-1xl flex font-league hover:bg-amber-50 hover:text-teal-800 py-1 px-4 rounded duration-300 cursor-pointer gap-2"
            >
              {' '}
              Login <UserCircle size={28} color="#fbeddb" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
