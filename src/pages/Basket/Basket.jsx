import React from "react"
import { useSelector } from "react-redux"
import "./basket.scss"

import BastketItem from "../../components/BasketItem/BastketItem"

const Basket = () => {
  const products = useSelector((state) => state.products.products)
  console.log(products)
  return (
    <main className="basketMain">
      <div className="basket__left">
        <h2 className="basket__title">Votre panier</h2>
        {products &&
          products.map((product) => (
            <BastketItem
              description={product.description}
              price={product.price}
              img={product.img}
              smallPrice={product.smallPrice}
              stars={product.stars}
              id={product.id}
            />
          ))}
      </div>
      <div className="basket__right">Total</div>
    </main>
  )
}

export default Basket
