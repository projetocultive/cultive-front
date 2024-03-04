import { Link } from 'react-router-dom';
import Produto from '../../../models/Produto';
import {
  Coins,
  PencilSimple,
  ShoppingCart,
  Trash,
} from '@phosphor-icons/react';

interface CardProdutosProps {
  post: Produto;
}

function CardProdutos({ post }: CardProdutosProps) {
  return (
    <>
      {/* <div classNameName="bg-white rounded-lg shadow-md overflow-hidden">
        <img
          src={post.foto}
          alt="Organic Food"
          classNameName="w-full h-60 object-cover object-center"
        />
        <div classNameName="p-6">
          <h2 classNameName="text-xl font-semibold mb-2">{post.nome}</h2>
          <p classNameName="text-gray-600 mb-4">{post.quantidade}</p>
          <p classNameName="text-gray-600 mb-4">{post.peso}</p>
          <p classNameName="text-gray-600 mb-4">{post.preco}</p>
          <p classNameName="text-gray-600 mb-4">
            {' '}
            Categoria: {post.categoria?.descricao}
          </p>
          <div classNameName="flex items-center justify-between">
            <Link to="/recipe/1" classNameName="text-teal-500 hover:text-teal-700">
              Ver produto
            </Link>
            <div classNameName="flex items-center">
              <Clock size={16} classNameName="mr-1" />
              <span classNameName="text-gray-600">30 min</span>
            </div>
          </div>
        </div>
        <div classNameName="flex">
          <Link
            to={`/editarProduto/${post.id}`}
            classNameName="w-full text-white bg-teal-400 hover:bg-teal-500 flex items-center justify-center py-2"
          >
            <button>Editar</button>
          </Link>
          <Link
            to={`/deletarProduto/${post.id}`}
            classNameName="text-white bg-red-300 hover:bg-red-400 w-full flex items-center justify-center"
          >
            <button>Deletar</button>
          </Link>
        </div>
      </div>

      <div className="max-w-2xl mx-auto"> */}

      <div className="bg-white  shadow-md text-center rounded-lg max-w-sm">
        <a href="#">
          <img className="rounded-full" src={post.foto} alt="product image" style={{ maxWidth: '300px', maxHeight: '300px' }}/>
          <br />
        </a>
        <div className="px-5 pb-5">
          <a href="#">
            <h3 className=" text-gray-800 font-semibold text-xl tracking-tight">
              <p className="text-center"> </p>
              {post.nome}
            </h3>
            <br />
            <h3 className=" text-gray-800 font-semibold text-xl tracking-tight ">
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
          <Link
            to={`/editarProduto/${post.id}`}
            className="w-full rounded text-white bg-teal-400 hover:bg-teal-500 flex items-center justify-center py-2"
          >
            <button>
              <PencilSimple size={20} />
            </button>
          </Link>
          <Link
            to={`/deletarProduto/${post.id}`}
            className="text-white rounded bg-red-300 hover:bg-red-400 w-full flex items-center justify-center"
          >
            <button>
              <Trash size={20} />
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default CardProdutos;
