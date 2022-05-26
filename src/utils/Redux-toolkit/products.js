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
    removeProduct: (state, action) => {
      //on retourne un tableau qui comprend tous les autres éléments sauf celui avec l'id cliqué
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      )
    },
  },
})

export const { addProduct, removeProduct } = productsSlice.actions
export default productsSlice.reducer
