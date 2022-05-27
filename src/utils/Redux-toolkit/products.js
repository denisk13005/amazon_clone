import { createSlice } from "@reduxjs/toolkit"

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    basketItems: 0,
    loading: false,
    error: null,
    totalPrice: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      console.log(action.payload)
      state.products = [...state.products, action.payload]
      //on incrémente le nb d'items dans le panier
      state.basketItems++
      //on met à jour le total
      state.totalPrice = state.totalPrice + action.payload.price
    },
    removeProduct: (state, action) => {
      //on retourne un tableau qui comprend tous les autres éléments sauf celui avec l'id cliqué
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      )
      //on dévrémente le nb d'items dans le panier
      state.basketItems--
      console.log("remove", state.totalPrice - action.payload.price)
    },
  },
})

export const { addProduct, removeProduct } = productsSlice.actions
export default productsSlice.reducer
