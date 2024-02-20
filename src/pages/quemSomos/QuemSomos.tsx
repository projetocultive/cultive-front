import React from 'react';
import missao from '../../assets/img/missao2.png'
import valores from '../../assets/img/valores.png'
import visao from '../../assets/img/visao.svg'



function QuemSomos() {
  return (
    <>
    <div className="sobre-nos-container py-8 px-20 ml-20 mr-20 ">
    <h2 className="text-4xl mt-10 text-teal-900 font-bold text-center">Missão</h2>
      <section className="flex items-center m-3">
        
        <p className="text-2xl text-teal-700 justify-center text-justify mx-8 mb-1">
        Facilitar uma conexão direta e transparente entre produtores e consumidores, redefinindo os padrões de produção, distribuição e consumo de alimentos. Nosso propósito é construir uma ponte que promova relações mais justas e sustentáveis, estamos dedicados a moldar uma nova visão, transformando a maneira como o mundo consome e se alimenta.  
        </p>
        <img src={missao} alt="Missão" className="max-w-full h-auto rounded-md" />
      </section>


      <h2 className="text-4xl mt-8 text-teal-900 font-bold text-center">Valores</h2>
      <section className="flex items-center m-3 py-8">
        <img src={valores} alt="Valores" className="max-w-full h-auto rounded-md " />
        <ol className=" list-none text-2xl text-teal-700 justify-center text-justify mx-8 mb-1">
          <li><strong>Transparência:</strong> Comprometemo-nos a operar com total transparência em todas as interações, promovendo confiança e conscientização.</li> <br />
          <li><strong>Inovação Sustentável:</strong> Buscamos constantemente maneiras inovadoras e sustentáveis de conectar produtores e consumidores, contribuindo para um futuro mais saudável.</li> <br />
          <li><strong>Colaboração Eficiente:</strong> Acreditamos na eficácia da colaboração, fortalecendo vínculos entre comunidades produtoras e consumidores.</li> <br />
          <li><strong>Empoderamento Econômico aos Produtores:</strong> Comprometemo-nos a oferecer uma variedade de produtos locais e sustentáveis, tornando a produção agrícola uma força econômica positiva.</li> <br />
          <li><strong>Responsabilidade Ambiental:</strong> Nosso compromisso é minimizar o impacto ambiental, incentivando práticas conscientes que beneficiem tanto os produtores quanto os consumidores.</li><br />
        </ol>
      </section>

      <h2 className="text-4xl mt-10 text-teal-900 font-bold text-center">Visão</h2>
      <section className=" flex vision p-8 rounded-lg text-center mt-8">

        <p className="text-2xl text-teal-700 justify-center text-justify mx-8 mb-1">
        Imaginamos um futuro onde o Cultive é a referência global para uma comunidade de produtores e consumidores comprometidos com alimentos mais saudáveis, sustentáveis e acessíveis. Queremos ser reconhecidos não apenas como uma plataforma, mas como a força transformadora que inspira mudanças positivas em todo o sistema alimentar global.
        </p>
        <img src={visao} alt="Visão" className="max-w-full h-auto rounded-md" />
      </section>
    </div>
    </>
  );
};

export default QuemSomos;