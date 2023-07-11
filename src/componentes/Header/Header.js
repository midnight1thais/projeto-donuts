import { BotaoNavegacao, HeaderContainer } from "./styles"
import menu from "../../assets/assets/menu.png"

function Header(){

    const handlePageChange=()=>{
        props.pagina
    }
    return(
    <HeaderContainer>
        <BotaoNavegacao>
            <img src={menu} alt="imagem do botão de navegação do menu"/>
        </BotaoNavegacao>
        
        <BotaoNavegacao>
            <img src={menu} alt="imagem2 do botão de navegação do menu"/>
        </BotaoNavegacao>

    </HeaderContainer>

    )
}

export default Header