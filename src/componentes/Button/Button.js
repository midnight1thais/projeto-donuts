import { ButtonStyle } from "./styles"

function Button(props){
    return(
        <ButtonStyle>
            {props.titulo}
        </ButtonStyle>
    )
}

export default Button