import { Button } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";

function BotaoCategoria() {

    const navigate = useNavigate();

return(
<>

<div>

<Link to= '/cadastroCategorias'
className="rounded bg-teal-800 text-white py-2 px-4 hover:font-bold"
                             
>
Cadastrar Categoria
            
  </Link>


</div>
</>


)}

export default BotaoCategoria;
