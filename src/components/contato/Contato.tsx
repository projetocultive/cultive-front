import './Contato.css';

function Contato() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold">
        <div className="fundoContato hidden lg:block"></div>
        <form className="flex justify-center items-center flex-col w-2/8 gap-6">
          <h2 className="text-xl md:text-4xl font-bold leading-tight mt-12">
            {' '}
            Fale com a gente!{' '}
          </h2>
          <div className="flex flex-col w-full">
            <label htmlFor="nome"></label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Nome"
              className="w-full block bg-gray-100 text-gray-500 font-semibold rounded-lg
              px-4 py-3 mt-6"
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="email"></label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Digite seu email"
              className="w-full block bg-gray-100 text-gray-500 font-semibold rounded-lg
              px-4 py-3 mt-6"
            />
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="assunto"></label>
            <input
              type="text"
              id="assunto"
              name="assunto"
              placeholder="Assunto"
              className="w-full block bg-gray-100 text-gray-500 font-semibold rounded-lg
              px-4 py-3 mt-6"
            />
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="mensagem"></label>
            <textarea
              name="mensagem"
              id="mensagem"
              placeholder="Digite aqui sua mensagem"
              className="bw-full block bg-gray-100 text-gray-500 font-semibold rounded-lg
              px-4 py-3 mt-6"
              rows={6}
              cols={60}
            ></textarea>
          </div>

          <div className="flex justify-around w-full gap-8">
            <button
              className="rounded text-white bg-teal-600 hover:bg-teal-800 w-1/2 py-2"
              type="submit"
            >
              Enviar mensagem
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Contato;
