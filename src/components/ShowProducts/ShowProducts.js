import React from 'react'

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/Cart/Cart.action'

import ProductCard from '../ProductCard/ProductCard';
import { Container, Wrapper } from './Style';

const ShowProducts = ()=>{
    const productsReducer = useSelector(state => state.products)
    const dispatch = useDispatch()

    const AddToCart = (product)=>{
        dispatch(addToCart(product))
    }

    return(
        <Wrapper>
            <Container>
                {
                    productsReducer.map( product =>
                        <ProductCard
                        key={product.id} 
                        imageUrl={product.imageUrl} 
                        name={product.name} 
                        listPrice={product.listPrice} 
                        sellingPrice={product.sellingPrice}
                        id={product.id}
                        onClick={()=>{AddToCart(product)}}
                        />
                    )
                }
            </Container>
        </Wrapper>
    )
}

export default ShowProducts;