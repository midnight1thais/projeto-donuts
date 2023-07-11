import { ContainerNav } from './styled'
import Button from '../Button/Button'
import filtro from '../../assets/assets/filtro.png'

function Nav(){
    return (
        <ContainerNav>
            <Button titulo={"Donuts"}/>
            <Button titulo={"Ice Cream"}/>
            <Button titulo={"Donuts 3"}/>
            <img src={filtro} alt=''/>
        </ContainerNav>
    )
}

export default Nav