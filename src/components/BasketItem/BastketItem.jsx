import React from "react"
import "./basketItem.scss" // is the same component of product just the button change
import { useDispatch } from "react-redux"
import { removeProduct } from "../../utils/Redux-toolkit/products"

const BastketItem = ({ description, price, smallPrice, stars, img, id }) => {
  const product = { description, price, smallPrice, stars, img, id }
  const dispatch = useDispatch()

  const removeProd = () => {
    dispatch(removeProduct(product.id))
  }
  return (
    <div className="product">
      <div className="headerProduct">
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
      </div>

      <div className="imgAndButton">
        <div className="imgContainer">
          <img src={img} alt="" className="product__image" />
        </div>
        {}
        <button onClick={removeProd}>Supprimer du panier</button>
      </div>
    </div>
  )
}

export default BastketItem
