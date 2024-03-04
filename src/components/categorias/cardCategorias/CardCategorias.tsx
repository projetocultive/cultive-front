
import { Link } from 'react-router-dom'
import Categoria from '../../../models/Categoria'

interface categoriaProps {
  categoria : Categoria
}

function CardCategorias({categoria}:categoriaProps) {
  return (
    <div className='bg-fundo border flex flex-col rounded-2xl overflow-hidden justify-between'>
      <header className='py-2 px-6 bg-teal-700 text-white font-bold text-2xl'>{categoria.nome}</header>
      <p className='p-8 text-3xl bg-slate-200 h-full'>{categoria.descricao}</p>
      <div className="flex">
        <Link to={`/editarCategoria/${categoria.id}`} className='w-full text-slate-100 bg-teal-400 hover:bg-teal-500 flex items-center justify-center py-2'>
          <button>Editar</button>
        </Link>
        <Link to={`/deletarCategorias/${categoria.id}`} className='text-slate-100 bg-red-400 hover:bg-red-500 w-full flex items-center justify-center'>
          <button>Deletar</button>
        </Link>
      </div>

      

      
    </div>
  )
}

export default CardCategorias