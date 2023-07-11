import { CardContainer, ImagemCard, TextCard, DivCard, TituloCard } from "./styles";
import donutsUnicorn from "../../assets/assets/donut 1.png"

function Card(){

    return(
        <CardContainer>
            <ImagemCard src={donutsUnicorn}/>
                <TituloCard>
                    Unicorn Sprinkles
                </TituloCard>

                <TextCard>
                    Strawberry Creamy...
                </TextCard>

                <DivCard>
                    <p>7.800</p>
                    <p>Mais</p>
                </DivCard>
            
        </CardContainer>
    )
}

export default Card