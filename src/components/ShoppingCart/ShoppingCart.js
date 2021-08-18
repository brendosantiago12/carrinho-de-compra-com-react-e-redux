import React,{ useState, useEffect} from 'react'
import { useSelector } from 'react-redux'

import CallToAction from '../CallToAction/CallToAction'
import HeaderCart from '../HeaderCart/HeaderCart'
import ListProducts from '../ListProducts/ListProducts'
import Total from '../Total/Total'
import { Container, Wrapper, Hr, Gratis, Text } from './Style'

const ShoppingCart = ()=>{
    const [total,setTotal]=useState('')
    const CartReducer = useSelector( state => state.cart )

    useEffect(()=>{
        const price = CartReducer.reduce((a , b) => a+=Number(b.sellingPrice),0)
        setTotal(price)
    },[CartReducer])
    
    return(
        <Wrapper>
            <Container>
                <HeaderCart/>
                <Hr/>
                <ListProducts productsCart={CartReducer}/>
                <Hr/>
                <Total total={total}/>
                {total>1000 && 
                <Gratis>
                    <Text>parabéns, sua compra tem frete grátis</Text>
                </Gratis>
                }
                <Hr/>
                <CallToAction/>
            </Container>
        </Wrapper>
    )
}

export default ShoppingCart;