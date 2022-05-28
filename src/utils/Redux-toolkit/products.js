import { createSlice } from "@reduxjs/toolkit"

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    basketItems: 0,
    loading: false,
    totalPrice: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      const productPresent = state.products.find(
        (el) => el.id === action.payload.id
      )
      if (productPresent) {
        state.products.forEach((product) => {
          if (product.id === action.payload.id) {
            product.qte++
            console.log(product.qte)
          }
        })

        const filteredProducts = state.products.filter(
          (el) => el.id !== action.payload.id
        )
        state.products = [...filteredProducts, productPresent]
      } else {
        let product = action.payload
        product.qte = 1
        state.products = [...state.products, product]
      }

      //on incrémente le nb d'items dans le panier
      state.basketItems++
      //on met à jour le total
      const price = `${action.payload.price}.${action.payload.smallPrice}`
      state.totalPrice = state.totalPrice + parseFloat(price)
    },
    removeProduct: (state, action) => {
      console.log(action.payload)
      // on va checker chercher l'index de l'item dans le tableau pour le supprimer (utile si plusieurs items identiques)
      const index = state.products.findIndex(
        (product) => product.id === action.payload.id
      )
      let newProducts = [...state.products]
      newProducts.splice(index, 1)
      state.products = [...newProducts]
      console.log(index)
      //on décrémente le nb d'items dans le panier
      state.basketItems--
      const price = `${action.payload.price}.${action.payload.smallPrice}`
      console.log(price)
      state.totalPrice = state.totalPrice - parseFloat(price)
    },
  },
})

export const { addProduct, removeProduct } = productsSlice.actions
export default productsSlice.reducer
