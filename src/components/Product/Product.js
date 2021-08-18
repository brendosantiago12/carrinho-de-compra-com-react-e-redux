import React from 'react'
import { Content, Img, ListPrice, SellingPrice, TitleProduct, Wrapper } from './Style'

const ProductCard = ({imageUrl, name, listPrice, sellingPrice})=>{
    return(
        <Wrapper>
            <Img src={imageUrl}/>
            <Content>
                <TitleProduct>{name}</TitleProduct>
                <ListPrice>{listPrice}</ListPrice>
                <SellingPrice>{sellingPrice}</SellingPrice>
            </Content>
        </Wrapper>
    )
}

export default ProductCard;