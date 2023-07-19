import Nav from '../../componentes/Nav/Nav'
import Card from '../../componentes/Card/Card'
import Header from '../../componentes/Header/Header'
import Footer from '../../componentes/Footer/Footer'

import { SectionCard } from "./styled"


function Home(props){
    return(
    <>
    <Header pagina={props.pagina}/>
        <Nav/>
        <SectionCard>
            <Card/>
            <Card/>
            <Card/>    
            <Card/>
        </SectionCard>

    <Footer/>
    </>

    )
}

export default Home