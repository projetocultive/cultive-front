import Categoria from "./Categoria";
import Usuario from "./Usuario";

export default interface Postagem {
  id: number;
  nome: string;
  quantidade: number;
  peso_kg: number;
  preco: number;
  foto: string;
  brinde: string;
  classificacao: string;
  categoria: Categoria | null;
  usuario: Usuario | null;
}