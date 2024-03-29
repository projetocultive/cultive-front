import { ChangeEvent, useEffect, useState } from 'react';
import { cadastrarUsuario } from '../../services/Service';
import './Cadastro.css';
import { useNavigate } from 'react-router-dom';
import Usuario from '../../models/Usuario';
import { toastAlerta } from '../../utils/toastAlerta';

function Cadastro() {
  let navigate = useNavigate();

  const [confirmaSenha, setConfirmaSenha] = useState<string>('');

  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: '',
  });

  const [usuarioResposta, setUsuarioResposta] = useState<Usuario>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: '',
  });

  useEffect(() => {
    if (usuarioResposta.id !== 0) {
      back();
    }
  }, [usuarioResposta]);

  function back() {
    navigate('/login');
  }

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
    setConfirmaSenha(e.target.value);
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  }

  async function cadastrarNovoUsuario(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    if (confirmaSenha === usuario.senha && usuario.senha.length >= 8) {
      try {
        await cadastrarUsuario(
          `/usuario/cadastrar`,
          usuario,
          setUsuarioResposta,
        );
        toastAlerta('Usuário cadastrado com sucesso', 'sucesso');
      } catch (error) {
        toastAlerta('Erro ao cadastrar o Usuário', 'erro');
      }
    } else {
      toastAlerta(
        'Dados inconsistentes. Verifique as informações de cadastro.',
        'erro',
      );
      setUsuario({ ...usuario, senha: '' }); // Reinicia o campo de Senha
      setConfirmaSenha(''); // Reinicia o campo de Confirmar Senha
    }
  }

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold">
        <div className="fundoCadastro hidden lg:block"></div>
        <form
          className="flex justify-center items-center flex-col w-2/3 gap-3"
          onSubmit={cadastrarNovoUsuario}
        >
          <h2 className="text-xl md:text-4xl font-bold leading-tight mt-12">
            Cadastrar
          </h2>
          <div className="flex flex-col w-full">
            <label htmlFor="nome"></label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Digite seu nome"
              className="w-full block bg-gray-100 text-gray-500 font-semibold rounded-lg
              px-4 py-3 mt-6"
              value={usuario.nome}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
              }
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="Usuario"></label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              placeholder="Digite seu email"
              className="w-full block bg-gray-100 text-gray-500 font-semibold rounded-lg
              px-4 py-3 mt-6"
              value={usuario.usuario}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
              }
            />
          </div>
          {/* <div className="flex flex-col w-full">
            <label htmlFor="foto"></label>
            <input
              type="text"
              id="foto"
              name="foto"
              placeholder="Foto"
              className="border-2 border-teal-700 rounded p-2"
            />
          </div> */}
          <div className="flex flex-col w-full">
            <label htmlFor="Digite sua senha"></label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="Senha"
              className="w-full block bg-gray-100 text-gray-500 font-semibold rounded-lg
              px-4 py-3 mt-6"
              value={usuario.senha}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
              }
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="confirmarSenha"></label>
            <input
              type="password"
              id="confirmarSenha"
              name="confirmarSenha"
              placeholder="Confirme a senha"
              className="w-full block bg-gray-100 text-gray-500 font-semibold rounded-lg
              px-4 py-3 mt-6"
              value={confirmaSenha}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleConfirmarSenha(e)
              }
            />
          </div>
          <div className="flex justify-around w-full gap-8">
            <button
              className="mt-10 w-full block bg-white hover:bg-gray-100  text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300"
              onClick={back}
            >
              Cancelar
            </button>
            <button
              className="mt-10 w-full block bg-teal-500 hover:bg-teal-600 text-white  text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300"
              type="submit"
            >
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Cadastro;
