import React from 'react'
import { Wrapper, Title } from './Style'


const Total = ({total})=>{
    return(
        <Wrapper>
            <Title>
                Total
            </Title>
            <Title>
                R${total}
            </Title>
        </Wrapper>
    )
}

export default Total