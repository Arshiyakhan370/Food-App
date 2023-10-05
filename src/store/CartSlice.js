import { createSlice } from "@reduxjs/toolkit"

 const initialState={
    numberOfItemOfCart:0, 
    isCartShow:true,

 }
 const cartSlice=createSlice({
    name:"Cart",
    initialState:initialState,
    reducers:{
         increseNumberOfItem:(state)=>{
            state.numberOfItemOfCart++;
         },
          toggleCartReducer:(state,action)=>{
           state.isCartShow= action.payload;
          }
             
         
    }
 })
 export const cartAction=cartSlice.actions;
 export default cartSlice.reducer;