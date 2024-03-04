/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import { buscar, deletar } from '../../../services/Service';
import Produto from '../../../models/Produto';
import { toastAlerta } from '../../../utils/toastAlerta';

function DeletarProduto() {
  const [produto, setProduto] = useState<Produto>({} as Produto);

  const navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarPorId(id: string) {
    try {
      await buscar(`/produto/${id}`, setProduto, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error: any) {
      if (error.toString().includes('403')) {
        toastAlerta('O token expirou, favor logar novamente', 'info');
        handleLogout();
      }
    }
  }

  useEffect(() => {
    if (token === '') {
      toastAlerta('Você precisa estar logado', 'info');
      navigate('/login');
    }
  }, [token]);

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  function retornar() {
    navigate('/produtos');
  }

  async function deletarProduto() {
    try {
      await deletar(`/produto/${id}`, {
        headers: {
          Authorization: token,
        },
      });

      toastAlerta('Produto apagado com sucesso', 'sucesso');
    } catch (error) {
      toastAlerta('Erro ao apagar o Produto', 'erro');
    }

    retornar();
  }
  return (
    <>
    <div className="mt-16 container w-1/3 mx-auto">
      <h1 className="text-4xl text-center my-4">Deletar produto</h1>

      <p className="text-center font-semibold mb-4">
        Você tem certeza de que deseja apagar o produto a seguir?
      </p>

      <div className="text-center border flex flex-col rounded-2xl overflow-hidden justify-between">
        <header className="py-2 px-6 bg-teal-600 text-white font-bold text-2xl uppercase">
          Produto
        </header>
        <div className="p-4">
          {/* <img src={produto.foto} alt="" /> */}
          <p className="text-xl h-full">{produto.nome}</p>
          <p>{produto.categoria?.descricao}</p>
        </div>
        <div className="flex">
          <button
            className="text-slate-100 bg-red-300 hover:bg-red-400 w-full py-2"
            onClick={retornar}
          >
            Não
          </button>
          <button
            className="w-full text-slate-100 bg-teal-400 hover:bg-teal-500 flex items-center justify-center"
            onClick={deletarProduto}
          >
            Sim
          </button>
        </div>
      </div>
    </div>
    </>
  );
}

export default DeletarProduto;
