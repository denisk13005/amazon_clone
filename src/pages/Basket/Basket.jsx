import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import "./basket.scss"

import BastketItem from "../../components/BasketItem/BastketItem"
import { useNavigate } from "react-router-dom"

const Basket = () => {
  const navigate = useNavigate()
  //redux state
  const products = useSelector((state) => state.products.products)
  const basketItems = useSelector((state) => state.products.basketItems)
  const totalPrice = useSelector((state) => state.products.totalPrice)

  const [purchase, setPurchase] = useState("anim")

  return (
    <main className="basketMain">
      <div className="basket__left">
        <h2 className="basket__title">Votre panier</h2>
        {products &&
          products.map((product, index) => (
            <BastketItem
              description={product.description}
              price={product.price}
              img={product.img}
              smallPrice={product.smallPrice}
              stars={product.stars}
              id={product.id}
              key={index}
            />
          ))}
        {basketItems > 0 ? (
          <div className="subtotal">
            Sous-total ({basketItems} {basketItems > 1 ? "articles" : "article"}
            ):
            {totalPrice.toFixed(2)}
            {}
          </div>
        ) : (
          <div className="continuePurchase">
            <h2>Votre panier est vide </h2>
            <p onClick={() => navigate("/home")} className={purchase}>
              Continuer mes achat
            </p>
          </div>
        )}
      </div>
      <div className="basket__right">Total</div>
    </main>
  )
}

export default Basket
