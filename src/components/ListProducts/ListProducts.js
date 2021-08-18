import React from 'react'

import Product from '../Product/Product'
import { Wrapper } from './Style'

const ListProducts = ({productsCart})=>{
    return(
        <Wrapper>
            {
                productsCart.length?
                productsCart.map( product =>
                    <Product
                    key={product.id} 
                    imageUrl={product.imageUrl} 
                    name={product.name} 
                    listPrice={product.listPrice} 
                    sellingPrice={product.sellingPrice}
                    />
                )
                :<h3>Carrinho vazio</h3>
            }
        </Wrapper>
    )
}

export default ListProducts