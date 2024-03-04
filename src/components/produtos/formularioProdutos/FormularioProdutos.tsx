/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import Produto from '../../../models/Produto';
import Categoria from '../../../models/Categoria';
import { buscar, atualizar, cadastrar } from '../../../services/Service';
import { AxiosError } from 'axios';
import { toastAlerta } from '../../../utils/toastAlerta';

function FormularioProdutos() {
  const navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  const [categorias, setCategorias] = useState<Categoria[]>([]);

  const [categoria, setCategoria] = useState<Categoria>({
    id: 0,
    nome: '',
    descricao: '',
  });

  const [produto, setProduto] = useState<Produto>({
    id: 0,
    nome: '',
    quantidade: 0,
    peso: 0,
    preco: 0,
    foto: '',
    brinde: '',
    classificacao: '',
    data: '',
    categoria: null,
    usuario: null,
  });

  async function buscarProdutoPorId(id: string) {
    await buscar(`/produto/${id}`, setProduto, {
      headers: {
        Authorization: token,
      },
    });
  }

  async function buscarCategoriaPorId(id: string) {
    await buscar(`/categoria/${id}`, setCategoria, {
      headers: {
        Authorization: token,
      },
    });
  }

  async function buscarCategorias() {
    await buscar('/categoria', setCategorias, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    if (token === '') {
      toastAlerta('Você precisa estar logado', 'info');
      navigate('/login');
    }
  }, [token]);

  useEffect(() => {
    buscarCategorias();
    if (id !== undefined) {
      buscarProdutoPorId(id);
    }
  }, [id]);

  useEffect(() => {
    setProduto({
      ...produto,
      categoria: categoria,
    });
  }, [categoria]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setProduto({
      ...produto,
      [e.target.name]: e.target.value,
      categoria: categoria,
      usuario: usuario,
    });
  }

  function retornar() {
    navigate('/produtos');
  }

  async function gerarNovoProduto(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    if (id != undefined) {
      try {
        await atualizar(`/produto/atualizar`, produto, setProduto, {
          headers: {
            Authorization: token,
          },
        });
        toastAlerta('Produto atualizado com sucesso', 'sucesso');
        retornar();
      } catch (error: any) {
        if (error.toString().includes('403')) {
          toastAlerta('O token expirou, favor logar novamente', 'info');
          handleLogout();
        } else {
          toastAlerta('Erro ao atualizar o Produto', 'erro');
        }
      }
    } else {
      try {
        await cadastrar(`/produto/cadastrar`, produto, setProduto, {
          headers: {
            Authorization: token,
          },
        });

        toastAlerta('Produto cadastrado com sucesso','sucesso');
        retornar();
      } catch (error: any) {
        if (error.toString().includes('403')) {
          toastAlerta('O token expirou, favor logar novamente', 'info');
          handleLogout();
        } else {
          console.log(error);
          toastAlerta('Erro ao cadastrar o Produto', 'info');
        }
      }
    }
  }

  const carregandoCategoria = categoria.descricao === '';

  return (
    <>
    <div className="container bg-gray-100 text-teal-800 file:shadow-2xl rounded-2xl flex flex-col mx-auto items-center pb-4">
      <h1 className="text-4xl text-center my-8">
        {id !== undefined ? 'Editar Produto' : 'Cadastrar Produto'}
      </h1>

      <form onSubmit={gerarNovoProduto} className="flex flex-col w-1/2 gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="nome">Nome do Produto</label>
          <input
            value={produto.nome}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="text"
            placeholder="Digite o nome do produto"
            name="nome"
            required
            className="w-full block bg-white text-gray-500 font-semibold rounded-lg
              px-4 py-3 mt-6"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="texto">Quantidade do produto</label>
          <input
            value={produto.quantidade}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="text"
            placeholder="Digite uma quantidade"
            name="quantidade"
            required
            className="w-full block bg-white text-gray-500 font-semibold rounded-lg
              px-4 py-3 mt-6"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="peso">Peso do produto</label>
          <input
            value={produto.peso}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="text"
            placeholder="Digite um peso"
            name="peso"
            required
            className="w-full block bg-white text-gray-500 font-semibold rounded-lg
              px-4 py-3 mt-6"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="preco">Preço do produto</label>
          <input
            value={produto.preco}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="text"
            placeholder="Digite um preço"
            name="preco"
            required
            className="w-full block bg-white text-gray-500 font-semibold rounded-lg
              px-4 py-3 mt-6"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="foto">Foto do produto</label>
          <input
            value={produto.foto}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="text"
            placeholder="Foto do produto"
            name="foto"
            className="w-full block bg-white text-gray-500 font-semibold rounded-lg
              px-4 py-3 mt-6"
          />
        </div>
        
        <div className="flex flex-col gap-2">
          <label htmlFor="data">Data</label>
          <input
            value={produto.data}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="date"
            placeholder="Digite uma data"
            name="data"
            className="w-full block bg-white text-gray-500 font-semibold rounded-lg
              px-4 py-3 mt-6"
          />
        </div>
        <div className="flex flex-col gap-2">
          <p>Categoria do produto</p>
          <select
            name="categoria"
            id="categoria"
            className="w-full block bg-white text-gray-500 font-semibold rounded-lg
              px-4 py-3 mt-6"
            onChange={(e) => buscarCategoriaPorId(e.currentTarget.value)}
          >
            <option value="" selected disabled>
              Selecione uma categoria
            </option>
            {categorias.map((categoria) => (
              
                <option value={categoria.id}>{categoria.nome}</option>
            
            ))}
          </select>
        </div>
        <button
          disabled={carregandoCategoria}
          type="submit"
          className="rounded disabled:bg-slate-200 bg-gray-400 hover:bg-teal-700 text-white font-bold w-1/2 mx-auto block py-2"
        >
          {carregandoCategoria ? (
            <span>Carregando</span>
          ) : id !== undefined ? (
            'Editar'
          ) : (
            'Cadastrar'
          )}
        </button>
      </form>
    </div>
    </>
  );
}

export default FormularioProdutos;
