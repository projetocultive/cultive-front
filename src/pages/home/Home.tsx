import Carousel from '../../components/carousel/Carousel';
import ListaProdutos from '../../components/produtos/listaProdutos/ListaProdutos';

export default function Home() {
  return (
    <>
    <div>
      <Carousel />
      {/* <h1>Home</h1> */}
    </div>
    <ListaProdutos/>
    </>
  );
}
