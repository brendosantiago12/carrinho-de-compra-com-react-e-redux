import React from 'react'
import { Wrapper, Content, Img, SellingPrice, TitleProduct, ListPrice, Btn} from './Style'

const ProductCard = ({imageUrl, name, listPrice, sellingPrice,onClick})=>{
    return(
        <Wrapper>
            <Img src={imageUrl} />
            <Content>
                <TitleProduct>{name}</TitleProduct>
                <ListPrice>{listPrice}</ListPrice>
                <SellingPrice>{sellingPrice}</SellingPrice>
                <Btn onClick={onClick}>Adicionar ao carrinho</Btn>
            </Content>
        </Wrapper>
    )
}

export default ProductCard;