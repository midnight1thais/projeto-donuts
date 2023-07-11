import { BotaoNavegacao, HeaderContainer } from "./styles"
import menu from "../../assets/assets/menu.png"

function Header(props){

    const handlePageChange=()=>{
        props.pagina()
    }
    return(
    <HeaderContainer>
        <BotaoNavegacao onClick={handlePageChange}>
            <img src={menu} alt="imagem do botão de navegação do menu"/>
        </BotaoNavegacao>
        
        <BotaoNavegacao>
            <img src={menu} alt="imagem2 do botão de navegação do menu"/>
        </BotaoNavegacao>

    </HeaderContainer>

    )
}

export default Header