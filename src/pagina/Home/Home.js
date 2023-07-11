import Nav from '../../componentes/Nav/Nav'
import Card from '../../componentes/Card/Card'
import Header from '../../componentes/Header/Header'

import { SectionCard } from "./styled"


function Home(props){
    return(
    <>
    <Header pagina={props.pagina}/>
        <Nav/>
        <SectionCard>
            <Card/>
        </SectionCard>
    </>

    )
}

export default Home