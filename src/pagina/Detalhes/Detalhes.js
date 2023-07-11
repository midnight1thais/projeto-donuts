import Header from '../../componentes/Header/Header'


import { BotaoAddCard, BotaoMore, ContainerDetalhes, ContainerDiv, ImagemGrande, MaisProdutos, TextMore, TextNumber, TextoDonuts, TituloDonuts } from "./styled"


function Detalhes(props){
    return(
    <>
    <Header pagina={props.pagina}/>
        <ContainerDetalhes>
            <ImagemGrande src='' alt=''/>
            <ContainerDiv>
                <TituloDonuts>
                    Unicorn Sprinkles
                </TituloDonuts>
                <TextoDonuts>
                    A fluffy fresh cooked donut covered by a creamy strawberry flavour with rainbow sprinkles.
                </TextoDonuts>

                <MaisProdutos>
                    <img src="" alt='imagem'/>
                    <TextNumber> 7800 </TextNumber>
                </MaisProdutos>

                <MaisProdutos>
                    <TextMore> Need More? </TextMore>
                    <BotaoMore> Add More </BotaoMore>

                </MaisProdutos>

                <BotaoAddCard> Add to Card </BotaoAddCard>
            </ContainerDiv>
        </ContainerDetalhes>
    </>

    )
}

export default Detalhes