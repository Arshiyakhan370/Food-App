import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isSearch:false,
    searchValue:null,
    
}

const SearchSlice = createSlice({
    name:"Search Functionality",
    initialState,
    reducers:{
        setSearch:(state)=>{
            state.isSearch=!state.isSearch
        },
        setsearchValue:(state,action)=>{
            state.searchValue=action.payload
        },
        
    }
})

export const SearchSliceAction = SearchSlice.actions
export default SearchSlice.reducer