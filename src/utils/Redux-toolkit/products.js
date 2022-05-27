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
      state.products = [...state.products, action.payload]
      //on incrémente le nb d'items dans le panier
      state.basketItems++
      //on met à jour le total
      const price = `${action.payload.price}.${action.payload.smallPrice}`
      state.totalPrice = state.totalPrice + parseFloat(price)
    },
    removeProduct: (state, action) => {
      console.log(action.payload)
      //on retourne un tableau qui comprend tous les autres éléments sauf celui avec l'id cliqué
      state.products = state.products.filter(
        (product) => product.id !== action.payload.id
      )
      //on dévrémente le nb d'items dans le panier
      state.basketItems--
      const price = `${action.payload.price}.${action.payload.smallPrice}`
      console.log(price)
      state.totalPrice = state.totalPrice - parseFloat(price)
    },
  },
})

export const { addProduct, removeProduct } = productsSlice.actions
export default productsSlice.reducer
