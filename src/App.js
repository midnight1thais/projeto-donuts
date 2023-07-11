import { useState } from "react";
import Home from "./pagina/Home/Home";
import Detalhes from "./pagina/Detalhes/Detalhes";

import StyledGlobal, { CorFundo } from "./styledGlobal";


function App() {
  //estado inicial que é o trocarDePagina
  // setTrocarDePagina é a função que faz o estado ser atualizado
  const [trocarDePagina, setTrocarDePagina] = useState(0)

  const changePage = (change) =>{
    setTrocarDePagina(change)
  }
  return (
   <>
   <CorFundo>
    <StyledGlobal/>
    {trocarDePagina === 0 ? (
    <Home pagina={()=>changePage(1)}/>
    ):(
    <Detalhes pagina={()=>changePage(0)}/>
    )}

    {/* <Detalhes/> */}
    
   </CorFundo>
   </>
  );
}

export default App;
