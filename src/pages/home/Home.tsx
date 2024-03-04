/* eslint-disable @typescript-eslint/no-unused-vars */
import Carousel from '../../components/carousel/Carousel';
import fotofruta from '../../assets/img/frutas.png';
import fotovegetais from '../../assets/img/vegetal.png';
import fotoOleaginosos from '../../assets/img/amendoim.png';
import fotoLeguminosas from '../../assets/img/ervilhas.png';
import fotoDerivados from '../../assets/img/derivados-do-leite.png';
import fotoRegionais from '../../assets/img/jardineiro.png';
import { Link } from 'react-router-dom';
import usuario1 from '../../assets/img/Madu.jpg';
import usuario2 from '../../assets/img/dea (1).jpg';
import usuario3 from '../../assets/img/gabi.jpg';
import usuario4 from '../../assets/img/Sara.jpg';
import { Clock, MagnifyingGlass } from '@phosphor-icons/react';
import organic from '../../assets/img/grapes-strawberries-pineapple-kiwi-apricot-banana-whole-pineapple.jpg';
import ListaProdutos from '../../components/produtos/listaProdutos/ListaProdutos';

export default function Home() {
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(
        <span key={i} className="text-yellow-400">
          &#9733;
        </span>,
      );
    }
    return stars;
  };

  return (
    <div>
      <Carousel />
      {/* <h1>Home</h1> */}
      <ListaProdutos />

      <section className="bg-gray-200 font-league py-24 px-4 lg:px-16">
        <div className="container mx-auto px-[12px] md:px-24 xl:px-12 max-w-[1300px] nanum2">
          <h1 className="text-center text-teal-700 text-5xl pb-12 mb-14">
            Conheça nossas categorias
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-28 lg:gap-y-16">
            <div className="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-teal-700 shadow-md">
              <a href="#" className="block">
                <div className="h-28">
                  <div className="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 bg-teal-700 rounded-xl justify-items-center align-middle">
                    <Link to={'/categorias'}>
                      <img
                        src={fotofruta}
                        className="w-36 h-36  mt-6 m-auto"
                        alt="Automotive"
                        title="Automotive"
                        loading="lazy"
                        width="200"
                        height="200"
                      />
                    </Link>
                  </div>
                </div>
                <div className="p-6   z-10 w-full   ">
                  <p className="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                    Frutas
                  </p>
                </div>
              </a>
            </div>

            <div className="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-teal-700 shadow-md">
              <a href="#" className="block">
                <div className="h-28">
                  <div className="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 bg-teal-700 rounded-xl justify-items-center align-middle">
                    <Link to={'/categorias'}>
                      <img
                        src={fotovegetais}
                        className="w-36 h-36  mt-6 m-auto"
                        alt="Automotive"
                        title="Automotive"
                        loading="lazy"
                        width="200"
                        height="200"
                      />
                    </Link>
                  </div>
                </div>
                <div className="p-6   z-10 w-full   ">
                  <p className="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                    Hortaliças
                  </p>
                </div>
              </a>
            </div>

            <div className="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-teal-700 shadow-md">
              <a href="#" className="block">
                <div className="h-28">
                  <div className="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 bg-teal-700 rounded-xl justify-items-center align-middle">
                    <Link to={'/categorias'}>
                      <img
                        src={fotoOleaginosos}
                        className="w-36 h-36  mt-6 m-auto"
                        alt="Automotive"
                        title="Automotive"
                        loading="lazy"
                        width="200"
                        height="200"
                      />
                    </Link>
                  </div>
                </div>
                <div className="p-6   z-10 w-full   ">
                  <p className="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                    Oleaginosos
                  </p>
                </div>
              </a>
            </div>

            <div className="relative group h-48 flex flex-col rounded-xl bg-white bg-clip-border text-teal-700 shadow-md">
              <a href="#" className="block">
                <div className="h-28">
                  <div className="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9] duration-300 w-[90%] h-48 bg-teal-700 rounded-xl justify-items-center align-middle">
                    <Link to={'/categorias'}>
                      <img
                        src={fotoLeguminosas}
                        className="w-36 h-36  mt-6 m-auto"
                        alt="Automotive"
                        title="Automotive"
                        loading="lazy"
                        width="200"
                        height="200"
                      />
                    </Link>
                  </div>
                </div>
                <div className="p-6   z-10 w-full   ">
                  <p className="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                    Leguminosas
                  </p>
                </div>
              </a>
            </div>

            <div className="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-teal-700 shadow-md">
              <a href="#" className="block">
                <div className="h-28">
                  <div className="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 bg-teal-700 rounded-xl justify-items-center align-middle">
                    <Link to={'/categorias'}>
                      <img
                        src={fotoDerivados}
                        className="w-36 h-36  mt-6 m-auto"
                        alt="Automotive"
                        title="Automotive"
                        loading="lazy"
                        width="200"
                        height="200"
                      />
                    </Link>
                  </div>
                </div>
                <div className="p-6   z-10 w-full   ">
                  <p className="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                    Leite e Derivados
                  </p>
                </div>
              </a>
            </div>

            <div className="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-teal-700 shadow-md">
              <a href="#" className="block">
                <div className="h-28">
                  <div className="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 bg-teal-700 rounded-xl justify-items-center align-middle">
                    <Link to={'/categorias'}>
                      <img
                        src={fotoRegionais}
                        className="w-36 h-36  mt-6 m-auto"
                        alt="Automotive"
                        title="Automotive"
                        loading="lazy"
                        width="200"
                        height="200"
                      />
                    </Link>
                  </div>
                </div>
                <div className="p-6   z-10 w-full   ">
                  <p className="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                    Regionais
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 font-league py-24 px-4 lg:px-16">
        <div className="container mx-auto px-[12px] md:px-24 xl:px-12 max-w-[1300px]">
          <h1 className="text-center text-teal-700 text-5xl pb-12 mb-14">
            Dicas de como utilizar nossos produtos
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={organic}
                alt="Organic Food"
                className="w-full h-60 object-cover object-center"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">Salada de Verão</h2>
                <p className="text-gray-600 mb-4">
                  Uma deliciosa e refrescante salada de verão feita com
                  ingredientes orgânicos frescos.
                </p>
                <div className="flex items-center justify-between">
                  <Link
                    to="/recipe/1"
                    className="text-teal-500 hover:text-teal-700"
                  >
                    Ver Receita
                  </Link>
                  <div className="flex items-center">
                    <Clock size={16} className="mr-1" />
                    <span className="text-gray-600">30 min</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={organic}
                alt="Organic Food"
                className="w-full h-60 object-cover object-center"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">Salada de Verão</h2>
                <p className="text-gray-600 mb-4">
                  Uma deliciosa e refrescante salada de verão feita com
                  ingredientes orgânicos frescos.
                </p>
                <div className="flex items-center justify-between">
                  <Link
                    to="/recipe/1"
                    className="text-teal-500 hover:text-teal-700"
                  >
                    Ver Receita
                  </Link>
                  <div className="flex items-center">
                    <Clock size={16} className="mr-1" />
                    <span className="text-gray-600">30 min</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={organic}
                alt="Organic Food"
                className="w-full h-60 object-cover object-center"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">Salada de Verão</h2>
                <p className="text-gray-600 mb-4">
                  Uma deliciosa e refrescante salada de verão feita com
                  ingredientes orgânicos frescos.
                </p>
                <div className="flex items-center justify-between">
                  <Link
                    to="/recipe/1"
                    className="text-teal-500 hover:text-teal-700"
                  >
                    Ver Receita
                  </Link>
                  <div className="flex items-center">
                    <Clock size={16} className="mr-1" />
                    <span className="text-gray-600">30 min</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={organic}
                alt="Organic Food"
                className="w-full h-60 object-cover object-center"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">Salada de Verão</h2>
                <p className="text-gray-600 mb-4">
                  Uma deliciosa e refrescante salada de verão feita com
                  ingredientes orgânicos frescos.
                </p>
                <div className="flex items-center justify-between">
                  <Link
                    to="/recipe/1"
                    className="text-teal-500 hover:text-teal-700"
                  >
                    Ver Receita
                  </Link>
                  <div className="flex items-center">
                    <Clock size={16} className="mr-1" />
                    <span className="text-gray-600">30 min</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://areademulher.r7.com/wp-content/uploads/2021/02/como-fazer-sopa-de-legumes-historia-do-prato-receitas-deliciosas-1200x900.jpg"
                alt="Organic Food"
                className="w-full h-60 object-cover object-center"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">Sopa de Legumes</h2>
                <p className="text-gray-600 mb-4">
                  Uma saborosa sopa de legumes, perfeita para os dias frios,
                  feita com vegetais orgânicos frescos.
                </p>
                <div className="flex items-center justify-between">
                  <Link
                    to="/recipe/2"
                    className="text-teal-500 hover:text-teal-700"
                  >
                    Ver Receita
                  </Link>
                  <div className="flex items-center">
                    <Clock size={16} className="mr-1" />
                    <span className="text-gray-600">45 min</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://cdn.loveandlemons.com/wp-content/uploads/2023/05/mango-smoothie.jpg"
                alt="Organic Food"
                className="w-full h-60 object-cover object-center"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">
                  Smoothie Energizante
                </h2>
                <p className="text-gray-600 mb-4">
                  Um smoothie saudável e energizante, preparado com frutas e
                  verduras orgânicas.
                </p>
                <div className="flex items-center justify-between">
                  <Link
                    to="/recipe/3"
                    className="text-teal-500 hover:text-teal-700"
                  >
                    Ver Receita
                  </Link>
                  <div className="flex items-center">
                    <Clock size={16} className="mr-1" />
                    <span className="text-gray-600">10 min</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <Link
              to="/recipes"
              className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded-lg flex items-center"
            >
              <MagnifyingGlass size={20} className="mr-2" />
              <span>Ver Mais Receitas</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white font-league py-24 px-4 lg:px-16">
        <div className="container mx-auto px-[12px] md:px-24 xl:px-12 max-w-[1300px] nanum2">
          <h1 className="text-center text-teal-700 text-5xl pb-12 mb-14">
            Quem comprou, indica!
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-teal-600 rounded-lg shadow-md p-6">
              {/* Depoimento 1 */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center">
                  <img
                    src={usuario1}
                    className="w-12 h-12 rounded-full mr-4"
                    alt="Usuário 1"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">
                      {' '}
                      Sofia Cavalcante{' '}
                    </h3>
                    <p className="text-gray-600">Cliente Satisfeito</p>
                  </div>
                </div>
                <p className="text-gray-700 mt-4">
                  Estou simplesmente impressionado com a plataforma! A
                  facilidade de encontrar produtos orgânicos de alta qualidade e
                  as receitas inspiradoras tornam minha experiência de compra
                  muito mais agradável. Além disso, o design limpo e moderno
                  torna a navegação uma verdadeira delícia. Parabéns à equipe
                  por criar uma plataforma tão incrível.
                </p>
                <div className="mt-4">
                  {/* Renderização das estrelas */}
                  {renderStars(5)}
                </div>
              </div>
            </div>
            <div className="bg-teal-600 rounded-lg shadow-md p-6">
              {/* Depoimento 2 */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center">
                  <img
                    src={usuario2}
                    className="w-12 h-12 rounded-full mr-4"
                    alt="Usuário 2"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">Lucas Souza</h3>
                    <p className="text-gray-600">Cliente Satisfeito</p>
                  </div>
                </div>
                <p className="text-gray-700 mt-4">
                  Esta plataforma é incrível! Encontrei exatamente o que estava
                  procurando em questão de minutos. Além disso, fiquei
                  impressionado com a variedade de categorias e produtos
                  disponíveis. Mal posso esperar para experimentar todas as
                  funcionalidades e continuar explorando tudo o que ela
                  oferece!!
                </p>
                <div className="mt-4">
                  {/* Renderização das estrelas */}
                  {renderStars(5)}
                </div>
              </div>
            </div>
            <div className="bg-teal-600 rounded-lg shadow-md p-6">
              {/* Depoimento 3 */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center">
                  <img
                    src={usuario3}
                    className="w-12 h-12 rounded-full mr-4"
                    alt="Usuário 3"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">Leticia Camargo</h3>
                    <p className="text-gray-600">Cliente Satisfeito</p>
                  </div>
                </div>
                <p className="text-gray-700 mt-4">
                  Estou adorando explorar a plataforma! A interface é intuitiva
                  e fácil de navegar. Encontrei todas as informações que
                  precisava sobre os produtos e ainda descobri algumas receitas
                  deliciosas. Definitivamente, recomendo!!
                </p>
                <div className="mt-4">
                  {/* Renderização das estrelas */}
                  {renderStars(5)}
                </div>
              </div>
            </div>
            <div className="bg-teal-600 rounded-lg shadow-md p-6">
              {/* Depoimento 4 */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center">
                  <img
                    src={usuario4}
                    className="w-12 h-12 rounded-full mr-4"
                    alt="Usuário 4"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">Denise Trindade</h3>
                    <p className="text-gray-600">Cliente Satisfeito</p>
                  </div>
                </div>
                <p className="text-gray-700 mt-4">
                  Minha experiência na plataforma tem sido geralmente positiva.
                  Embora eu tenha encontrado algumas dificuldades de navegação
                  devido a uma interface um pouco confusa em alguns momentos, a
                  variedade de produtos disponíveis e as receitas inspiradoras
                  tornaram a minha jornada de compra mais interessante.
                </p>
                <div className="mt-4">
                  {/* Renderização das estrelas */}
                  {renderStars(4)}
                </div>
              </div>
            </div>
            <a
              href="#"
              className="hidden text-sm font-semibold text-teal-600 hover:text-gray-500 sm:block"
            >
              Faça como eles, deixe seu feedback!
            </a>
            {/* Depoimento 5 e outros... */}
          </div>
        </div>
      </section>
      <section className="bg-gray-200 font-league py-24 px-4 lg:px-16">
        <div className="container mx-auto px-[12px] md:px-24 xl:px-12 max-w-[1300px] nanum2">
          <h1 className="text-center text-teal-700 text-5xl pb-12 mb-14">
            Receba nossas novidades direto no seu email.
          </h1>
          <div className="max-w-md mx-auto">
            <form className="grid grid-cols-1 gap-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Endereço de Email
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    required
                    className="input-box p-2 w-full"
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                >
                  Assinar
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
