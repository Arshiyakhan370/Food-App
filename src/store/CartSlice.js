import { createSlice } from "@reduxjs/toolkit";
import { ToastContainer, toast } from 'react-toastify';

const initialState = {
 isCartShow: true,
  cartItem: [],
  subTotal:0,
  
};
const cartSlice = createSlice({
  name: "Cart",
  initialState: initialState,
  reducers: {
    
    toggleCartReducer: (state, action) => {
      state.isCartShow = action.payload;
    },

    addToCartItem (state, action) {
     const isProductExist=state.cartItem.find((item)=>item.id===action.payload.id)
     if(isProductExist){
      isProductExist.quantity++;
      state.subTotal+=isProductExist.price;
      toast.success('This is a success message!', {
        position: "top-right",
        autoClose: 3000,
      })
     }else{
      state.cartItem.push(action.payload)
      state.subTotal+=action.payload.price;
      toast.success('This is a success message!', {
        position: "top-right",
        autoClose: 3000, // Close the toast after 3 seconds
      });
     }
     
      console.log(state.cartItem)
    },
    increaseQuantity: (state,action)=>{
     const existProduct=state.cartItem.find((item)=>item.id===action.payload)
     existProduct.quantity++
     state.subTotal+=existProduct.price;
    },
    decreaseQuantity:(state,action)=>{
      const existProduct=state.cartItem.find((item)=>item.id===action.payload)
      if(existProduct.quantity>1){
         existProduct.quantity--;
         state.subTotal-=existProduct.price;
      }else{
         
         const existProduct=state.cartItem.find((item)=>item.id===action.payload)
         state.subTotal-=existProduct.price;
         state.cartItem=state.cartItem.filter((item)=>item.id!=action.payload)
  
      }
      
    }
  },
});
export const cartAction = cartSlice.actions;
export default cartSlice.reducer;
