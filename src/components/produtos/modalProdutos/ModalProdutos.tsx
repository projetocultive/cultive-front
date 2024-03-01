import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';
import './ModalProdutos.css'
import FormularioProdutos from '../formularioProdutos/FormularioProdutos';

function ModalProdutos() {
  return (
    <>
      <Popup 
      trigger={<button className='border rounded px-4 hover:bg-white hover:text-indigo-800'>Novo produto</button>} modal>
        <div>
          <FormularioProdutos />
        </div>
      </Popup>
    </>
  );
}

export default ModalProdutos;