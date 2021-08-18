import React,{useState} from 'react'

import { Wrapper } from './components/ShoppingCart/Style'
import ShoppingCart from './components/ShoppingCart/ShoppingCart'
import ShowProducts from './components/ShowProducts/ShowProducts'
import Header from './Shared/Header/Header'
import Footer from './Shared/Footer/Footer'

const App = ()=>{
    const [cart, setCart] = useState(false)

    const handleClick= (click)=>{
        setCart(click)
    }
    return(
        <>
            <Header handleClick={handleClick}/>
            <Wrapper>
                {cart
                ?<ShoppingCart />
                :<ShowProducts />
                }
            </Wrapper>
            <Footer/>
        </>
    )
}

export default App;