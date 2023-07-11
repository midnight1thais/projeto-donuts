import { useState } from "react";
import Home from '../../componentes/Home/Home'
import Detalhes from '../../componentes/Detalhes/Detalhes'

import StyledGlobal, { CorFundo } from "./styledGlobal";


function App() {
  //estado inicial que é o trocarDePagina
  // setTrocarDePagina é a função que faz o estado ser atualizado
  const [trocarDePagina, setTrocarDePagina] = useState()

  const changePage = () =>{
    setTrocarDePagina
  }
  return (
   <>
   <CorFundo>
    <StyledGlobal />
    {trocarDePagina === 0 ? (<Home pagina={()=>changePage(1)}/>):(<Detalhes pagina={()=>changePage(0)}/>)}

    {/* <Detalhes/> */}
    
   </CorFundo>
   </>
  );
}

export default App;
