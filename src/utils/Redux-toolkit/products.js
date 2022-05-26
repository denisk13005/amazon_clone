import { createSlice } from "@reduxjs/toolkit"

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    loading: false,
    error: null,
  },
  reducers: {
    addProduct: (state, action) => {
      console.log(action.payload)
      state.products = [...state.products, action.payload]
    },
  },
})

export const { addProduct } = productsSlice.actions
export default productsSlice.reducer
