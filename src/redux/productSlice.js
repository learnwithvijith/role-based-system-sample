import { createSlice } from "@reduxjs/toolkit";

const initial =  JSON.parse(localStorage.getItem('products'))   || []

const productSlice = createSlice({
    name:'products',
    initialState:initial,
    reducers:{
        addProduct : (state,action)=>{
            const newProduct = action.payload
            state.push(newProduct)
            localStorage.setItem('products', JSON.stringify(state))
        }
    }
})

export const {addProduct} = productSlice.actions
export default productSlice.reducer