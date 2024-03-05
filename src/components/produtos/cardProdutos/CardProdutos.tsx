import { Link, useNavigate } from 'react-router-dom';
import Produto from '../../../models/Produto';
import {
  Clock,
  Coins,
  PencilSimple,
  ShoppingCart,
  Trash,
} from '@phosphor-icons/react';

interface CardProdutosProps {
  post: Produto;
}

function CardProdutos({ post }: CardProdutosProps) {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="bg-white shadow-md text-center rounded-lg"
        style={{ height: '360px', display: 'flex', flexDirection: 'column' }}
      >
        <a href="#" style={{ alignSelf: 'center' }}>
          <img
            className="rounded-full"
            src={post.foto}
            alt="product image"
            style={{ height: '150px' }}
          />
          <br />
        </a>
        <div className="px-5 pb-5">
          <a href="#">
            <h3 className="text-gray-800 font-semibold text-xl tracking-tight">
              <p className="text-center"></p>
              {post.nome}
            </h3>
            <br />
            <h3 className="text-gray-800 font-semibold text-xl tracking-tight">
              Peso em kg = {post.peso}
            </h3>
          </a>
          <br />
          <div className="flex items-center justify-between">
            <span className="flex text-3xl font-bold text-gray-700">
              <Coins size={30} /> R$ {post.preco}
            </span>

            <a
              href="#"
              className="flex text-white bg-teal-600 hover:bg-teal-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              <ShoppingCart size={20} />
            </a>
          </div>
        </div>
        <div className="flex">
          <button
            onClick={() => navigate(`/editarProduto/${post.id}`)}
            style={{ alignItems: 'center', width: '50%' }}
            className='rounded text-white bg-teal-400 hover:bg-teal-500 flex items-center justify-center py-2"'
          >
            <PencilSimple size={22} />
          </button>

          <button
            onClick={() => navigate(`/deletarProduto/${post.id}`)}
            style={{
              alignItems: 'center',
              width: '50%',
            }}
            className='rounded text-white bg-red-400 hover:bg-red-500 flex items-center justify-center py-"'
          >
            <Trash size={22} />
          </button>
        </div>
      </div>
    </>
  );
}

export default CardProdutos;