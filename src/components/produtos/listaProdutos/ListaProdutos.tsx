import { useContext, useEffect, useState } from 'react';
import { Dna } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import Produto from '../../../models/Produto';
import { buscar } from '../../../services/Service';
import CardProdutos from '../cardProdutos/CardProdutos';
import BotaoProdutos from './BotaoProdutos';

function ListaProdutos() {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  const navigate = useNavigate();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;
  const usuarioLogado = token !== '';

  // useEffect(() => {
  //   if (token === '') {
  //     alert('Você precisa estar logado');
  //     navigate('/login');
  //   }
  // }, [token]);

  async function buscarProdutos() {
    try {
      await buscar('/produto/all', setProdutos, {
        /* headers: {
          Authorization: token,
        }, */
      });
    } catch (e) {
      console.log(e);
    }
    /* catch (error: any) {
      if (error.toString().includes('403')) {
        alert('O token expirou, favor logar novamente')
        handleLogout()
      }
    } */
  }

  useEffect(() => {
    buscarProdutos();
    console.log(token);
  }, [produtos.length]);

  return (
    <>
      {produtos.length === 0 && (
        <Dna
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
      )}
      {usuarioLogado && <BotaoProdutos />}
      <div className="container mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {produtos.map((produto) => {
          return <CardProdutos key={produto.id} post={produto} />;
        })}
      </div>
    </>
  );
}

export default ListaProdutos;