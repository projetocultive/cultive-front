import fotoAndrea from '../../assets/img/dea (1).jpg';
import fotoGabi from '../../assets/img/gabi.jpg';
import fotoJohn from '../../assets/img/jonny.jpg';
import fotoMadu from '../../assets/img/Madu.jpg';
import fotoNathan from '../../assets/img/Nathan.jpg';
import fotoSara from '../../assets/img/Sara.jpg';
import fotoThayna from '../../assets/img/DSCF3278.jpg';
import fotoSobre1 from '../../assets/img/Design sem nome.png';

export default function QuemSomos() {
  return (
    <>
      <div className="relative flex flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
        <div className="w-full items-center mx-auto max-w-screen-lg">
          <div className="group grid w-full grid-cols-2">
            <div className="pl-16 relative flex items-end flex-col before:block before:absolute before:h-1/6 before:w-4 before:bg-orange-300 before:bottom-0 before:left-0 before:rounded-lg  before:transition-all group-hover:before:bg-orange-200 overflow-hidden">
              <div className="absolute top-0 left-0 bg-teal-800 w-4/6 px-12 py-14 flex flex-col justify-center rounded-xl group-hover:bg-teal-600 transition-all ">
                <span className="block mb-10 font-bold group-hover:text-orange-200">
                  Quem somos nós?
                </span>
                <h2 className="text-white font-bold italic text-3xl">
                  "Os alimentos orgânicos oferecem uma escolha saudável para o
                  seu corpo e um voto de confiança para o meio ambiente."
                </h2>
              </div>
              <a
                className="font-bold text-sm flex mt-2 mb-8 items-center gap-2"
                href=""
              >
                <span>Mais</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </a>
              <div className="rounded-xl overflow-hidden">
                <img src={fotoSobre1} alt="" />
              </div>
            </div>
            <div>
              <div className="pl-12">
                <p className="peer mb-6 text-gray-400">
                  Somos uma plataforma dedicada a facilitar uma conexão direta e
                  transparente entre produtores e consumidores, redefinindo os
                  padrões de produção, distribuição e consumo de alimentos.
                  Nosso propósito é construir uma ponte que promova relações
                  mais justas e sustentáveis, estamos dedicados a moldar uma
                  nova visão, transformando a maneira como o mundo consome e se
                  alimenta.
                </p>
                <p className="mb-6 text-gray-400">
                  Nossos valores fundamentais incluem transparência, inovação
                  sustentável, colaboração eficiente, empoderamento econômico
                  aos produtores e responsabilidade ambiental. Imaginamos um
                  futuro onde somos reconhecidos como a referência global para
                  uma comunidade comprometida com alimentos mais saudáveis,
                  sustentáveis e acessíveis, inspirando mudanças positivas em
                  todo o sistema alimentar global.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-10">
        <div className="mx-auto grid max-w-6xl gap-x-4 gap-y-10 lg:px- xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-teal-800 sm:text-4xl bor">
              Conheça nossa equipe
            </h2>
            <p className="mt-6 text-lg leading-8 text-teal-800">
              Conheça nossa equipe, os talentos por trás do Cultive, um
              e-commerce que conecta produtores rurais e consumidores urbanos
              por meio de preços justos e redução de desperdício. Com uma equipe
              diversificada e comprometida, buscamos promover uma conexão direta
              e sustentável entre quem cultiva e quem consome, apoiando
              comunidades rurais e práticas de consumo consciente.
            </p>
          </div>
          <ul
            role="list"
            className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
          >
            <li>
              <div className="flex items-center gap-x-6">
                <img
                  className="h-16 w-16 rounded-full"
                  src={fotoAndrea}
                  alt=""
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    Andrea Furtunato
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-teal-600">
                    Desenvolvedora FullStack Jr.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-x-6">
                <img className="h-16 w-16 rounded-full" src={fotoGabi} alt="" />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    Gabriella Vieira
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-teal-600">
                    Desenvolvedora FullStack Jr.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-x-6">
                <img className="h-16 w-16 rounded-full" src={fotoJohn} alt="" />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    Johnnata Silva
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-teal-600">
                    Desenvolvedora FullStack Jr.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-x-6">
                <img className="h-16 w-16 rounded-full" src={fotoMadu} alt="" />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    Maria Eduarda Vasconcelos
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-teal-600">
                    Desenvolvedora FullStack Jr.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-x-6">
                <img
                  className="h-16 w-16 rounded-full"
                  src={fotoNathan}
                  alt=""
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    Nathan Nolacio
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-teal-600">
                    Desenvolvedora FullStack Jr.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-x-6">
                <img className="h-16 w-16 rounded-full" src={fotoSara} alt="" />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    Sara Albuquerque
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-teal-600">
                    Desenvolvedora FullStack Jr.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-x-6">
                <img
                  className="h-16 w-16 rounded-full"
                  src={fotoThayna}
                  alt=""
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    Thayná Barreto
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-teal-600">
                    Desenvolvedora FullStack Jr.
                  </p>
                </div>
              </div>
            </li>

            {/* <!-- More people... --> */}
          </ul>
        </div>
      </div>
    </>
  );
}
