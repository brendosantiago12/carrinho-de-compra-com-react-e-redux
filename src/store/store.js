import {createStore, combineReducers} from 'redux'
import ProductsReducer from './Products/Products.reducer'
import CartReducer from './Cart/Cart.reducer'

const rootReducer = combineReducers({
    products: ProductsReducer,
    cart: CartReducer
})

const store = createStore(rootReducer)

export default store