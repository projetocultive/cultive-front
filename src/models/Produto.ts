import Categoria from "./Categoria";
import Usuario from "./Usuario";

export default interface Produto {
  id: number;
  nome: string;
  quantidade: number;
  peso: number;
  preco: number;
  foto: string;
  brinde: string;
  classificacao: string;
  data: number;
  categoria?: Categoria | null;
  usuario?: Usuario | null;
}