import { Button } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";

function BotaoProdutos() {

    const navigate = useNavigate();

return(
<>

<div>

<Link to= '/cadastroProduto'
className="rounded bg-teal-800 text-white py-2 px-4 hover:font-bold"
                             
>
Cadastrar Produto
            
  </Link>


</div>
</>


)}

export default BotaoProdutos;
