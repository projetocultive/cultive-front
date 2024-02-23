
import cultive from '../../assets/img/cultive.png';
import { UserCircle } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

function Navbar() {
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
              className="font-size: text-1xl font-league hover:font-bold cursor-pointer"
            >
              Início
            </Link>
            <Link
              to="/produtos"
              className="font-size: text-1xl font-league hover:font-bold cursor-pointer"
            >
              Produtos
            </Link>
            <Link
              to="/categorias"
              className="font-size: text-1xl font-league hover:font-bold cursor-pointer"
            >
              Categorias
            </Link>
            <Link
              to="/equipe"
              className="font-size: text-1xl font-league hover:font-bold cursor-pointer"
            >
              Equipe
            </Link>
            <Link
              to="/contato"
              className="font-size: text-1xl font-league hover:font-bold cursor-pointer"
            >
              Contato
            </Link>
            <Link
              to="/quemSomos"
              className="font-size: text-1xl font-league hover:font-bold cursor-pointer"
            >
              Quem somos?
            </Link>
            <Link
              to="/login"
              className="font-size: text-1xl flex font-league hover:font-bold cursor-pointer gap-2"
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
