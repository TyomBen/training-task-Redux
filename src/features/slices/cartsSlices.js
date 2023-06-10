import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../data/fakedata";

const cartsSlice =  createSlice({
    name: 'carts',
    initialState: {
        data,
        amount: 0,
        totalPrice: 0,
    },
    reducers: {
        remove: (state, action) => {
            
            console.log('remove-state', state, action)
            state.data = state.data.filter(item => item.id !== action.payload)
        },

        clearAllData: (state) => {
            state.data = [];
        },

        calculateTotal: (state, action) => {
            console.log('state.data', state.data)
             state.data.forEach(item => {
                state.totalPrice += +item.price
            })
            // console.log()

            // state.totalPrice = totalPrice

        },     
        calculateAmount: (state, action) => {
            state.amount = state.data.length
        }
    }

})

const { 
    remove, 
    calculateTotal, 
    clearAllData, 
    calculateAmount,
 } = cartsSlice.actions;
export  { remove, calculateTotal, clearAllData, calculateAmount };

export default cartsSlice.reducer;