import React from "react"
import { useSelector } from "react-redux"
import "./basket.scss"

import Product from "../../components/Product/Product"

const Basket = () => {
  const products = useSelector((state) => state.products.products)
  console.log(products)
  return (
    <main className="basketMain">
      <div className="basket">
        {products &&
          products.map((product) => (
            <Product
              description={product.description}
              price={product.price}
              img={product.img}
              smallPrice={product.smallPrice}
              stars={product.stars}
              id={product.id}
            />
          ))}
      </div>
    </main>
  )
}

export default Basket
