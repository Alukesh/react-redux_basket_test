import { createSlice } from "@reduxjs/toolkit";
import prod1 from '../images/prod1.jpg'
import prod2 from '../images/prod2.jpg'
import prod3 from '../images/prod3.jpg'


const cart = createSlice({
    name: 'cart',
    initialState: {
        cart: [
            {
                id: 0,
                image: prod1,
                title: 'Lorem ipsum dolor sit amet consectetur. Duis',
                article: 'L434-GH43',
                count: 1,
                price: 420,
                newPrice: null,
            },
            {
                id: 1,
                image: prod2,
                title: 'Lorem ipsum dolor sit amet ',
                article: 'L434-GH43',
                count: 10,
                price: 420,
                newPrice: null,
            },
            {
                id: 2,
                image: prod3,
                title: 'Lorem ipsum dolor sit amet consectetur. Dictum venenatis porta at mus sit congue mi ultrices metus. Egestas varius morbi dictumst at egestas amet egestas. Lacus metus netus aliquet ac ipsum pulvinar amet.',
                article: 'L434-GH43',
                count: 1,
                price: 11000,
                newPrice: 10000
            },
        ]
    },
    reducers: {
        addToCart: (state, action) => {
            state.cart = action.payload;
        },
        removeFromCart: (state, action) =>{
            state.cart = state.cart.filter(obj => obj.id !== action.payload.id )
        },
        addProductCount: (state, action) =>{
            state.cart = state.cart.map(obj => obj.id === action.payload.id ? {...obj, count: obj.count + 1} : obj )
        },
        decreaseProductCount: (state, action) =>{
            state.cart = state.cart.map(obj => obj.id === action.payload.id ? {...obj, count: obj.count - 1} : obj )
        },

    }
})

export default cart.reducer;
export const {addToCart ,removeFromCart, addProductCount, decreaseProductCount} = cart.actions