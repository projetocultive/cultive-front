import './Cadastro.css';

function Cadastro() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold">
        <div className="fundoCadastro hidden lg:block"></div>
        <form className="flex justify-center items-center flex-col w-2/3 gap-3">
          <h2 className="text-teal-900 text-5xl mb-10">Cadastrar</h2>
          <div className="flex flex-col w-full">
            <label htmlFor="nome"></label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Digite seu nome"
              className="border-2 border-teal-700 rounded p-3"
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="Email"></label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Digite seu email"
              className="border-2 border-teal-700 rounded p-3"
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
              className="border-2 border-teal-700 rounded p-3"
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="confirmarSenha"></label>
            <input
              type="password"
              id="confirmarSenha"
              name="confirmarSenha"
              placeholder="Confirme a senha"
              className="border-2 border-teal-700 rounded p-3"
            />
          </div>
          <div className="flex justify-around w-full gap-8">
            <button className="rounded text-white bg-teal-700 hover:underline w-1/2 py-2">
              Cancelar
            </button>
            <button
              className="rounded bg-teal-700 text-white hover:bg-teal-900 w-1/2 py-3"
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
