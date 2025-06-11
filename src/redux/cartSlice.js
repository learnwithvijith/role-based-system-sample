import { createSlice } from "@reduxjs/toolkit";

const initial =  JSON.parse(localStorage.getItem('cart'))   || []

const cartSlice = createSlice({
    name:'cart',
    initialState:initial,
    reducers:{
        addToCart:(state,action)=>{
            const product = action.payload
           const existing = state.find(item=>item.id=== product.id)
           if(existing){
            existing.quantity += 1
           }else{
            state.push({...product,quantity:1})
           }

           localStorage.setItem('cart', JSON.stringify(state))
        }
    }
})

export const {addToCart} = cartSlice.actions

export default cartSlice.reducer