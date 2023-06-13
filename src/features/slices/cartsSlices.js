import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../data/fakedata";

const cartsSlice = createSlice({
  name: "carts",
  initialState: {
    data,
    amount: 0,
    totalPrice: 0,
  },
  reducers: {
    remove: (state, action) => {
      state.data = state.data.filter((item) => item.id !== action.payload);
    },

    clearAllData: (state) => {
      state.data = [];
    },

    calculateTotal: (state) => {
      state.totalPrice = 0;
      state.data.forEach((item) => {
        state.totalPrice += +item.price;
      });
    },
    calculateAmount: (state) => {
      state.amount = state.data.length;
    },
    countIncrement: (state, action) => {    
      state.data.map((item) => {
        if (item.id === action.payload) {
          state.totalPrice += +item.price;
          //state.data.length += 1 //senc amount@ bardzranuma bayc gumar@ chi bardzranum
        }
      });
    },
    countDecrement: (state, action) => {
      state.data.map((item) => {
        if (item.id === action.payload) {
          state.totalPrice -= +item.price;
          state.data.length -= 1;
        }
      });
    },
  },
});

export const {
  remove,
  calculateTotal,
  clearAllData,
  calculateAmount,
  countIncrement,
  countDecrement,
} = cartsSlice.actions;

export default cartsSlice.reducer;
