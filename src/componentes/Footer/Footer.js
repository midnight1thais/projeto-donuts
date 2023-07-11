import { FooterContainer, ImagemMais } from "./styles"
import historico from '../../assets/assets/historico.png'
import promocao from '../../assets/assets/promocao.png'
import mais from '../../assets/assets/mais.png'
import coracao from '../../assets/assets/coracao.png'
import carrinho from '../../assets/assets/carinho.png'

function Footer(){
    return(
    <FooterContainer>
        <img src={historico} alt='imagem de historico'/>
        <img src={promocao} alt='imagem de promoção'/>
        <ImagemMais src={mais} alt='imagem para adicionar, de mais'/>
        <img src={coracao} alt='imagem de coração'/>
        <img src={carrinho} alt='imagem de carrinho'/>
    </FooterContainer>

    )
}

export default Footer