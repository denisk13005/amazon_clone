import React from "react"
import "./product.scss"

const Product = ({ description, price, smallPrice, stars, img }) => {
  console.log(Array(stars).fill().map)
  return (
    <div className="product">
      <p className="product__description">{description}</p>
      <p className="product__price">
        €<strong>{price}</strong>.<small>{smallPrice}</small>
      </p>
      <div className="product__stars">
        {Array(stars)
          .fill()
          .map((_, i) => (
            <span key={i}>⭐</span>
          ))}
      </div>
      <div className="imgAndButton">
        <div className="imgContainer">
          <img src={img} alt="" className="product__image" />
        </div>

        <button>Ajouter au panier</button>
      </div>
    </div>
  )
}

export default Product
