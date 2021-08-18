import React from 'react'
import { Wrapper, Container, Text} from './Style'

const Header = ({handleClick})=>{
    return(
        <Wrapper>
            <Container>
                <Text onClick={()=>{ handleClick(false) }}>
                    Produtos
                </Text>
                <Text onClick={()=>{ handleClick(true) }}>
                    carrinho
                </Text>
            </Container>
        </Wrapper>
    )
}

export default Header