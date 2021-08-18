import React from 'react'

import { BrowserRouter, Switch, Route } from "react-router-dom";

import ShoppingCart from './components/ShoppingCart/ShoppingCart'
import App from './App'
const Router = ()=>{
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route  path="/" component={ShoppingCart}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;