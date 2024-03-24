import { createSlice } from "@reduxjs/toolkit"

const initialState = []

export const productDetailsSlices = createSlice({
    name : "brand",
    initialState,
    reducers : {
        ShowProduct : (state,action) => {
            console.log(action, 'show product')
        },

    }
})

export default productDetailsSlices.reducer
export const {addBrand,deleteBrand} = productDetailsSlices.actions