/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from '@material-tailwind/react';
import { Link, useNavigate } from 'react-router-dom';

function BotaoProdutos() {
  const navigate = useNavigate();

  return (
    <>
      <div style={{marginRight:"10px"}}>
        <Link
          to="/cadastroProduto"
          className="bg-teal-600 p-5 rounded-3xl text-white hover:text-teal-600 hover:bg-gray-200"
        >
          Cadastrar Produto
        </Link>
      </div>
    </>
  );
}

export default BotaoProdutos;
